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
      <Image
                src="/jugocup.png"
                alt='Placeholder'
                width={0}
                height={0}
                sizes="100vw"
                placeholder="empty"
                loading="lazy"
                style={{height: "25r100vhem", width: "auto", position: 'absolute', top: '10rem', zIndex: '-100', margin: "auto"}}
              />
      <body className={inter.className}>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
