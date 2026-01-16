// src/app/sitemap.js

// WordPress'ten Blog yazılarını çeken fonksiyon
async function getBlogPosts() {
  // 100 yazıya kadar çekiyoruz. Sayı artarsa burayı düzenleriz.
  const res = await fetch("https://portal.fontdijitalmedya.com/wp-json/wp/v2/posts?per_page=100&_fields=slug,modified");

  if (!res.ok) return [];
  return res.json();
}

export default async function sitemap() {
  const baseUrl = "https://fontdijitalmedya.com";

  // 1. DİNAMİK BLOG YAZILARI
  const posts = await getBlogPosts();

  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/${post.slug}`,
    lastModified: new Date(post.modified),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // 2. STATİK SAYFALARIN (Elle ekliyoruz)
  const routes = [
    "", // Ana Sayfa
    "/hakkimizda",
    "/hizmetler",
    "/blog",
    "/iletisim", // İletişim sayfan varsa
    "/gizlilik-politikasi",
    "/cerez-cookie-politikasi",
    "/kvkk",
    "/mesafeli-satis-sozlesmesi",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8, // Ana sayfa en yüksek öncelik
  }));

  // Hepsini birleştirip döndür
  return [...routes, ...blogUrls];
}
