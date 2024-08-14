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
            <div className={styles.page__section} >
              <p className={styles.title}>¿Que es el <span className={styles.blink}> vino</span> natural?</p>
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
                <p className={styles.paragraph}> <span className={styles.paragraph_arrow}>&#8594;</span> Entender estos mandamientos a la hora de dirigir la mirada hacia los procesos de producción de una de las bebidas más ancestrales -<span style={{fontStyle: 'italic', fontWeight: 'bolder'}}> que nos ha acompañado como especie desde los albores de nuestros tiempos</span> - implica no sólo la construcción de una idea sobre lo hedonista y el deseo en general, sino comprender que la alquimia de un elixir tal tiene tanto de íntimo como de único a cada proceso. </p>
              </div>
            <div style={{borderBottom: '1px solid black'}} className={styles.page__section_container2}>
                <Image
                  src="/images/IMG_5695_1.jpg"
                  alt='Placeholder'
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="empty"
                  loading="lazy"
                  className={styles.image}
                />
              <div className={styles.page__section_paragraphcontainer2}>
                <p className={`${styles["big"]} ${styles["title"]}`} style={{fontSize: ""}}><span style={{color: '#e3384f '}}>UVAS</span></p>
                <p className={styles.paragraph} style={{}}> <span className={styles.paragraph_arrow}>&#8594;</span> La historia de un vino natural empieza en los viñedos, donde las uvas crecen <span style={{fontStyle: 'italic'}} >libres de pesticidas y herbicidas sintéticos.</span> La <span style={{fontWeight: 'bold'}}>viticultura orgánica y biodinámica</span> <span style={{fontStyle: 'italic'}}>promueve la biodiversidad, permitiendo que las uvas absorban la esencia del suelo y el entorno,</span> creando una conexión única con el mismo. Este concepto es lo que le da a los vinos pertenencia de lugar: <span style={{fontStyle: 'italic' , fontWeight: '200'}}>“Terruño” - el clima, el suelo, la altitud, y la biodiversidad.</span></p>
              </div>
            </div>
            <div style={{borderBottom: '1px solid black', paddingBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '5rem' }} className={styles.page__section_paragraphcontainer}>
              <div className={`${styles["page__section2"]} ${styles["page__section3"]}`} style={{padding: "0px"}}>
                  <Image
                    src="/images/IMG_5695_1.jpg"
                    alt='Placeholder'
                    width={0}
                    height={0}
                    sizes="100vw"
                    placeholder="empty"
                    loading="lazy"
                    className={styles.image}
                  />
                  <div className={styles.page__section_paragraphcontainer3}>
                    <p className={`${styles["big2"]} ${styles["title"]}`} style={{fontSize: "", color: "#e3384f", maxWidth:"100%"}}>VINIFICACIÓN</p>
                    {/* <div>
                      <p className={styles.subtitle} style={{fontSize: "60px", textAlign: 'right'}}><span style={{color: '#e3384f '}}>VINI-</span></p>
                      <p className={styles.subtitle} style={{fontSize: "60px"}}><span style={{color: '#e3384f '}}>FICA-</span></p>
                      <p className={styles.subtitle} style={{fontSize: "60px"}}><span style={{color: '#e3384f '}}>CIÓN</span></p>
                    </div> */}
                    <p className={styles.paragraph2} > <span className={styles.paragraph_arrow}>&#8594;</span>La transformación de la uva en vino es un <span style={{fontStyle: 'italic'}}>proceso delicado y respetuoso.</span> En la <span style={{fontWeight: 'bold'}}>vinificación natural,</span> las uvas se procesan utilizando sus propias levaduras indígenas o autóctonas, sin levaduras de laboratorio ni la adición de químicos. Este método minimalista permite que el vino desarrolle su verdadero carácter, resultando en una <span style={{fontStyle: 'italic'}} >bebida viva y saludable... </span> </p>
                  </div>
                </div>
              </div>
              <div style={{borderBottom: '1px solid black', marginBottom: '5rem'}} className={styles.page__section_container2}>
              {/* <div className={styles.page__section2}> */}
                <Image
                  src="/images/IMG_5695_1.jpg"
                  alt='Placeholder'
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="empty"
                  loading="lazy"
                  className={styles.image}
                />
              {/* </div> */}
              <div className={styles.page__section_paragraphcontainer2}>
                <div>
                <p className={`${styles["big"]} ${styles["title"]}`} style={{fontSize: ""}}><span style={{color: '#e3384f '}}>CRIANZA</span></p>
                <p className={`${styles["big"]} ${styles["title"]}`} style={{fontSize: ""}}><span style={{color: '#e3384f '}}><span className={styles.blink}>Y</span> BOTELLA</span></p>
                </div>
                <p className={styles.paragraph}><span className={styles.paragraph_arrow}>&#8594;</span><span style={{fontWeight: 'bold'}}> El vino natural</span> <span style={{fontStyle: 'italic'}}>(una vez procesada la uva)</span> pasa por un proceso de crianza que incluye el desborre, prensado, y trasiego a sus diversos recipientes de crianza: ánforas, barricas, tanques, o directamente a la botella. Cada etapa de este viaje busca refinar y estabilizar el vino, permitiendo que desarrolle una profundidad y complejidad únicas, mientras mantiene su autenticidad y conexión con la tierra, guiando el vino en su nuevo camino transformado.</p>
              </div>
            </div>
              <div className={styles.center} >
                <Link href="/club">
                  <p className={styles.button}>
                    UNITE A JUGO CLUB
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