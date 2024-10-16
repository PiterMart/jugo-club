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
          <video className={styles.desktopBanner} autoPlay muted loop playsInline style={{ width: '100%', height: '100%', position: 'fixed', objectFit: 'cover', zIndex: '-1', right: '0', bottom: '0', pointerEvents: 'none', }}>
            <source src="/JUGCLUB AUDIO 1.mp4" />
          </video>
        </div>
        <div>
          <video className={styles.mobileBanner} autoPlay muted loop playsInline style={{ width: '100%', height: '100%', position: 'fixed', objectFit: 'cover', zIndex: '-1', right: '0', bottom: '0', pointerEvents: 'none', }}>
            <source src="/jugoclubAnimacionMobile.mp4" />
          </video>
        </div>
        <div style={{height: '100VH'}}>
        <div className={styles.center}>
              <Link href="https://jugoclub.wine/">
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
            <div>
              <p className={styles.image_description}>
                 <span style={{fontWeight: '500'}}>
                 JUGO EN TU HOGAR!
                 </span>
              </p>
            </div>
            <p className={styles.paragraph}>Cada mes se hará una selección curada de nuestras piezas favoritas puestas en diálogo entre sí, un acercamiento didáctico y comprensivo a todos los matices que dan a cada botella su particularidad. Entregaremos pequeños recortes de este archivo junto con la bio y el desglose de todas las notas y sensaciones que cada selección puede ofrecer.</p>
            <Link href="/club">
              <p>UNIRSE AL CLUB &#8594;</p>
            </Link>
            </div>
            </div>
          </div>
          <div className={styles.page__section2}>
          <div>
              <p className={styles.image_description}>
              UPCOMING EVENT <span style={{fontWeight: '500'}}> &#8594; Atlas Listening Club</span>
              </p>
            </div>
            <div className={styles.page__section_slide} >
            <Link href="/events">
              <div className={styles.image_container}>
                <Image
                  src="/atlas flyer.png"
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
              <p className={styles.paragraph}>5 y 6 de Octubre</p>
              <p style={{fontStyle: 'italic'}}>Buenos Aires</p>
              <p className={styles.paragraph}>— (03) AMBIENT: pioneros del género.

                  Escucha atenta en sonido HI-FI de discos imprescindibles en los comienzos del 𝙖𝙢𝙗𝙞𝙚𝙣𝙩 en occidente y oriente, entre finales de los 70’s y comienzos de los 80’s.

                  Sonarán discos de: 𝘽𝙧𝙞𝙖𝙣 𝙀𝙣𝙤, 𝙃𝙞𝙧𝙤𝙨𝙝𝙞 𝙔𝙤𝙨𝙝𝙞𝙢𝙪𝙧𝙖, 𝙃𝙖𝙧𝙤𝙡𝙙 𝘽𝙪𝙙𝙙 𝙮 𝙈𝙞𝙙𝙤𝙧𝙞 𝙏𝙖𝙠𝙖𝙙𝙖, entre otros, además hablaremos de cada obra.</p>
                  <Link href="/events"><p>COMPRAR TICKETS &#8594;</p></Link>
            </div>
            </div>
          </div>
          
          
        </div>
      </motion.div>
      <Footer/>
    </main>
    
  );
}
