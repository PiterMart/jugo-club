"use client"
import Footer from "../components/footer";
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
              <div className={styles.page__section} style={{marginTop: '0px', paddingTop: '10rem', gap: '4.5rem'}}>
                <p  className={`${styles["subtitle"]} ${styles["glow"]}`}>ESTAS ENTRANDO</p>
                <div style={{margin:'auto', marginBottom: "-5rem"}} className={styles.floating}>
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
          <div className={styles.page} id="start">
            <div className={styles.page__section}>
              <p className={styles.title} style={{textAlign: 'center'}}>COMING <span className={styles.blink}>SOON!</span></p>
              <div className={styles.page__section_container2}>
                <div className={styles.page__section_container_box}>
                  <p className={styles.subtitle} style={{maxWidth: '100%', textAlign: 'center', fontSize: '2rem', lineHeight: '2rem'}}>Nuevos vinos cada mes</p>
                  <p className={styles.paragraph} style={{maxWidth: '100%', textAlign: 'center', fontSize: '1rem'}}>Explora nuevos vinos cada mes de nuestra curada selección Jugos! </p>

                </div>
                <div className={styles.page__section_container_box}>
                  <p className={styles.subtitle} style={{maxWidth: '100%', textAlign: 'center', fontSize: '2rem', lineHeight: '2rem'}}>Desde $49.900 al mes</p>
                  <p className={styles.paragraph} style={{maxWidth: '100%', textAlign: 'center', fontSize: '1rem'}}> Experiencias de vino de alta calidad con envíos a tu piacere.</p>
                </div>
                <div className={styles.page__section_container_box}>
                  <p className={styles.subtitle} style={{maxWidth: '100%', textAlign: 'center', fontSize: '2rem', lineHeight: '2rem'}}>Elegí el plan de tu estilo favorito!</p>
                  <p className={styles.paragraph} style={{maxWidth: '100%', textAlign: 'center', fontSize: '1rem'}}>Elegí de nuestros estilos de plan, los estilos que más te gustan! </p>
                </div>
              </div>
              <div className={styles.center} >
              <Link href="#planes">
                <p className={styles.button}>
                  SUSCRIBITE AHORA
                </p>
              </Link>
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
              <div className={styles.page__section_container} style={{borderTop: "2px solid black", borderBottom: "none", paddingTop: '5rem', marginTop: '3rem'}}>
                <div  className={styles.page__section_product} style={{borderLeft: 'none'}}>
                  <p className={styles.title_home} style={{fontSize: "4rem", lineHeight: "3rem", textAlign: 'center'}}>PLAN #1</p>
                  <p className={styles.paragraph} style={{textAlign: 'center'}}>Elegí de nuestros estilos de plan, los estilos que más te gustan! </p>
                  <div className={styles.center}>
                    <Link href="">
                      <p className={styles.button}>
                        SELECCIONAR
                      </p>
                    </Link>
                  </div>
                  <p>desde
                    <br></br>
                  $25.000.-</p>
                </div>
                <div className={styles.page__section_product}>
                  <p className={styles.title_home} style={{fontSize: "4rem", lineHeight: "3rem", textAlign: 'center'}}>PLAN #2</p>
                  <p className={styles.paragraph} style={{textAlign: 'center'}}>Elegí de nuestros estilos de plan, los estilos que más te gustan! </p>
                  <div className={styles.center}>
                    <Link href="">
                      <p className={styles.button}>
                        SELECCIONAR
                      </p>
                    </Link>
                  </div>
                  <p>desde
                    <br></br>
                  $25.000.-</p>
                </div>
                <div className={styles.page__section_product}>
                  <p className={styles.title_home} style={{fontSize: "4rem", lineHeight: "3rem", textAlign: 'center'}}>PLAN #3</p>
                  <p className={styles.paragraph} style={{textAlign: 'center'}}>Elegí de nuestros estilos de plan, los estilos que más te gustan! </p>
                  <div className={styles.center}>
                    <Link href="">
                      <p className={styles.button}>
                        SELECCIONAR
                      </p>
                    </Link>
                  </div>
                  <p>desde
                    <br></br>
                  $25.000.-</p>
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
            <div className={styles.page__section}>
              <div className={styles.center} >
              <Link href="/events">
                <p className={styles.button}>
                  EVENTOS JUGO CLUB
                </p>
              </Link>
              </div>
            </div>
        </div>
        </motion.div>
        <Footer/>
      </main>
    );
  }
  