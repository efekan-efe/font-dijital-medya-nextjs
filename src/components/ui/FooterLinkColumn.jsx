// src/components/shared/FooterLinkColumn.jsx
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const FooterLinkColumn = ({ icon, title, color, items }) => {
  return (
    <div>
      <div className="flex items-center gap-x-1.5">
        <Image src={icon} className="h-6 w-6" alt="Başlık İkonu" />
        <div>
          <h3 className="font-bold text-2xl">{title}</h3>
          <div style={{ backgroundColor: color }} className="w-full h-0.5 block"></div>
        </div>
      </div>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.text} className="flex items-center text-white ">
            {item.icon ? (
              <>
                <item.icon style={{ stroke: color }} className="w-5 mr-2" />
                <a className="font-normal" href={item.href}>
                  {item.text}
                </a>
              </>
            ) : (
              <>
                <ChevronRight style={{ stroke: color }} />
                <Link className="font-normal" href={item.href}>
                  {item.text}
                </Link>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkColumn;
