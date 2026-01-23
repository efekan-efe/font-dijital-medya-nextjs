/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    // --- SVG AYARLARI (YENİ) ---
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      // 1. Canlı WordPress Siteniz (Ana Kaynak)
      {
        protocol: "https",
        hostname: "fontdijitalmedya.com",
        port: "", // Port boş bırakılır (standart 443/80)
        pathname: "/wp-content/uploads/**", // WordPress'in standart görsel yolu
      },
      // 2. 'www' ile başlayan versiyon (Garanti olsun diye ekliyoruz)
      {
        protocol: "https",
        hostname: "www.fontdijitalmedya.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      // 3. 'www' ile başlayan versiyon (Garanti olsun diye ekliyoruz)
      {
        protocol: "https",
        hostname: "portal.fontdijitalmedya.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      // 4. Localhost (Geliştirme sırasında yerel resimler için)
      {
        protocol: "http",
        hostname: "localhost",
        // Port ve pathname sildik ki her portta çalışabilsin
      },
      {
        protocol: "https",
        hostname: "portal.fontdijitalmedya.com", // Senin WP adresin
        pathname: "/wp-content/uploads/**",
      },
      // 5. Placeholder görselleri için izin
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**", // Tüm yollara izin ver
      },
    ],
  },
};

export default nextConfig;
