import type { Metadata } from "next";
import { Geist, Geist_Mono, Kumar_One, Krub } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Kris Fragata Portfolio",
  description: "Software and art portfolio of Kris Fragata",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumarOne.variable} ${krub.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
