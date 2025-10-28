'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface NavSideBarProps {
  links: { label: string; href: string}[];
}

const NavSideBar: React.FC<NavSideBarProps> = ({links}) => {
  const pathname = usePathname();
  const handleRouteToPage = async (href: string) => {
  }

  return (
    <div className="sidemenu">
      { 
        links.map((link) => (
          <Link key={link.href} href={link.href} className={pathname === link.href ? 'sidemenu-item-active' : 'sidemenu-item'} onClick={() => handleRouteToPage(link.href)}>
              {link.label}
          </Link>
        ))
      }
    </div>  
  );
}

export default NavSideBar;