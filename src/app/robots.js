// src/app/robots.js

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // Eğer gizlemek istediğin özel rotalar varsa buraya ekle
    },
    sitemap: "https://fontdijitalmedya.com/sitemap.xml", // Google haritayı burada bulacak
  };
}
