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
          {/* <Image
            src="/backgrounddemo.png"
            alt="Background"
            width={0}
            height={0}
            priority
            unoptimized
            style={{ width: '100%', height: '100%', position: 'fixed', objectFit: 'cover', zIndex: '-1', right: '0', bottom: '0', pointerEvents: 'none', }}
          /> */}
          <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', position: 'fixed', objectFit: 'cover', zIndex: '-1', right: '0', bottom: '0', pointerEvents: 'none', }}>
            <source src="/JUGCLUB AUDIO 1.mp4" />
          </video>
        </div>
        <div style={{height: '100VH'}}></div>
        <div className={styles.division}>
        </div>
        <div className={styles.page}>
        <marquee className={styles.paragraph} style={{ fontSize: '30px', background: 'rgb(175,106,106);', background: 'linear-gradient(180deg, rgba(175,106,106,0) 0%, rgba(0,0,0,1) 50%, rgba(113,68,68,0) 100%);', color: 'gray',}} scrollamount="15">&#9829; Gracias por visitar JugoClub.com ! &#9829; Que tengas una buena estadia! &#9829;</marquee>
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
                  style={{height: "auto", width: "100%", maxWidth: "700px", margin: "auto", borderRadius: '10px'}}
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
                  <div style={{display: 'flex', flexDirection: 'row', gap: '2rem', width: '100%', justifyContent: 'center'}}>
                    <Image
                      src="/images/RIES_2555.jpg"
                      alt='Placeholder'
                      width={0}
                      height={0}
                      sizes="100vw"
                      placeholder="empty"
                      loading="lazy"
                      style={{height: "auto", width: "100%", maxWidth: "400px", borderRadius: '10px'}}
                    />
                    <Image
                      src="/images/RIES_2702.jpg"
                      alt='Placeholder'
                      width={0}
                      height={0}
                      sizes="100vw"
                      placeholder="empty"
                      loading="lazy"
                      style={{height: "auto", width: "100%", maxWidth: "400px", borderRadius: '10px'}}
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
                    style={{height: "auto", width: "100%", maxWidth: "700px", margin: "auto", borderRadius: '10px'}}
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
