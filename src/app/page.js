'use client'
import Footer from "./components/footer";
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
              />
              <div className={styles.page__home_text}>
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
          <div>
              <p className={styles.image_description}>
                JUGOS EN TU HOGAR <span style={{fontWeight: '500'}}> &#8594; Unite a nuestro Club</span>
              </p>
            </div>
            <div className={styles.page__section_slide} >
            <Link href="/club">
              <div className={styles.image_container}>
                <Image
                  src="/DIONISIO.jpg"
                  alt='Placeholder'
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="empty"
                  loading="lazy"
                  className={styles.image}
                />
              </div>
            </Link>
            <div className={styles.page__section_slide_info}>
            <p className={styles.paragraph}>Nuestro club funciona a través de una suscripción mensual de vinos nuevos cada mes.</p>
            <Link href="/club">
              <p>UNIRSE</p>
            </Link>
            </div>
            </div>
          </div>
          <div className={styles.page__section2}>
          <div>
              <p className={styles.image_description}>
                EVENTOS JUGO CLUB <span style={{fontWeight: '500'}}> &#8594; ¿Donde?, ¿Cuando?, ¿Como?</span>
              </p>
            </div>
            <div className={styles.page__section_slide} >
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
              </div>
            </Link>
            <div className={styles.page__section_slide_info}>
              <p className={styles.paragraph}>17, 16 y 17 de Agosto</p>
              <p style={{fontStyle: 'italic'}}>Buenos Aires</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat erat et dignissim accumsan. Donec finibus lacus non magna accumsan, non auctor orci tempus. Phasellus ultrices, sapien in efficitur imperdiet, turpis ex tristique est, in convallis felis leo vel dui. Sed imperdiet, nunc vel sodales accumsan, justo mauris faucibus justo, ut dignissim quam turpis in arcu. Vivamus et nisi nec arcu vestibulum ultrices. Integer eget ex ut sapien dignissim fringilla. Suspendisse vitae imperdiet odio, eleifend vulputate leo. Pellentesque mauris nibh, aliquet quis enim id, vehicula malesuada dolor.</p>
              <a><p>COMPRAR TICKETS</p></a>
            </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer/>
    </main>
    
  );
}
