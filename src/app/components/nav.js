'use client'
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "../page.module.css";
import { motion } from "framer-motion";
import Flecha from "./flecha";

export default function Nav() {

    const  [isActive, setIsActive] = useState(false);

    const currentPath = usePathname();

    const pages = [
        { name: 'ABOUT', path: '/about'},
        { name: 'CLUB', path: '/club'},
        { name: 'EVENTS', path: '/events'},
        { name: 'SHOP', path: '/shop'},
        { name: 'CONTACT', path: '/contact'},
    ];

    const isCurrent = (path) => {
        return currentPath === path;
    }

    return (
        
        <div className={styles.nav} >
            <Link href="/">
                <Image
                    src="/jugoClubLogo.png"
                    alt="JugoClub"
                    width={109}
                    height={77.5}
                    priority
                    style={{filter: 'invert(100%)'}}
                />
            </Link>
            <div className={styles.nav__list}>
                <motion.ul
                    animate={{top: isActive ? "-15px": "-290px"}}
                    transition={{duration: 0.5, ease: [0.33, 1, 0.68, 1]}}
                >
                    {pages.map((page, index) => {
                        return (
                            <li key={index}>
                                <Link 
                                    onClick={() => {setIsActive(!isActive)}}
                                    href={page.path} 
                                    alt={page.name} 
                                    className={isCurrent(page.path) ? 'page_current__pRY1c' : '' }
                                >
                                    {page.name}
                                </Link>
                            </li>
                        )
                    })}
                    <Flecha 
                        isActive={isActive} 
                        setIsActive={setIsActive}
                    />
                </motion.ul>
            </div>
        </div>
    )
}