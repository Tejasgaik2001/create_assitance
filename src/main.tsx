import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(regs => {
    regs.forEach(reg => reg.unregister());
  });
}

const container = document.getElementById("root")!;

// Safari/mobile: disable concurrent scheduling to reduce CPU contention with video decoding
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const isMobile = /iphone|ipad|ipod|android/i.test(navigator.userAgent);

createRoot(container, {
  unstable_concurrentUpdatesByDefault: !(isSafari || isMobile),
} as any).render(<App />);
