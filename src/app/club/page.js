"use client"
import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import {motion} from 'framer-motion';


export default function Club() {

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
          <div style={{  width: '100%', height: '100%', position: 'fixed', objectFit: 'cover', zIndex: '-1', right: '0', bottom: '0', pointerEvents: 'none', background: '#e3384f'}}>
            <div>
              <Image
                src="/STAIRWAY.jpg"
                alt="Background"
                width={0}
                height={0}
                priority
                unoptimized
                style={{ width: '100%', height: '100%', position: 'fixed', objectFit: 'cover', zIndex: '-1', right: '0', bottom: '0rem', pointerEvents: 'none' }}
              />
            </div>
            <div style={{height: '100VH',width: '100vw', background: 'transparent',  }}>
              <div className={styles.page__section} style={{marginTop: '0px', paddingTop: '10rem', gap: '2.5rem'}}>
                <p  className={`${styles["subtitle"]} ${styles["glow"]}`}>ESTAS ENTRANDO</p>
                <div style={{margin:'auto'}} className={styles.floating}>
                      <Image
                        src="/grape bunchfloat.png"
                        alt='Placeholder'
                        width={0}
                        height={0}
                        sizes="100vw"
                        placeholder="empty"
                        loading="lazy"
                        className={styles.double__image}
                        style={{maxWidth: '450px', filter: "drop-shadow(20px 20px 20px white)", margin: 'auto'}}
                      />
                    </div>
                <p className={`${styles["subtitle"]} ${styles["glow"]}`}>A UN MUNDO DE PLACER</p>
              </div>
            </div>
          </div>
          <a href="#start">
            <div style={{height: '100vH'}}></div>
          </a>
          <div className={styles.division}>
          </div>
          <div className={styles.page}>
            <div className={styles.page__section}>
              <p className={styles.title}>COMING <span className={styles.blink}>SOON!</span></p>
              <div className={styles.page__section_container2}>
                <div className={styles.page__section_container_box}>
                  <p className={styles.subtitle} style={{maxWidth: '100%', textAlign: 'center'}}>Nuevos vinos cada mes</p>
                  <p className={styles.paragraph} style={{maxWidth: '100%', textAlign: 'center'}}>Explora nuevos vinos cada mes de nuestra curada selección Jugos! </p>

                </div>
                <div className={styles.page__section_container_box}>
                  <p className={styles.subtitle} style={{maxWidth: '100%', textAlign: 'center'}}>Desde $49.900 al mes</p>
                  <p className={styles.paragraph} style={{maxWidth: '100%', textAlign: 'center'}}> Experiencias de vino de alta calidad con envíos a tu piacere.</p>
                </div>
                <div className={styles.page__section_container_box}>
                  <p className={styles.subtitle} style={{maxWidth: '100%', textAlign: 'center'}}>Elegí el plan de tu estilo favorito!</p>
                  <p className={styles.paragraph} style={{maxWidth: '100%', textAlign: 'center'}}>Elegí de nuestros estilos de plan, los estilos que más te gustan! </p>
                </div>
              </div>
          </div>
          <div className={styles.page__section}>
            <div className={styles.page__section_paragraphcontainer} style={{border: 'none'}}>
              <p className={`${styles["subtitle"]}`} style={{maxWidth: '100%'}}><span style={{color: '#e3384f'}}>Nuestro club funciona a través de una suscripción mensual de vinos nuevos cada mes.</span></p>
              <p className={styles.paragraph}> <span className={styles.paragraph_arrow}>&#8594;</span> Al ser miembro del club, podrás obtener beneficios en la tienda, envíos gratis y participar de eventos y catas especiales.
              <br></br>
              &#8594; Cada mes se hará una selección curada de nuestras piezas favoritas puestas en diálogo entre sí, un acercamiento didáctico y comprensivo a todos los matices que dan a cada botella su particularidad. Entregaremos pequeños recortes de este archivo junto con la bio y el desglose de todas las notas y sensaciones que cada selección puede ofrecer. 
              </p>
            </div>

          </div>
          {/* <div className={styles.page__section}>
          <div className={styles.center}>
              <Link href="#planes">
                <p className={styles.button}>
                   SUSCRIBITE AHORA!
                </p>
              </Link>
            </div>
          </div> */}
          <div className={styles.page__section} id="planes">
              <div className={styles.page__section_container} style={{border: 'none'}}>
                <div  className={styles.page__section_product}>
                  <p className={styles.title}>PLAN 1</p>
                  <p className={styles.paragraph}>Elegí de nuestros estilos de plan, los estilos que más te gustan! </p>
                  <div className={styles.center}>
                    <Link href="">
                      <p className={styles.button}>
                        SELECCIONAR
                      </p>
                    </Link>
                  </div>
                </div>
                <div className={styles.page__section_product}>
                  <p className={styles.title}>PLAN 2</p>
                  <p className={styles.paragraph}>Elegí de nuestros estilos de plan, los estilos que más te gustan! </p>
                  <div className={styles.center}>
                    <Link href="">
                      <p className={styles.button}>
                        SELECCIONAR
                      </p>
                    </Link>
                  </div>
                </div>
                <div className={styles.page__section_product}>
                  <p className={styles.title}>PLAN 3</p>
                  <p className={styles.paragraph}>Elegí de nuestros estilos de plan, los estilos que más te gustan! </p>
                  <div className={styles.center}>
                    <Link href="">
                      <p className={styles.button}>
                        SELECCIONAR
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.page__section}>
              <div className={styles.center} >
              <Link href="/events">
                <p className={styles.button}>
                  EVENTOS JUGO CLUB
                </p>
              </Link>
              </div>
            </div>
          <marquee className={styles.paragraph} style={{  color: 'white', background: '#e3384f', padding: '0.5rem', marginBottom: '5rem'}} loop="0" scrollamount="15" Scrolldelay="175" >Gracias por visitar JugoClub.com     &#9829;  </marquee>
        </div>
        </motion.div>
      </main>
    );
  }
  