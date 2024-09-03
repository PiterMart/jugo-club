import { Inter } from "next/font/google";
import React from "react";
import Image from "next/image";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import "./page.module.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jugo Club",
  description: "¡Salud desde Jugo Club!",
  image: "/jugoClubLogo.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Image
                src="/houseOfWines.png"
                alt='Placeholder'
                width={0}
                height={0}
                sizes="100vw"
                placeholder="empty"
                loading="lazy"
                style={{height: "5rem", width: "auto", position: 'absolute', zIndex: '-100', margin: "auto", top: "7rem", transform: "translateY(-50%)", verticalAlign: "middle", left: '10%' }}
              />
        <Nav/>
        {children}
      </body>
    </html>
  );
}
