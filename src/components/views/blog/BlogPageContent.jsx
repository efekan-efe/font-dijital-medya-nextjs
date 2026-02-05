"use client";

import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import BlogCard from "@/components/shared/BlogCard";
import RocketIcon from "@/components/icons/RocketIcon";
import WebIcon from "@/components/icons/WebIcon";
import NewIdeaIcon from "@/components/icons/NewIdeaIcon";
import { SearchCheck, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

export default function BlogPageContent() {
  const container = useRef(null);

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
        // 1. Önce yazı listesini çekiyoruz
        const res = await fetch("https://portal.fontdijitalmedya.com/wp-json/wp/v2/posts?_embed&per_page=100&_fields=id,title,excerpt,slug,date,content,acf,_links,_embedded", { cache: "no-store" });
        const data = await res.json();

        // 2. ID GELEN GÖRSELLERİ URL'YE ÇEVİRME İŞLEMİ
        // Gelen veriyi tarayıp, ACF alanı "sayı" (ID) olanları bulup düzeltiyoruz.
        const updatedPosts = await Promise.all(
          data.map(async (post) => {
            const acfValue = post.acf?.blog_kart_gorseli;

            // Eğer veri bir SAYI ise (Örn: 8853), bu bir ID'dir.
            if (typeof acfValue === "number") {
              try {
                // ID'den URL'yi bulmak için ekstra bir fetch atıyoruz
                const mediaRes = await fetch(`https://portal.fontdijitalmedya.com/wp-json/wp/v2/media/${acfValue}`);
                if (mediaRes.ok) {
                  const mediaData = await mediaRes.json();
                  // Artık post.acf.blog_kart_gorseli bir sayı değil, URL oldu.
                  post.acf.blog_kart_gorseli = mediaData.source_url;
                }
              } catch (err) {
                console.error(`Görsel ID (${acfValue}) çözülemedi:`, err);
              }
            }
            return post;
          }),
        );

        // 3. Güncellenmiş (URL'leri düzeltilmiş) veriyi state'e atıyoruz
        setPosts(updatedPosts);
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
    setCurrentPage(1);
  };

  const handleCategoryChange = (categoryTitle) => {
    setSelectedCategory(categoryTitle);
    setCurrentPage(1);
  };

  const activeCategoryNames = new Set();
  posts.forEach((post) => {
    const terms = post._embedded?.["wp:term"]?.[0] || [];
    terms.forEach((term) => activeCategoryNames.add(term.name));
  });

  const visibleCategories = allCategories.filter((category) => {
    if (category.title === "Tümü") return true;
    return activeCategoryNames.has(category.title);
  });

  const filteredPosts = posts.filter((post) => {
    const postCategories = post._embedded?.["wp:term"]?.[0]?.map((cat) => cat.name) || [];
    const matchesCategory = selectedCategory === "Tümü" || postCategories.includes(selectedCategory);
    const matchesSearch = post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // --- GSAP ANİMASYONLARI ---
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".category-btn", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(1.7)",
        delay: 0.5,
      });
    }, container);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (loading) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".blog-card-item", { y: 30, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" });
    }, container);
    return () => ctx.revert();
  }, [currentPosts, loading]);

  return (
    <div ref={container} className="font-inter">
      <Breadcrumb badgeContent={badgeContent} titleContent={titleContent} search={true} searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      <div className="max-w-7xl mx-auto py-5">
        {/* Kategori Butonları */}
        <div className="max-w-7xl p-5 w-full flex justify-between items-center max-sm:flex-col max-sm:gap-5">
          <div className="w-full flex justify-start items-center flex-wrap gap-2">
            {visibleCategories.map((category, index) => (
              <button
                className={`category-btn flex justify-start items-center gap-1 rounded-full w-fit border border-primaryColor py-2 px-4 cursor-pointer transition-colors duration-200 max-sm:w-full max-sm:text-sm ${
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
        </div>

        {/* Blog Kartları Listesi */}
        <div className="flex flex-wrap justify-center items-stretch gap-6 px-1 min-h-[400px]">
          {loading ? (
            <div className="w-full h-40 flex justify-center items-center text-primaryColor animate-pulse">Yükleniyor...</div>
          ) : currentPosts.length > 0 ? (
            currentPosts.map((post) => {
              if (post.acf) {
                console.log("Blog Başlığı:", post.title.rendered);
                console.log("Gelen ACF Verisi:", post.acf.blog_kart_gorseli);
                console.log("Veri Tipi:", typeof post.acf.blog_kart_gorseli);
              }
              // 1. Önce ACF verisini ham olarak alalım
              let rawAcfImage = post.acf?.blog_kart_gorseli;

              let finalAcfUrl = null;

              // 2. Veri kontrolü yapalım:
              if (rawAcfImage) {
                // Eğer veri bir "String" ise (doğrudan URL ise)
                if (typeof rawAcfImage === "string") {
                  finalAcfUrl = rawAcfImage;
                }
                // Eğer veri bir "Obje" ise (ACF bazen böyle döndürür) ve içinde 'url' varsa
                else if (typeof rawAcfImage === "object" && rawAcfImage.url) {
                  finalAcfUrl = rawAcfImage.url;
                }
              }

              // 3. Öncelik sırasını belirleyelim (Artık elimizde temiz bir URL var)
              const imageUrl = finalAcfUrl || post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://placehold.co/362x242?text=Gorsel+Yok";

              const authorName = post._embedded?.["author"]?.[0]?.name || "Admin";

              // DÜZELTME: Eğer avatar yoksa boş string yerine varsayılan bir görsel URL'si veriyoruz.
              const authorAvatar = post._embedded?.["author"]?.[0]?.avatar_urls?.["96"] || "https://placehold.co/96x96?text=Yazar";

              const categoryName = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Genel";
              const description = stripHtml(post.excerpt?.rendered || "");

              return (
                <div key={post.id} className="blog-card-item h-full">
                  <BlogCard
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
                </div>
              );
            })
          ) : (
            <div className="w-full text-center py-10 text-gray-500">Aradığınız kriterlere uygun yazı bulunamadı.</div>
          )}
        </div>

        {/* PAGINATION (Değişmedi, aynı kaldı) */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10 mb-5">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-full border border-primaryColor transition-colors ${currentPage === 1 ? "opacity-50 cursor-not-allowed text-primaryColor" : "hover:bg-primaryColor hover:text-white text-primaryColor"}`}
            >
              <ChevronLeft size={20} />
            </button>
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
