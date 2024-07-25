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
            <div className={styles.page__section}>
              <p className={styles.page__title}>ABOUT US</p>
              <p className={styles.paragraph}>Redefiniendo el “buen beber” academicista y acartonado, creemos en servir vino de forma lúdica  y accesible para nunca más escuchar la temerosa frase: “Yo no sé nada de vinos” y dar rienda suelta al deleite desprejuiciado de este jugo ancestral.</p>
              <div className={styles.double__image_container}>
                <div>
                  <Image
                    src="/images/071F2C27-4DF8-4A9F-BE1A-8D27CC35722E.JPG"
                    alt='Placeholder'
                    width={0}
                    height={0}
                    sizes="100vw"
                    placeholder="empty"
                    loading="lazy"
                    className={styles.double__image}
                  />
                </div>
                <div>
                  <video autoPlay muted loop playsInline className={styles.double__image} style={{ width: '100%', maxWidth: '450px', height: 'auto', pointerEvents: 'none', margin: 'auto', bottom: '0' }}>
                    <source src="/images/winepour.mp4" />
                  </video>
                </div>
              </div>
              <div>
                <p className={styles.paragraph}>Jugo Club  es un proyecto especializado en Vinos Naturales de baja intervención y de alta calidad. Somos una plataforma que comunica, visibiliza y vende online vinos de pequeños productores.</p>
                <p className={styles.paragraph}><span style={{color: '#e3384f '}}>Diseñamos</span> experiencias y catas, ofrecemos consultorías para restaurantes  y producimos eventos a medida.</p>
                <p className={styles.paragraph}>Nuestra <span style={{color: '#e3384f '}}>misión</span> es brindar a los amantes y curiosos del vino, acceso fácil y rápido a vinos auténticos, elaborados con prácticas artesanales, de partidas limitadas y sin aditivos químicos.</p>
                <p className={styles.paragraph}>Somos <span style={{color: '#e3384f '}}>Cavistas</span> de oficio, especializados en la curaduría y manejo de una selección atípica, tendiendo puentes con pequeños productores con una impronta irreverente.</p>
                <p className={styles.paragraph}>Nuestra labor incluye seleccionar y conocer en profundidad cada etiqueta, su origen, proceso de elaboración dialogando con sus creadores para transmitir la particularidad de sus vinos. 
                                                Entender sus características únicas nos permite asesorar y guiar a nuestros bebedores de forma personalizada.
                </p>
              </div>
              <div className={styles.center}>
              <Link href="/club">
                <p className={styles.button}>
                  QUE ES EL VINO NATURAL?
                </p>
              </Link>
            </div>
              {/* <div style={{ width: 'auto', height: 'auto', pointerEvents: 'none', margin: 'auto'}}>
                <video autoPlay muted loop playsInline className={styles.single__image} style={{ width: '70%', height: 'auto', overflow: 'hidden', pointerEvents: 'none', margin: 'auto', bottom: '0' }}>
                  <source src="/images/vineyard1.mp4" />
                </video>
              </div> */}
              {/* <div className={styles.double__image_container}>
                <div>
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
                <div>
                  <video autoPlay muted loop playsInline className={styles.double__image} style={{ width: '100%', maxWidth: '450px', height: 'auto', pointerEvents: 'none', margin: 'auto', bottom: '0' }}>
                    <source src="/images/mist.mp4" />
                  </video>
                </div>
              </div> */}
              <div className={styles.double__image_container}>
                <div>
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
                <div>
                  <video autoPlay muted loop playsInline className={styles.double__image} style={{ width: '100%', maxWidth: '450px', height: 'auto', pointerEvents: 'none', margin: 'auto', bottom: '0' }}>
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
            </div>
            </div>
          </div>
        </motion.div>
      </main>
    );
  }
  