// src/app/manifest.js

export default function manifest() {
  return {
    name: "Font Dijital Medya",
    short_name: "Font Dijital",
    description: "Dijitalin Yeni Fontu - Profesyonel Web Çözümleri",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#5c45fd", // Senin primary color rengin
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.png", // public klasörüne 192x192 logo koymalısın
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/apple-icon.png", // public klasörüne 180x180 logo koymalısın
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
