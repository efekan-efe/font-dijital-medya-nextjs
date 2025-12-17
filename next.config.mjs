/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
      // 3. Localhost (Geliştirme sırasında yerel resimler için)
      {
        protocol: "http",
        hostname: "localhost",
        // Port ve pathname sildik ki her portta çalışabilsin
      },
    ],
  },
};

export default nextConfig;
