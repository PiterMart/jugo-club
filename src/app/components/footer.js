'use client'
import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "../page.module.css";

export default function Footer(){


  return(
    <div className={styles.footer}>
        <div className={styles.button} style={{borderLeft: 'none', borderRight: 'none'}}>
          <p className={styles.form}>DESCUENTO PARA VISITANTES</p>
        </div>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/jugoClubLogo.png"
          alt='Jugo Club'
          width={0}
          height={0}
          sizes="100vw"
          placeholder="empty"
          loading="lazy"
          style={{marginBottom: '-5rem', marginTop: '-5rem'}}
        />
      </div>
      <div className={styles.footer__section}>
        <div className={styles.footer__section_container}>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et tortor pretium, auctor odio et, interdum erat. Morbi eleifend id neque et fringilla. Aenean a eros sodales, aliquam ex id, elementum sapien. Praesent blandit diam mollis, scelerisque lacus at, finibus ante. Sed pretium porttitor arcu, et pretium mauris auctor sit amet. Mauris et luctus purus, in ultrices lorem. 
          </p>
        </div>
      </div>

    </div> 
  )
}