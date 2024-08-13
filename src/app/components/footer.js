'use client'
import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "../page.module.css";

export default function Footer(){


  return(
    <div className={styles.footer}>
        {/* <div className={styles.button} style={{marging: '2rem', padding: '2.5rem'}}>
          <p className={styles.form}>DESCUENTO PARA VISITANTES</p>
        </div> */}
      <Link href="/">
      <div className={styles.center}>
      
        <Image
          className={styles.logo}
          src="/jugoClubLogo2SOLID.png"
          alt='Jugo Club'
          width={0}
          height={0}
          sizes="100vw"
          placeholder="empty"
          loading="lazy"
          style={{marginTop: '4rem'}}
        />
        
      </div>
      </Link>
      <div className={styles.footer__section_container}>
      <Link href="/contact">
        <p className={styles.button}>CONTACTO</p>
      </Link>
          {/* <p className={styles.paragraph} style={{fontWeight: '500', textAlign: 'center'}}>
            En Jugo Club, nos enorgullecemos de ofrecer una cuidadosa selección de vinos argentinos que representan la esencia más auténtica y honesta de nuestra tierra. Somos un club comprometido con descubrir y compartir el mensaje único que cada productor transmite a través de sus botellas.
          </p> */}
        </div>
      <div className={styles.footer__section}>
        <div className={styles.footer__section_container}>
        </div>
      </div>

    </div> 
  )
}