const express = require("express");
const compression = require("compression");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;
const DIST = path.join(__dirname, "dist");

// Gzip/deflate compression for all responses
app.use(compression({ level: 6 }));

// Static assets with long-term caching (Vite hashes filenames on build)
app.use(
  "/assets",
  express.static(path.join(DIST, "assets"), {
    maxAge: "1y",
    immutable: true,
  })
);

// Other static files (index.html, favicon, etc.) with short cache
app.use(
  express.static(DIST, {
    maxAge: "1h",
    setHeaders(res, filePath) {
      // Never cache index.html so users always get the latest version
      if (filePath.endsWith("index.html")) {
        res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      }
    },
  })
);

// SPA fallback — serve index.html for all non-file routes
app.get("*", (_req, res) => {
  res.sendFile(path.join(DIST, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
