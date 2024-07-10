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
          ease: [0.65, 0, 0.35, 1],
          duration: 0.75,
          x: { duration: 0.25 }
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
              <p className={styles.subtitle}>Es nuestra posición más imperiosa, establecer el goce como fuente principal de todo estatuto de supervivencia del ser humano contemporáneo.</p>
              <div className={styles.double__image_container}>
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
                <video autoPlay muted loop playsInline className={styles.double__image} style={{ width: '100%', maxWidth: '450px', height: 'auto', pointerEvents: 'none', margin: 'auto', bottom: '0' }}>
                  <source src="/images/winepour.mp4" />
                </video>
              </div>
              <p className={styles.paragraph}>  - Interpretar la necesidad de una disrupción de los paradigmas para habilitar un encuentro más certero y situado en un presente contínuo sin ánimos de especulación en el futuro. - </p>
              <div style={{ width: 'auto', height: 'auto', pointerEvents: 'none', margin: 'auto'}}>
                <video autoPlay muted loop playsInline className={styles.single__image} style={{ width: '70%', height: 'auto', overflow: 'hidden', pointerEvents: 'none', margin: 'auto', bottom: '0' }}>
                  <source src="/images/vineyard1.mp4" />
                </video>
              </div>
              <p className={styles.subtitle}>El verdadero lujo de la contemporaneidad es el tiempo. </p>
              <div className={styles.double__image_container}>
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
                <video autoPlay muted loop playsInline className={styles.double__image} style={{ width: '100%', maxWidth: '450px', height: 'auto', pointerEvents: 'none', margin: 'auto', bottom: '0' }}>
                  <source src="/images/mist.mp4" />
                </video>
              </div>

              <p className={styles.paragraph}>- Entender estos mandamientos a la hora de dirigir la mirada hacia los procesos de producción, de una de las bebidas más ancestrales, implica no sólo la construcción de una idea sobre lo hedonista y el deseo en general, sino comprender que la alquimia de un elixir tal tiene tanto de íntimo como de único a cada proceso. - </p>
              <div className={styles.double__image_container}>
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
                <video autoPlay muted loop playsInline className={styles.double__image} style={{ width: '100%', maxWidth: '450px', height: 'auto', pointerEvents: 'none', margin: 'auto', bottom: '0' }}>
                  <source src="/images/vineyard2.mp4" />
                </video>
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
  