import type { Metadata } from "next";
import { Geist, Geist_Mono, Kumar_One, Krub } from "next/font/google";
import "./globals.css";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import NavSideBar from "@/components/NavSidebar";
import StoreProvider from "./StoreProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kumarOne = Kumar_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-kumar-one"
});

const krub = Krub({
  weight: ["200", "300", "400", "600"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-krub"
})

interface Links {
  label: string,
  href: string
}

export const metadata: Metadata = {
  title: "Kris Fragata Portfolio",
  description: "Software and art portfolio of Kris Fragata",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebarItems: Links[] = [
    { label: 'SOFTWARE PROJECTS.', href: '/software-projects'},
    { label: 'ART PROJECTS.', href: '/art'},
    { label: 'MORE ABOUT.', href: '/more'},
    { label: 'EXPERIENCES.', href: '/experiences'}
  ]

  const socialsLinks: Links[] = [
    { label: 'LinkedIn', href: 'http://linkedin.com/in/krisfragata'},
    { label: 'Github', href: 'http://github.com/krisfragata'},
  ]
  return (
    <html lang="en">
      <body
        className={`${kumarOne.variable} ${krub.variable} antialiased`}
      >
        <StoreProvider>
<div className="home">
      <div className="left-wrapper">
        <div className="left-header">
          <Title/>
        </div>
        {children}
        <div className="left-footer">
          <Footer links={socialsLinks}/>
        </div>
      </div>
      <NavSideBar links={sidebarItems}/>
      <div className="left-footer-small">
          <Footer links={socialsLinks}/>
        </div>
    </div>
        </StoreProvider>
         
      </body>
    </html>
  );
}
