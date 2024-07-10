'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import {color, motion} from 'framer-motion'

export default function Home() {
  return (
    <main className={styles.main}>
      <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} transition={{
        ease: [0.65, 0, 0.35, 1],
        duration: 0.75,
        x: { duration: 0.25 }
      }}>
        <div>
          <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', position: 'fixed', objectFit: 'cover', zIndex: '-1', right: '0', bottom: '0', pointerEvents: 'none', }}>
            <source src="/JUGCLUB AUDIO 1.mp4" />
          </video>
        </div>
        <div style={{height: '100VH'}}>
        <div className={styles.center}>
              <Link href="/shop">
                <p className={styles.button} style={{marginTop: '80vh', LEFT: '0'}}>
                   COMPRAR VINOS
                </p>
              </Link>
              <a href="#start">
                <p className={styles.button} style={{marginTop: '80vh', LEFT: '0'}}>
                   SABER MÁS
                </p>
              </a>
            </div>
        </div>
        <div className={styles.division} id="start">
        </div>
        <div className={styles.page}>
        <marquee className={styles.paragraph} style={{ fontSize: '36px',  color: 'white',}} loop="1" scrollamount="15">&#9829; Gracias por visitar JugoClub.com ! &#9829; Esperamos que tengas una agradable estadia ! &#9829; Conoce más acerca de tu club de jugos favorito y no olvides visitar la tienda para poder recibir vinos de nuestra seleccion especial en la puerta de tu hogar. &#9829; </marquee>
          <div className={styles.page__section}>
            <p className={styles.title}>
              SERVIMOS VINOS NATURALES
            </p>
            <div className={styles.center}>
              <Link href="/about">
                <p className={styles.button}>
                   CONOCE JUGO CLUB
                </p>
              </Link>
            </div>
          </div>
          <div className={styles.page__section}>
            {/* <p className={styles.title}>
              EVENTOS
            </p> */}
            <Link href="/events">
              <div style={{textAlign: 'left', margin: 'auto',width: '100%', maxWidth: '700px'}}>
                <Image
                  src="/images/DSCF8911 2.jpg"
                  alt='Placeholder'
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="empty"
                  loading="lazy"
                  className={styles.single__image}
                />
                <div>
                    <p className={styles.description}>
                      Jugo Club en el Atelier Bonet 
                    </p>
                </div>
              </div>
            </Link>
          </div>
          <div className={styles.page__section}>
            <p className={styles.title}>
              ARTESANAL <span style={{color: ''}}>NATURAL</span> <span style={{color: ''}}>ORGANICO</span>
            </p>
            <Link href="/club">
              <div style={{textAlign: 'left', margin: 'auto',width: '100%', maxWidth: '800px'}}>  
                <div>
                  <div className={styles.double__image_container}>
                    <Image
                      src="/images/RIES_2555.jpg"
                      alt='Placeholder'
                      width={0}
                      height={0}
                      sizes="100vw"
                      placeholder="empty"
                      loading="lazy"
                      className={styles.double__image}
                    />
                    <Image
                      src="/images/RIES_2702.jpg"
                      alt='Placeholder'
                      width={0}
                      height={0}
                      sizes="100vw"
                      placeholder="empty"
                      loading="lazy"
                      className={styles.double__image}
                    />
                  </div>
                    <p className={styles.description}>
                      Un mundo de nuevas experiencias
                    </p>
                </div>
              </div>
            </Link>
          </div>
          <div className={styles.page__section}>
            <p className={styles.title}>
              VINOS EN LA PUERTA DE TU HOGAR
            </p>
            <Link href="/shop">
              <div style={{textAlign: 'left', margin: 'auto',width: '100%', maxWidth: '700px'}}>
                <div style={{display: 'flex', flexDirection: 'row', gap: '2rem', width: '100%',}}>
                  <Image
                    src="/images/RIES_3085.jpg"
                    alt='Placeholder'
                    width={0}
                    height={0}
                    sizes="100vw"
                    placeholder="empty"
                    loading="lazy"
                    className={styles.single__image}
                  />
                </div>
                <div>
                    <p className={styles.description}>
                      Como por arte de magia
                    </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
