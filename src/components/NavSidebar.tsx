'use client'
import { useRouter } from "next/navigation";
import React from "react";

interface NavSideBarProps {
  links: { label: string; href: string}[];
}

const NavSideBar: React.FC<NavSideBarProps> = ({links}) => {
    const router = useRouter();

    const handleRouteToPage = (href: string) => {
      router.push(href)
    }
    return (
      <div className="sidemenu">
        { links.map((link) => (
            <a key={link.href} href={link.href} className="sidemenu-item" onClick={() => handleRouteToPage(link.href)}>
                {link.label}
            </a>
        )) }
      </div>  
    );
}

export default NavSideBar;