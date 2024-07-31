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
              <div style={{borderBottom: '1px solid black', paddingBottom: '1.5rem', borderTopLeftRadius: "20px 50px"}} className={styles.page__section_paragraphcontainer}>
                <p className={styles.subtitle}>Interpretar la necesidad de una disrupción de los paradigmas para habilitar un encuentro más certero y <span style={{color: '#e3384f '}}>situado en un presente contínuo sin ánimos de especulación en el futuro.</span> </p>
                <p className={styles.paragraph}> <span className={styles.paragraph_arrow}>&#8594;</span> Entender estos mandamientos a la hora de dirigir la mirada hacia los procesos de producción de una de las bebidas más ancestrales -<span style={{fontStyle: 'italic'}}> que nos ha acompañado como especie desde los albores de nuestros tiempos</span> - implica no sólo la construcción de una idea sobre lo hedonista y el deseo en general, sino comprender que la alquimia de un elixir tal tiene tanto de íntimo como de único a cada proceso. </p>
              </div>
            <div style={{borderBottom: '1px solid black'}} className={styles.page__section4}>
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
                />
              </div>
              <div className={styles.page__section4_paragraphcontainer}>
                <p className={styles.subtitle} style={{fontSize: "60px"}}><span style={{color: '#e3384f '}}>UVAS</span></p>
                <p className={styles.paragraph} style={{fontWeight: 'lighter'}}> <span className={styles.paragraph_arrow}>&#8594;</span> La historia de un <span style={{fontWeight: 'bold'}}>vino natural</span> empieza en los viñedos, donde las uvas crecen <span style={{color: '#e3384f '}} >libres de pesticidas y herbicidas sintéticos.</span> La <span style={{fontWeight: 'bold'}}>viticultura orgánica y biodinámica</span> <span style={{color: '#e3384f '}}>promueve la biodiversidad, permitiendo que las uvas absorban la esencia del suelo y el entorno,</span> creando una conexión única con el mismo. Este concepto es lo que le da a los vinos <span style={{fontWeight: 'bold'}}>pertenencia de lugar:</span> <span style={{fontStyle: 'italic'}}>“Terruño” - el clima, el suelo, la altitud, y la biodiversidad.</span></p>
              </div>
            </div>
            <div style={{borderBottom: '1px solid black', paddingBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '5rem' }} className={styles.page__section_paragraphcontainer}>
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
                    <p className={`${styles["big"]} ${styles["subtitle"]}`} style={{color: "#e3384f"}}>VINIFICACIÓN</p>
                    <p className={styles.paragraph2} style={{fontWeight: 'lighter'}}> <span className={styles.paragraph_arrow}>&#8594;</span>La transformación de la uva en vino es un <span style={{color: '#e3384f '}}>proceso delicado y respetuoso.</span> En la <span style={{fontWeight: 'bold'}}>vinificación natural,</span> las uvas se procesan utilizando sus propias <span style={{fontWeight: 'bold'}}>levaduras indígenas o autóctonas,</span> sin levaduras de laboratorio ni la adición de químicos. Este <span style={{fontWeight: 'bold'}}>método minimalista</span> permite que el vino desarrolle su <span style={{fontWeight: 'bold'}}>verdadero carácter,</span> resultando en una <span style={{color: '#e3384f '}} >bebida viva y saludable... </span> </p>
                  </div>
                </div>
              </div>
              <div style={{borderBottom: '1px solid black', marginBottom: '5rem'}} className={styles.page__section4}>
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
                />
              </div>
              <div className={styles.page__section4_paragraphcontainer}>
                <p className={styles.subtitle} style={{fontSize: "60px"}}><span style={{color: '#e3384f '}}>CRIANZA Y BOTELLA</span></p>
                <p className={styles.paragraph} style={{fontWeight: 'lighter'}}><span className={styles.paragraph_arrow}>&#8594;</span><span style={{fontWeight: 'bold'}}> El vino natural</span> <span style={{fontStyle: 'italic'}}>(una vez procesada la uva)</span> pasa por un proceso de crianza que incluye el desborre, prensado, y trasiego a sus diversos recipientes de crianza: ánforas, barricas, tanques, o directamente a la botella. Cada etapa de este viaje busca refinar y estabilizar el vino, permitiendo que desarrolle una profundidad y complejidad únicas, mientras mantiene su autenticidad y conexión con la tierra, guiando el vino en su nuevo camino transformado.</p>
              </div>
            </div>
              <div className={styles.center} >
                <Link href="/wine">
                  <p className={styles.button}>
                    QUE ES EL VINO NATURAL?
                  </p>
                </Link>
              </div>
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