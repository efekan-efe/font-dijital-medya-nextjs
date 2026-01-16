// src/app/sitemap.js

const baseUrl = "https://fontdijitalmedya.com";

// 1. BLOG YAZILARINI ÇEK (POSTS)
async function getBlogPosts() {
  try {
    const res = await fetch("https://portal.fontdijitalmedya.com/wp-json/wp/v2/posts?per_page=100&_fields=slug,modified");
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Sitemap Blog Hatası:", error);
    return [];
  }
}

// 2. HİZMET VE KURUMSAL SAYFALARI ÇEK (PAGES)
async function getWordPressPages() {
  try {
    const res = await fetch("https://portal.fontdijitalmedya.com/wp-json/wp/v2/pages?per_page=100&_fields=slug,modified");
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Sitemap Sayfa Hatası:", error);
    return [];
  }
}

export default async function sitemap() {
  // İki veri kaynağını paralel olarak çekiyoruz
  const [posts, pages] = await Promise.all([getBlogPosts(), getWordPressPages()]);

  // --- BLOG YAZILARI URL YAPISI ---
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/${post.slug}`, // Örn: domain.com/seo-nedir
    lastModified: new Date(post.modified),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // --- SAYFA (HİZMETLER) URL YAPISI ---
  // Not: Elle eklediğimiz statik rotalarla çakışmaması için filtreleme yapabiliriz.
  // Örneğin 'anasayfa' slug'ı WP'den geliyorsa onu sitemap'e '/anasayfa' diye eklememeli, '/' olarak eklemeli.
  const excludedSlugs = ["anasayfa", "home"]; // Buraya sitemap'te istemediğin sayfa sluglarını yazabilirsin.

  const pageUrls = pages
    .filter((page) => !excludedSlugs.includes(page.slug))
    .map((page) => ({
      url: `${baseUrl}/${page.slug}`, // Örn: domain.com/web-tasarim
      lastModified: new Date(page.modified),
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  // --- MANUEL STATİK ROTALAR ---
  // Eğer bu sayfalar zaten WordPress'te "Sayfa" olarak kayıtlıysa buradan silebilirsin.
  // Ama özel kodlanmış (Hardcoded) sayfalar varsa burada kalmalı.
  const staticRoutes = [
    "", // Ana Sayfa (Kök Dizin)
    "/blog", // Blog listeleme sayfası (WP'de sayfa olarak yoksa burada kalmalı)
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: route === "" ? 1 : 0.8,
  }));

  // Tüm listeleri birleştir
  return [...staticRoutes, ...pageUrls, ...blogUrls];
}
