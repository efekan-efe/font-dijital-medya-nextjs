"use client";

import React, { useState, useEffect } from "react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import BlogCard from "@/components/shared/BlogCard";
import RocketIcon from "@/components/icons/RocketIcon";
import WebIcon from "@/components/icons/WebIcon";
import NewIdeaIcon from "@/components/icons/NewIdeaIcon";
import { SearchCheck, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

// --- YARDIMCI FONKSİYONLAR ---
const stripHtml = (html) => {
  return html.replace(/<[^>]*>?/gm, "");
};

const calculateReadingTime = (content) => {
  const wordsPerMinute = 200;
  const text = stripHtml(content || "");
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} dk okuma`;
};

export default function Blog() {
  // --- STATE YÖNETİMİ ---
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [searchTerm, setSearchTerm] = useState("");

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // --- İÇERİK SABİTLERİ ---
  const badgeContent = (
    <p className="text-primaryBlack w-full font-medium">
      <span className="text-primaryColor px-1">Dijital Dünya’daki</span>
      Dostunuz
    </p>
  );

  const titleContent = (
    <>
      Başarı için <br />
      <span className="text-primaryColor px-1">Dijital Pazarlama</span> İpuçları
    </>
  );

  // Tüm olası kategoriler (Listeyi burada tutuyoruz ama aşağıda filtreleyeceğiz)
  const allCategories = [
    { title: "Tümü", icon: "" },
    { title: "Dijital Pazarlama", icon: <RocketIcon className="fill-none stroke-primaryColor w-[18px] h-[18px]" /> },
    { title: "E-Ticaret Web Sitesi", icon: <WebIcon className="fill-none stroke-primaryColor w-[18px] h-[18px]" /> },
    { title: "Google Reklam", icon: <NewIdeaIcon className="fill-none stroke-primaryColor w-[18px] h-[18px]" /> },
    { title: "Web Hizmetleri", icon: <SearchCheck className="fill-none stroke-primaryColor w-[18px] h-[18px]" /> },
    { title: "Sosyal Medya", icon: <RocketIcon className="fill-none stroke-primaryColor w-[18px] h-[18px]" /> },
    { title: "Sosyal Medya Reklam", icon: <RocketIcon className="fill-none stroke-primaryColor w-[18px] h-[18px]" /> },
    { title: "Uncategorized", icon: <WebIcon className="fill-none stroke-primaryColor w-[18px] h-[18px]" /> },
  ];

  // --- VERİ ÇEKME (FETCH) ---
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Optimize edilmiş sorgu: Sadece gerekli alanları ve son 100 yazıyı çeker.
        const res = await fetch("https://fontdijitalmedya.com/wp-json/wp/v2/posts?_embed&per_page=100&_fields=id,title,excerpt,slug,date,content,_links,_embedded");

        const data = await res.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Blog yazıları alınamadı:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Arama yapılınca ilk sayfaya dön
  };

  const handleCategoryChange = (categoryTitle) => {
    setSelectedCategory(categoryTitle);
    setCurrentPage(1); // Kategori değişince ilk sayfaya dön
  };

  // --- KATEGORİ GÖRÜNÜRLÜK MANTIĞI (YENİ) ---
  // 1. Gelen postların içindeki tüm kategori isimlerini topla
  const activeCategoryNames = new Set();
  posts.forEach((post) => {
    const terms = post._embedded?.["wp:term"]?.[0] || [];
    terms.forEach((term) => activeCategoryNames.add(term.name));
  });

  // 2. Sabit listeyi sadece içi dolu olanlara göre filtrele
  const visibleCategories = allCategories.filter((category) => {
    if (category.title === "Tümü") return true; // Tümü her zaman görünsün
    return activeCategoryNames.has(category.title);
  });

  // --- POST FİLTRELEME MANTIĞI ---
  const filteredPosts = posts.filter((post) => {
    // 1. Kategori Filtresi
    const postCategories = post._embedded?.["wp:term"]?.[0]?.map((cat) => cat.name) || [];
    const matchesCategory = selectedCategory === "Tümü" || postCategories.includes(selectedCategory);

    // 2. Arama Filtresi
    const matchesSearch = post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // --- PAGINATION MANTIĞI ---
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="font-inter">
      <Breadcrumb badgeContent={badgeContent} titleContent={titleContent} search={true} searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      <div className="max-w-7xl mx-auto py-5">
        {/* Kategori Butonları */}
        <div className="max-w-7xl p-5 w-full flex justify-between items-center max-sm:flex-col max-sm:gap-5">
          <div className="w-full flex justify-start items-center flex-wrap gap-2">
            {/* DEĞİŞİKLİK: 'categories' yerine 'visibleCategories' kullanıyoruz */}
            {visibleCategories.map((category, index) => (
              <button
                className={`flex justify-start items-center gap-1 rounded-full w-fit border border-primaryColor py-2 px-4 cursor-pointer transition-colors duration-200 max-sm:w-full max-sm:text-sm ${
                  selectedCategory === category.title ? "bg-primaryColor" : "bg-transparent hover:bg-primaryColor/10"
                }`}
                key={index}
                onClick={() => handleCategoryChange(category.title)}
              >
                {category.icon
                  ? React.cloneElement(category.icon, {
                      className: `fill-none w-[18px] h-[18px] ${selectedCategory === category.title ? "stroke-white" : "stroke-primaryColor"}`,
                    })
                  : null}
                <p className={`${selectedCategory === category.title ? "text-white" : "text-primaryColor"}`}>{category.title}</p>
              </button>
            ))}
          </div>
          <div className="w-fit hidden">
            <button className="text-primaryBlack whitespace-nowrap border border-primaryColor rounded-full py-2 px-4 flex justify-between items-center gap-5">
              En Yeni
              <ChevronDown className="stroke-primaryColor stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* Blog Kartları Listesi */}
        <div className="flex flex-wrap justify-center items-stretch gap-6 px-1 min-h-[400px]">
          {loading ? (
            <div className="w-full h-40 flex justify-center items-center text-primaryColor">Yükleniyor...</div>
          ) : currentPosts.length > 0 ? (
            currentPosts.map((post) => {
              // Veri Mapping (WordPress -> Component)
              const imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder-image.jpg";
              const authorName = post._embedded?.["author"]?.[0]?.name || "Admin";
              const authorAvatar = post._embedded?.["author"]?.[0]?.avatar_urls?.["96"] || "";
              const categoryName = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Genel";
              const description = stripHtml(post.excerpt?.rendered || "");

              return (
                <BlogCard
                  key={post.id}
                  slug={post.slug}
                  image={imageUrl}
                  categories={categoryName}
                  title={post.title.rendered}
                  description={description}
                  authorName={authorName}
                  authorImg={authorAvatar}
                  readingTime={calculateReadingTime(post.content.rendered)}
                  publishDate={post.date}
                />
              );
            })
          ) : (
            <div className="w-full text-center py-10 text-gray-500">Aradığınız kriterlere uygun yazı bulunamadı.</div>
          )}
        </div>

        {/* --- PAGINATION ALANI --- */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10 mb-5">
            {/* Önceki Sayfa Butonu */}
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-full border border-primaryColor transition-colors ${currentPage === 1 ? "opacity-50 cursor-not-allowed text-primaryColor" : "hover:bg-primaryColor hover:text-white text-primaryColor"}`}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Sayfa Numaraları */}
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`w-10 h-10 rounded-full border border-primaryColor flex justify-center items-center font-medium transition-colors ${
                  currentPage === index + 1 ? "bg-primaryColor text-white" : "bg-transparent text-primaryColor hover:bg-primaryColor/10"
                }`}
              >
                {index + 1}
              </button>
            ))}

            {/* Sonraki Sayfa Butonu */}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full border border-primaryColor transition-colors ${currentPage === totalPages ? "opacity-50 cursor-not-allowed text-primaryColor" : "hover:bg-primaryColor hover:text-white text-primaryColor"}`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
