// src/components/shared/FooterLinkColumn.jsx
import Link from "next/link";

const FooterLinkColumn = ({ icon: Icon, title, items }) => {
  return (
    <div>
      <div className="flex items-center gap-x-2">
        <Icon className="h-5 w-5 text-yellow-400" />
        <h3 className="font-bold text-white border-b-2 border-yellow-400 pb-1">{title}</h3>
      </div>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.text} className="flex items-center text-gray-300 hover:text-white transition-colors">
            {/* Eğer item'ın kendi ikonu varsa onu kullan, yoksa default ikonu kullan */}
            {item.icon ? (
              <>
                <item.icon className="h-4 w-4 mr-2" />
                <a href={item.href}>{item.text}</a>
              </>
            ) : (
              <>
                <span className="mr-2 text-yellow-400">&gt;</span>
                <Link href={item.href}>{item.text}</Link>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkColumn;
