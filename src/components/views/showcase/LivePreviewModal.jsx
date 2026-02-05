// components/showcase/LivePreviewModal.jsx
"use client";

import { X, ExternalLink, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

const LivePreviewModal = ({ url, title, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Modal açıldığında scroll'u kilitle
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full h-[90vh] max-w-6xl rounded-2xl flex flex-col overflow-hidden shadow-2xl relative">
        {/* Modal Üst Bar (Header) */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white">
          <h3 className="font-semibold text-gray-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            {title} - Canlı Önizleme
          </h3>

          <div className="flex items-center gap-3">
            {/* Tam Ekranda Aç Butonu */}
            <Link href={url} target="_blank" className="hidden sm:flex items-center gap-1 text-xs font-medium text-primaryColor hover:bg-primaryColor/10 px-3 py-1.5 rounded-lg transition-colors">
              Yeni Sekmede Aç <ExternalLink className="w-3 h-3" />
            </Link>

            {/* Kapat Butonu */}
            <button onClick={onClose} className="p-2 hover:bg-red-50 text-gray-500 hover:text-red-500 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Iframe Alanı */}
        <div className="relative flex-grow w-full bg-gray-50">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 gap-2">
              <Loader2 className="w-8 h-8 animate-spin text-primaryColor" />
              <span className="text-sm font-medium">Site Yükleniyor...</span>
            </div>
          )}
          <iframe
            src={url}
            className="w-full h-full border-none"
            onLoad={() => setIsLoading(false)}
            title={`Preview of ${title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups" // Güvenlik ayarları
          />
        </div>
      </div>

      {/* Dışarı tıklayınca kapatmak için overlay click handler */}
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
};

export default LivePreviewModal;
