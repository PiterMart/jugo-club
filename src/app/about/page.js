"use client"
import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import {motion} from 'framer-motion';


export default function About() {

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
          {/* <div>
            <Image
              src="/images/night grapes.jpg"
              alt="Background"
              width={0}
              height={0}
              priority
              unoptimized
              style={{ width: '100%', height: '100%', position: 'fixed', objectFit: 'cover', zIndex: '-1', right: '0', bottom: '0', pointerEvents: 'none' }}
            />
          </div>
          <div style={{height: '80vH'}}></div>
          <div className={styles.division}>
          </div> */}
          <div className={styles.page}>
            <div className={styles.page__section} >
              <p className={styles.page__title}>ABOUT US</p>
              <div style={{borderBottom: '1px solid black', paddingBottom: '1.5rem', borderTopLeftRadius: "20px 50px"}} className={styles.page__section_paragraphcontainer}>
                <p className={styles.subtitle}>Jugo Club  es un proyecto especializado en Vinos Naturales de baja intervención y de alta
                 calidad.<span style={{color: '#e3384f '}}> Somos una plataforma que comunica, visibiliza y vende online vinos de pequeños productores.</span></p>
                <p className={styles.paragraph}><span className={styles.paragraph_arrow}>&#8594;</span> Redefiniendo el <span style={{fontStyle: 'italic'}}>“buen beber”</span> academicista y acartonado, creemos en servir vino de forma lúdica  y accesible para nunca más escuchar la temerosa frase: <span style={{fontStyle: 'italic'}}>“Yo no sé nada de vinos”</span>, y dar rienda suelta al deleite desprejuiciado de este jugo ancestral.</p>
              </div>
              <div style={{borderBottom: '1px solid black'}} className={styles.page__section4}>
                <div style={{ width: 'auto', height: 'auto', pointerEvents: 'none', margin: 'auto'}}>
                  <video autoPlay muted loop playsInline className={styles.single__image} style={{  width: '100%', height: 'auto', overflow: 'hidden', pointerEvents: 'none', margin: 'auto', bottom: '0' }}>
                    <source src="/images/vineyard1.mp4" />
                  </video>
                </div>
                <div className={styles.page__section4_paragraphcontainer}>
                  <p className={`${styles["big"]} ${styles["subtitle"]}`}><span style={{color: '#e3384f '}}>Diseñamos</span> experiencias y catas, ofrecemos consultorías para restaurantes  y producimos eventos a medida.</p>
                  <p className={styles.paragraph}> <span className={styles.paragraph_arrow}>&#8594;</span> Nuestra <span style={{color: '#e3384f '}}>misión</span> es brindar a los amantes y curiosos del vino, acceso fácil y rápido a vinos auténticos, elaborados con prácticas artesanales, de partidas limitadas y sin aditivos químicos.</p>
                </div>
              </div>
              
              <div style={{borderBottom: '1px solid black', paddingBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '5rem' }} className={styles.page__section_paragraphcontainer}>
                <div>
                <p className={styles.subtitle}>Somos <span style={{color: '#e3384f '}}>Cavistas de oficio,</span> especializados en la curaduría y manejo de una selección atípica, tendiendo puentes con pequeños productores con una impronta irreverente.</p>
                </div>
                <div className={styles.double__image_container}>
                <div style={{width: '100%'}}>
                  <Image
                    src="/images/4ECF7D09-5177-441E-BE33-7958F0311712.JPG"
                    alt='Placeholder'
                    width={0}
                    height={0}
                    sizes="100vw"
                    placeholder="empty"
                    loading="lazy"
                    className={styles.double__image}
                  />
                </div>
                
                <div style={{width: '100%'}}>
                  <video autoPlay muted loop playsInline className={styles.double__image} style={{ width: '100%', maxWidth: '750px', height: 'auto', pointerEvents: 'none', margin: 'auto', bottom: '0' }}>
                    <source src="/images/vineyard2.mp4" />
                  </video>
                </div>
              </div>
              <p className={styles.paragraph}> <span className={styles.paragraph_arrow}>&#8594;</span> Nuestra labor incluye <span style={{color: '#e3384f '}}>seleccionar y conocer en profundidad cada etiqueta</span>, su origen, proceso de elaboración dialogando con sus creadores para transmitir la particularidad de sus vinos. 
                                                Entender sus características únicas nos permite<span style={{color: '#e3384f '}}> asesorar y guiar a nuestros bebedores de forma personalizada.</span>
                </p>
              </div>
              <div className={styles.center} >
              <Link href="/wine">
                <p className={styles.button}>
                  QUE ES EL VINO NATURAL?
                </p>
              </Link>
              </div>
              {/* <div className={styles.double__image_container}>
                <div style={{width: '100%'}}>
                  <Image
                    src="/images/4ECF7D09-5177-441E-BE33-7958F0311712.JPG"
                    alt='Placeholder'
                    width={0}
                    height={0}
                    sizes="100vw"
                    placeholder="empty"
                    loading="lazy"
                    className={styles.double__image}
                  />
                </div>
                <div style={{width: '100%'}}>
                  <video autoPlay muted loop playsInline className={styles.double__image} style={{ width: '100%', maxWidth: '750px', height: 'auto', pointerEvents: 'none', margin: 'auto', bottom: '0' }}>
                    <source src="/images/vineyard2.mp4" />
                  </video>
                </div>
              </div>
              <div className={styles.center}>
              <Link href="/club">
                <p className={styles.button}>
                   UNITE A NUESTRO CLUB 
                </p>
              </Link>
            </div> */}
            </div>
          </div>
        </motion.div>
      </main>
    );
  }
  



{/* <div className={styles.double__image_container}>
<div style={{width: '100%'}}>
  <Image
    src="/images/42EDECD0-0F4E-4DF9-8DA6-FDD18931A272.JPG"
    alt='Placeholder'
    width={0}
    height={0}
    sizes="100vw"
    placeholder="empty"
    loading="lazy"
    className={styles.double__image}
  />
</div>
<div style={{width: '100%'}}>
  <video autoPlay muted loop playsInline className={styles.double__image} style={{ width: '100%', maxWidth: '450px', height: 'auto', pointerEvents: 'none', margin: 'auto', bottom: '0' }}>
    <source src="/images/mist.mp4" />
  </video>
</div>
</div> */}