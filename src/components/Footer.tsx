import React from "react"

interface FooterProps {
    links: { label: string, href: string}[],
}

const Footer: React.FC<FooterProps> = ({ links }) => {
    return (
        <div className="footer">
           {
            links.map(link => (
                <a key={link.href} href={link.href} className="socials-button">
                    {link.label}
                </a>
            ))
           }
        </div>
    )
}

export default Footer