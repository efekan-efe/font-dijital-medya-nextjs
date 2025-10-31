import { Search } from "lucide-react";

const FaqSearch = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="max-w-7xl mx-auto w-full h-full flex flex-col gap-3 p-5 border border-primaryColor rounded-t-2xl">
      <h2 className="font-semibold text-xl leading-7 text-primaryColor">Aklınıza Takılan Sorular mı Var? Sorularınızın Cevaplarına Buradan Ulaşabilirsiniz.</h2>
      <div className="flex justify-start items-center gap-3 w-full">
        <div className="w-9 h-9 bg-primaryColor rounded-full flex justify-center items-center">
          <Search className="stroke-white w-5 h-5" />
        </div>
        <input
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="border border-primaryColor/20 rounded-t-2xl text-primaryColor w-full py-2 px-4 outline-0"
          placeholder="Soru ara..."
          type="text"
          name="faqSearch"
          id="faqSearch"
        />
      </div>
    </div>
  );
};

export default FaqSearch;
