'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import {animate, color, motion} from 'framer-motion'

export default function Home() {
  return (
    <main className={styles.main}>
      <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{
          ease: [0.33, 1, 0.68, 1],
          duration: 1.05,
          x: { duration: 1.55 },
          delay: 0.75
        }}>
        <div>
          <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', position: 'fixed', objectFit: 'cover', zIndex: '-1', right: '0', bottom: '0', pointerEvents: 'none', }}>
            <source src="/JUGCLUB AUDIO 1.mp4" />
          </video>
        </div>
        <div style={{height: '100VH'}}>
        <div className={styles.center}>
              <Link href="/shop">
                <p className={styles.button2} style={{marginTop: '80vh', LEFT: '0'}}>
                   COMPRAR VINOS
                </p>
              </Link>
              <a href="#start">
                <p className={styles.button2} style={{marginTop: '80vh', LEFT: '0'}}>
                   SABER MÁS
                </p>
              </a>
            </div>
        </div>
        <div className={styles.division} >
        </div>
        <div className={styles.page} >
          <div className={styles.page__home} id="start">
              <Image
                src="/Botellas-Crops.gif"
                alt='Placeholder'
                width={0}
                height={0}
                sizes="100vw"
                placeholder="empty"
                loading="lazy"
                className={styles.image_home}
                // style={{maxWidth: '900px', width: '50rem', margin: '0rem'}}
              />
              <div className={styles.page__home_text}>
                {/* <p className={styles.title} style={{fontFamily: 'Neue', background:"pink", padding: '1rem'}}>
                  <span></span>Servimos <br></br> <span className={styles.blink}>vinos</span> naturales
                </p> */}
                <p className={styles.title_home}>
                  Servimos
                </p>
                <p className={styles.title_home}>
                  <span className={styles.blink}  style={{paddingLeft: '1rem'}}> Vinos</span> 
                </p>
                <p className={styles.title_home} style={{paddingLeft: '2rem'}}>
                    Naturales
                </p>
              </div>
            </div>
            <div className={styles.page__home2} style={{}} id="start">
            <div className={styles.center2}>
              <Link href="/about">
                <p className={styles.button}>
                   CONOCÉ JUGO CLUB
                </p>
              </Link>
          </div>
          <Image
                src="/butterflyCup.png"
                alt='Placeholder'
                width={0}
                height={0}
                sizes="100vw"
                placeholder="empty"
                loading="lazy"
                className={styles.butterfly}
              />
          </div>
          <div className={styles.page__section2}>
            <Link href="/events">
              <div className={styles.image_container}>
                <Image
                  src="/images/DSCF8911 2.jpg"
                  alt='Placeholder'
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="empty"
                  loading="lazy"
                  className={styles.image}
                />
                <div>
                    <p className={styles.image_description} >
                      EVENTOS JUGO CLUB <span style={{fontWeight: '500'}}> &#8594; ¿Donde?, ¿Cuando?, ¿Como?</span>
                    </p>
                </div>
              </div>
            </Link>
            <Link href="/club">
              <div style={{textAlign: 'left', margin: 'auto',width: '100%', maxWidth: '800px'}}>  
                <div>
                  <div className={styles.image_container}>
                  <Image
                  src="/images/RIES_2555.jpg"
                  alt='Placeholder'
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="empty"
                  loading="lazy"
                  className={styles.image}
                />
                  <div>
                      <p className={styles.image_description} >
                        VINOS NATURALES <span style={{fontWeight: '500'}}> &#8594; ¿Que es el vino natural?</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className={styles.page__section}>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
