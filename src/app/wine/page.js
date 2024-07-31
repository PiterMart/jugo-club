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
          <div className={styles.page}>
            <div className={styles.page__section}>
              <p className={styles.page__title}>QUE ES EL VINO NATURAL?</p>
              {/* <div style={{gap: '0rem'}}>
                <div style={{background: "#e3384f ", padding: "1.5rem"}}>
                  <p className={styles.subtitle} style={{color: 'black', marginTop: '0rem', }}>VINOS CON CARACTER</p>
                </div>
                <div style={{background: "rgb(229,229,229)", padding: "1.5rem"}}>
                  <p className={styles.subtitle} style={{color: '#e3384f', marginTop: '0rem' }}>COMO SE SIGUE A UN VIGNERON Y NO A UNA BODEGA</p>
                </div>
                <div style={{background: "black ", padding: "1.5rem"}}>
                  <p className={styles.subtitle} style={{color: '#e3384f', marginTop: '0rem' }}>CUALES SON LOS PRINCIPIOS MORALES DEL VINO NATURAL</p>
                </div>
                <div style={{background: "rgb(229,229,229)", padding: "1.5rem"}}>
                  <p className={styles.subtitle} style={{color: '#e3384f', marginTop: '0rem' }}>LA DISRUPCION DE SABORES, ESCALA, ETICA Y LA EMERGENCIA DE LA PERSONALIDAD Y NO TANTO DE LOS CANONES Y LA ACADEMIA ANTIGUA</p>
                </div>
              </div> */}
              <div style={{borderBottom: '1px solid black', paddingBottom: '1.5rem'}}>
                <p className={styles.subtitle}>Interpretar la necesidad de una disrupción de los paradigmas para habilitar un encuentro más certero y <span style={{color: '#e3384f '}}>situado en un presente contínuo sin ánimos de especulación en el futuro.</span> </p>
                <p className={styles.paragraph}> <span className={styles.paragraph_arrow}>&#8594;</span> Entender estos mandamientos a la hora de dirigir la mirada hacia los procesos de producción de una de las bebidas más ancestrales -<span style={{fontStyle: 'italic'}}> que nos ha acompañado como especie desde los albores de nuestros tiempos</span> - implica no sólo la construcción de una idea sobre lo hedonista y el deseo en general, sino comprender que la alquimia de un elixir tal tiene tanto de íntimo como de único a cada proceso. </p>
              </div>
            </div>
            <div className={styles.page__section2}>
                  <Image
                    src="/images/IMG_5695_1.jpg"
                    alt='Placeholder'
                    width={0}
                    height={0}
                    sizes="100vw"
                    placeholder="empty"
                    loading="lazy"
                    className={styles.double__image}
                    style={{maxWidth: '500px'}}
                  />
                  <div>
                    <p className={styles.subtitle}style={{marginTop: '0px', color: '#e3384f' }}>UVAS</p>
                    <p className={styles.paragraph} style={{fontWeight: 'lighter'}}>La historia de un vino natural empieza en los viñedos, donde las uvas crecen <span style={{fontWeight: 'bold'}}>libres de pesticidas y herbicidas sintéticos.</span> La viticultura orgánica y biodinámica promueve la biodiversidad, permitiendo que las uvas absorban la esencia del suelo y el entorno, creando una conexión única con su entorno. Este concepto es lo que le da a los vinos pertenencia de lugar: <span style={{fontStyle: 'italic'}}>“Terruño” - el clima, el suelo, la altitud, y la biodiversidad.</span></p>
                  </div>
            </div>
            <div className={`${styles["page__section2"]} ${styles["page__section3"]}`}>
                  <Image
                    src="/images/IMG_5695_1.jpg"
                    alt='Placeholder'
                    width={0}
                    height={0}
                    sizes="100vw"
                    placeholder="empty"
                    loading="lazy"
                    className={styles.double__image}
                    style={{maxWidth: '500px'}}
                  />
                  <div className={styles.page__section2_paragraphcontainer}>
                    <p className={styles.subtitle}style={{marginTop: '0px', textWrap: 'wrap', color: '#e3384f'}}>VINIFICACIÓN</p>
                    <p className={styles.paragraph2} style={{fontWeight: 'lighter'}}> <span style={{fontWeight: 'bold'}}>La transformación de la uva en vino es un proceso delicado y respetuoso.</span> En la vinificación natural, las uvas se procesan utilizando sus propias levaduras indígenas o autóctonas, sin levaduras de laboratorio ni la adición de químicos. Este método minimalista permite que el vino desarrolle su verdadero carácter, resultando en <span style={{fontWeight: 'bold'}}> una bebida viva y saludable... </span> </p>
                  </div>
            </div>
            <div className={styles.page__section2}>
                  <Image
                    src="/images/IMG_5695_1.jpg"
                    alt='Placeholder'
                    width={0}
                    height={0}
                    sizes="100vw"
                    placeholder="empty"
                    loading="lazy"
                    className={styles.double__image}
                    style={{maxWidth: '500px'}}
                  />
                  <div>
                    <p className={styles.subtitle}style={{marginTop: '0px', color: '#e3384f'}}>CRIANZA Y BOTELLA</p>
                    <p className={styles.paragraph} style={{fontWeight: 'lighter'}}>El vino natural (una vez procesada la uva) pasa por un proceso de crianza que incluye el desborre, prensado, y trasiego a sus diversos recipientes de crianza: ánforas, barricas, tanques, o directamente a la botella. Cada etapa de este viaje busca refinar y estabilizar el vino, permitiendo que desarrolle una profundidad y complejidad únicas, mientras mantiene su autenticidad y conexión con la tierra, guiando el vino en su nuevo camino transformado.</p>
                  </div>
            </div>
          </div>
        </motion.div>
      </main>
    );
  }
  