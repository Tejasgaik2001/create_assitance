import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    ViteImageOptimizer({
      png: { quality: 60, effort: 8 },
      jpeg: { quality: 60 },
      jpg: { quality: 60 },
      gif: { effort: 3 },
      webp: { quality: 75, effort: 4 },
    }),
    // Enable Brotli compression for production
    mode === 'production' && viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024, // Only compress files > 1KB
    }),
    // Enable Gzip compression as fallback
    mode === 'production' && viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "framer-motion"],
  },
  optimizeDeps: {
    include: [
      "framer-motion",
      "react",
      "react-dom",
      "react-router-dom"
    ],
    // Force CommonJS dependencies to be pre-bundled as ESM
    esbuildOptions: {
      target: 'es2015',
    },
  },
  build: {
    target: ['es2015', 'safari11'],
    cssCodeSplit: true,
    minify: 'terser',
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
      },
      safari10: true, // Ensure Safari 10+ compatibility
    },
    rollupOptions: {
      output: {
        // Optimized chunking strategy for iOS Safari
        manualChunks: (id) => {
          // Core React bundle (critical, load first)
          if (id.includes('node_modules/react') ||
            id.includes('node_modules/react-dom') ||
            id.includes('node_modules/scheduler')) {
            return 'vendor-react';
          }

          // Router (needed early)
          if (id.includes('node_modules/react-router-dom')) {
            return 'vendor-router';
          }

          // Framer Motion (defer, heavy animation library)
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion';
          }

          // Radix UI (defer, only needed for interactive components)
          if (id.includes('node_modules/@radix-ui')) {
            return 'vendor-ui';
          }

          // Icons (defer)
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons';
          }

          // Everything else stays in main bundle
          return undefined;
        },

        // Optimize asset file names
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];

          // Separate video files
          if (/mp4|webm|ogg/.test(ext)) {
            return `assets/videos/[name]-[hash][extname]`;
          }

          // Separate images
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp|avif/.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }

          // Separate fonts
          if (/woff2?|ttf|otf|eot/.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }

          return `assets/[name]-[hash][extname]`;
        },

        // Optimize chunk file names
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },

    // Optimize asset handling
    assetsInlineLimit: 4096, // Inline assets < 4KB as base64

    // Enable source maps for debugging (disable in production)
    sourcemap: mode === 'development',
  },

  // Ensure proper MIME types for iOS Safari
  assetsInclude: ['**/*.mp4', '**/*.webm', '**/*.ogg'],
}));
