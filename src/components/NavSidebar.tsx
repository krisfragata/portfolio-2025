import React from "react";

interface NavSideBarProps {
  links: { label: string; href: string}[];
}

const NavSideBar: React.FC<NavSideBarProps> = ({links}) => {
    return (
      <div className="sidemenu">
        { links.map((link) => (
            <a key={link.href} href={link.href} className="sidemenu-item">
                {link.label}
            </a>
        )) }
      </div>  
    );
}

export default NavSideBar;