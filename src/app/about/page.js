"use client"
import Footer from "../components/footer";
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
          <div className={styles.page} id="start">
            <div className={styles.page__section}>
              <p className={styles.title}>About us</p>
              <div style={{borderBottom: '1px solid black', borderTopLeftRadius: "20px 50px"}} className={styles.page__section_paragraphcontainer}>
                <div>
                  <Image
                    src="/devil.svg"
                    alt="Background"
                    width={0}
                    height={0}
                    priority
                    unoptimized
                    className={`${styles["devil"]} ${styles[""]}`}
                  />
                  <p className={styles.subtitle}>
                    Jugo Club  es un proyecto especializado en Vinos Naturales de baja intervención y de alta
                    calidad.
                    <span style={{color: '#e3384f '}}> Somos una plataforma que comunica, visibiliza y vende online vinos de pequeños productores.</span>
                  </p>
                </div>
                <p className={styles.paragraph}><span className={styles.paragraph_arrow}>&#8594;</span> Redefiniendo el <span style={{fontStyle: 'italic', fontWeight: 'bolder'}}>“buen beber”</span> academicista y acartonado, creemos en servir vino de forma lúdica  y accesible para nunca más escuchar la temerosa frase: <span style={{fontStyle: 'italic', fontWeight: 'bolder'}}>“Yo no sé nada de vinos”</span>, y dar rienda suelta al deleite desprejuiciado de este jugo ancestral.</p>
              </div>
              <div className={styles.page__section_container2}>
                <div style={{pointerEvents: 'none'}} className={styles.image_container}>
                  <video autoPlay muted loop playsInline className={styles.image} style={{ overflow: 'hidden', pointerEvents: 'none', margin: 'auto', bottom: '0' }}>
                    <source src="/images/vineyard.mp4" />
                  </video>
                  <div className={styles.image_container}>
                    <Image
                      src="/vinos.jpg"
                      alt='Placeholder'
                      width={0}
                      height={0}
                      sizes="100vw"
                      placeholder="empty"
                      loading="lazy"
                      className={styles.image}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.page__section2}>
              <div>
                <p className={styles.subtitle} style={{maxWidth: '100%'}}><span style={{fontWeight: '1000', fontFamily: 'Neue'}}>Somos <span style={{color: '#e3384f '}}>Cavistas de oficio</span>,</span> especializados en la curaduría y manejo de una <span style={{fontStyle: 'italic'}}>selección atípica</span>, tendiendo puentes con pequeños productores con una impronta irreverente.</p>
              </div>
              <div className={styles.page__section_slide} >
                <Link href="/events">
                  <div className={styles.image_container}>
                    <Image
                        src="/botella.jpg"
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
                  <p className={styles.paragraph}> 
                    <span className={styles.paragraph_arrow}>&#8594; </span>
                    Nuestra labor incluye 
                    <span style={{ fontWeight: '500'}}> seleccionar y conocer en profundidad cada etiqueta </span>
                    , su origen, proceso de elaboración dialogando con sus creadores para transmitir la particularidad de sus vinos.
                    <br></br>
                    Entender sus características únicas nos permite<span style={{ fontWeight: '500'}}> asesorar y guiar a nuestros bebedores de forma personalizada.</span>
                  </p>
                  <p className={`${styles["paragraph"]}`}>
                    <span className={styles.paragraph_arrow}>&#8594; </span>
                    Diseñamos 
                    <span style={{fontWeight: '500'}}> experiencias </span>
                     y
                     <span style={{fontWeight: '500'}}> catas, </span>
                    ofrecemos 
                    <span style={{fontWeight: '500'}}> consultorías </span> 
                    para restaurantes,  y producimos 
                    <span style={{fontWeight: '500'}}> eventos a medida. </span>
                  </p>
                  <p className={styles.paragraph}>
                    <span className={styles.paragraph_arrow}>
                      &#8594;
                    </span> 
                    Nuestra 
                    <span style={{ fontWeight: '500'}}> misión </span> 
                    es brindar a los amantes y curiosos del vino, acceso fácil y rápido a vinos auténticos, elaborados con prácticas artesanales, de partidas limitadas y sin aditivos químicos.
                  </p>
                  <Link href="/wine">
                      <p className={styles.button} style={{marginTop: '2rem'}}>
                        ¿QUE ES EL VINO NATURAL?
                      </p>
                    </Link>
                </div>
              </div>
            </div>
            <div className={styles.page__section2}>
              <p className={styles.title}>¿Quien es Mateo?</p>
              <div className={styles.page__section_slide} >
                <div className={styles.image_container}>
                  <Image
                      src="/mateo.jpg"
                      alt='Placeholder'
                      width={0}
                      height={0}
                      sizes="100vw"
                      placeholder="empty"
                      loading="lazy"
                      className={styles.image}
                    />
                </div>
                <div className={styles.page__section_slide_info}>
                  <p className={styles.subtitle} style={{maxWidth: '100%'}}>
                    <span style={{color: '#e3384f '}}> El recorrido de Mateo Garcia de Onrubia en el mundo de las bebidas espirituosas y los agasajos es extenso y plagado de anécdotas enriquecedoras.</span>
                  </p>
                  <p className={styles.paragraph}>
                  Comenzó en la escena neoyorquina, gestionando el programa de vinos naturales de Maison Premiere. En 2018, una residencia en un viñedo en la costa amalfitana profundizó su conocimiento en vinos. De vuelta en Buenos Aires, trabajó en Anchoita y Las Divinas, explorando la producción de vinos naturales locales. Eventualmente, decidió trabajar de forma independiente, fortaleciendo relaciones con productores y consumidores, y promoviendo el movimiento del vino natural en Argentina para fomentar una cultura de beber consciente.	
                  </p>
                  <p className={styles.paragraph}>
                  Actualmente prepara el lanzamiento de su primer bar
                  <span style={{fontWeight: 'bold'}}><a href="https://www.instagram.com/acuariobar/" target="_blank"> ACUARIO</a></span>
                  , en la icónica esquina del local principal del  Atelier Bonet.
                  </p>
                  <Link href="/contact">
                    <p className={styles.button} style={{marginTop: '2rem'}}>
                      CONTACT
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.page__section2}>
              <p className={styles.title}>Atelier Bonet</p>
              <div className={styles.page__section_slide} style={{borderBottom: 'none'}}>
                <div className={styles.image_container}>
                  <Image
                      src="/atelier.jpg"
                      alt='Placeholder'
                      width={0}
                      height={0}
                      sizes="100vw"
                      placeholder="empty"
                      loading="lazy"
                      className={styles.image}
                    />
                </div>
                <div className={styles.page__section_slide_info}>
                  <p className={styles.subtitle} style={{maxWidth: '100%'}}> 
                    Nuestro HQ tiene lugar en el segundo piso de uno de los edificios más emblemáticos del modernismo de la ciudad de Buenos Aires: la <span style={{color: '#e3384f '}}><a href="https://es.wikipedia.org/wiki/Casa_de_Estudios_para_Artistas" target="_blank"> Casa de estudios para artistas </a></span> realizada por el arquitecto  <span style={{color: '#e3384f '}}><a href="https://es.wikipedia.org/wiki/Antonio_Bonet_Castellana" target="_blank">Antoni Bonet i Castellana</a></span> en 1938 pensado desde sus orígenes como “un pequeño centro de relación”.
                  </p>
                  <p className={styles.paragraph}>
                    Le rendimos honor a este impulso de idear una arquitectura relacional y  en ocasiones especiales abrimos nuestro espacio para la realización de eventos. Desde catas a social events, a lo que el imaginario dicte, nuestras puertas están abiertas. 
                  </p>
                  <p className={styles.paragraph}>
                    En la planta baja de este edificio, en el local principal ubicado en la esquina del Atelier Bonet, Jugo Club dirige las etiquetas y experiencias del Bar Acuario.
                  </p>
                  <Link href="/events">
                    <p className={styles.button} style={{marginTop: '2rem'}}>
                      EVENTS
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <Footer/>
      </main>
    );
  }