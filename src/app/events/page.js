"use client"
import Footer from "../components/footer";
import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import {motion} from 'framer-motion';


export default function Events() {

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
          <div className={styles.page}>
            <div className={styles.page__section}>
              <p className={styles.title}>Events</p>
              <div style={{borderBottom: '1px solid black', borderTopLeftRadius: "20px 50px"}} className={styles.page__section_paragraphcontainer}>
                <div>
                  <Image
                    src="/swan.svg"
                    alt="Background"
                    width={0}
                    height={0}
                    priority
                    unoptimized
                    className={`${styles["devil"]} ${styles["swan"]}`}
                  />
                  <p className={styles.subtitle}>Es esencial para poder difundir el arte de la producción del vino natural y orgánico, 
                    <span style={{color: '#e3384f '}}>centrar nuestra labor en la experiencia de compartir esta bebida espirituosa en un ambiente íntimo o social.</span>
                  </p>
                </div>
                <p className={styles.paragraph}><span className={styles.paragraph_arrow}>&#8594;</span> Desde Jugo Club elaboramos una serie de situaciones y ambientes que muchas veces se adaptan a los formatos de eventos artísticos, gatherings, o cócteles especiales para las agendas de quienes busquen crear encuentros diseñados hasta el último detalle.  </p>
              </div>
              <div style={{borderBottom: '1px solid black'}} className={styles.page__section_container2}>
                <div style={{pointerEvents: 'none'}} className={styles.image_container}>
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
                <div className={styles.page__section_paragraphcontainer2}>
                  <p className={`${styles["subtitle"]}`} style={{maxWidth: '100%'}}>Entre nuestros clientes se encuentran ArteBA, Soho House, galerías de arte y eventos privados hosteados tanto en el emblemático 
                    <span style={{color: '#e3384f '}}>Atelier Bonet</span>
                    , headquarter de Jugo Club, o en venues específicos a cada evento. 
                  </p>
                  <p className={styles.paragraph}> 
                    <span className={styles.paragraph_arrow}>&#8594;</span> 
                    Este servicio <span style={{fontStyle: 'italic', fontWeight: 'bolder'}}>tailor-made
                    </span> 
                    se adapta a las necesidades de cada cliente pudiendo ir desde una asesoría hasta la producción integral del evento.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.page__section2}>
              <div>
                <p className={styles.image_description}>
                  LATEST EVENT <span style={{fontWeight: '500'}}> &#8594; Atlas Listening Club</span>
                </p>
              </div>
              <div className={styles.page__section_slide} >
                <Link href="https://atlasatlas.com.ar/alc03" target="_blank">
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
                  <p className={styles.paragraph} style={{color: '#e3384f'}}>5 y 6 de Octubre</p>
                  <p style={{fontStyle: 'italic'}}>Buenos Aires</p>
                  <p className={styles.paragraph}>— (03) AMBIENT: pioneros del género.
                    Escucha atenta en sonido HI-FI de discos imprescindibles en los comienzos del 𝙖𝙢𝙗𝙞𝙚𝙣𝙩 en occidente y oriente, entre finales de los 70’s y comienzos de los 80’s.
                    Sonarán discos de: 𝘽𝙧𝙞𝙖𝙣 𝙀𝙣𝙤, 𝙃𝙞𝙧𝙤𝙨𝙝𝙞 𝙔𝙤𝙨𝙝𝙞𝙢𝙪𝙧𝙖, 𝙃𝙖𝙧𝙤𝙡𝙙 𝘽𝙪𝙙𝙙 𝙮 𝙈𝙞𝙙𝙤𝙧𝙞 𝙏𝙖𝙠𝙖𝙙𝙖, entre otros, además hablaremos de cada obra.
                  </p>
                  <a href="https://atlasatlas.com.ar/alc03" target="_blank" ><p>REGISTRO &#8594;</p></a>
                </div>
              </div>
            </div>
            <div className={styles.page__section2}>
              <div>
                <p className={styles.image_description}>
                  PAST EVENTS
                </p>
              </div>
              <div className={styles.page__section_slide}>
                <Link href="/events">
                  <div className={styles.image_container}>
                    <Image
                      src="/bonetsohohouse.jpg"
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
                <Link href="https://atlasatlas.com.ar/alc02" target="_blank">
                  <div className={styles.image_container}>
                    <Image
                      src="/atlas flyer2.png"
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
              </div> 
            </div>
          {/* <marquee className={styles.paragraph} style={{  color: 'white', background: '#e3384f', padding: '0.5rem', marginBottom: '5rem', fontSize: '119px'}} loop="0" scrollamount="15" Scrolldelay="175" >PAGINA EN CONSTRUCCIÓN    &#9829;  </marquee> */}
          </div>
        </motion.div>
        <Footer/>
      </main>
    );
  }
  