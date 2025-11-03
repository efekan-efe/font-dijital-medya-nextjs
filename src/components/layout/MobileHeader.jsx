"use client";

import { useState } from "react";
import StaggeredMenu from "../StaggeredMenu";

const menuItems = [
  { link: "/hizmetler", label: "Hizmetler" },
  { link: "/referanslar", label: "Referanslar" },
  { link: "/blog", label: "Dijital Rehber" },
  { link: "/hakkimizda", label: "Kurumsal" },
  { link: "/sikca-sorulan-sorular", label: "SSS" },
  { link: "/iletisim", label: "İletişim" },
];
const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

const MobileHeader = () => {
  const [menuHeight, setMenuHeight] = useState("[100px]");

  return (
    <div className={`lg:hidden w-screen ${menuHeight === "screen" ? "h-screen" : "h-[100px]"}`}>
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#5c45fd"
        openMenuButtonColor="#5c45fd"
        changeMenuColorOnOpen={true}
        colors={["#5c45fd", "#432c8a"]}
        accentColor="#5c45fd"
        onMenuOpen={() => setMenuHeight("screen")}
        onMenuClose={() => setMenuHeight("[100px]")}
      />
    </div>
  );
};

export default MobileHeader;
