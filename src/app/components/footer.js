'use client'
import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "../page.module.css";

export default function Footer(){


  return(
    <div className={styles.footer}>
      {/* <marquee className={styles.paragraph} style={{  color: 'white', background: '#e3384f', padding: '0.5rem', marginBottom: '5rem'}} loop="0" scrollamount="15" Scrolldelay="175" >Gracias por visitar JugoClub.com     &#9829;  </marquee> */}
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
                  <Link href="https://www.instagram.com/jugo.club/" target="blank"><p className={styles.paragraph} style={{maxWidth: '100%', textAlign: 'center', fontSize: '2rem'}}>Instagram</p></Link>
                  {/* <p className={styles.paragraph} style={{maxWidth: '100%', textAlign: 'center', fontSize: '2rem'}}>Shop</p>
                  <p className={styles.paragraph} style={{maxWidth: '100%', textAlign: 'center', fontSize: '2rem'}}></p> */}

        </div>
      </div>

    </div> 
  )
}