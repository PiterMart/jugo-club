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
                  src="/swan.png"
                  alt="Background"
                  width={0}
                  height={0}
                  priority
                  unoptimized
                  className={`${styles["devil"]} ${styles["swan"]}`}
                />
                <p className={styles.subtitle}>Es esencial para poder difundir el arte de la producción del vino natural y orgánico, <span style={{color: '#e3384f '}}>centrar nuestra labor en la experiencia de compartir esta bebida espirituosa en un ambiente íntimo o social.</span></p>
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
                  <p className={`${styles["subtitle"]}`} style={{maxWidth: '100%'}}>Entre nuestros clientes se encuentran ArteBA, Soho House, galerías de arte y eventos privados hosteados tanto en el emblemático <span style={{color: '#e3384f '}}>Atelier Bonet</span>, headquarter de Jugo Club, o en venues específicos a cada evento. </p>
                  <p className={styles.paragraph}> <span className={styles.paragraph_arrow}>&#8594;</span> Este servicio <span style={{fontStyle: 'italic', fontWeight: 'bolder'}}>tailor-made</span> se adapta a las necesidades de cada cliente pudiendo ir desde una asesoría hasta la producción integral del evento.</p>
                </div>
              </div>
            </div>
          {/* <marquee className={styles.paragraph} style={{  color: 'white', background: '#e3384f', padding: '0.5rem', marginBottom: '5rem', fontSize: '119px'}} loop="0" scrollamount="15" Scrolldelay="175" >PAGINA EN CONSTRUCCIÓN    &#9829;  </marquee> */}
            {/* <div className={styles.page__section}>
              <p className={styles.subtitle}>Parte esencial de la misión por difundir el arte de la producción del vino natural y orgánico</p>
              <div className={styles.double__image_container}>
                <Image
                  src="/images/DSCF8976 2.jpg"
                  alt='Placeholder'
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="empty"
                  loading="lazy"
                  className={styles.double__image}
                />
                <Image
                  src="/images/DSCF8845 2.jpg"
                  alt='Placeholder'
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="empty"
                  loading="lazy"
                  className={styles.double__image}
                />
              </div>
              <p className={styles.paragraph}>  - es centrar nuestra labor en la experiencia, ya sea en un ambiente íntimo o social, el ritual ancestral y único de compartir una bebida espirituosa se establece como un momento de realización de aquello que nos mancomuna con un otrx.  - </p>
              <Image
                src="/images/DSCF8950 2.jpg"
                alt='Placeholder'
                width={0}
                height={0}
                sizes="100vw"
                placeholder="empty"
                loading="lazy"
                className={styles.single__image_panoramic}
              />
              <p className={styles.paragraph}>  - Teniendo esto en cuenta, desde Jugo Club elaboramos una serie de situaciones, ambientes, medios que muchas veces se adaptan a los formatos de eventos artísticos, gatherings, o cócteles especiales para las agendas de quienes busquen crear encuentros diseñados hasta el último detalle.   - </p>
              <Image
                src="/images/DSCF8932 2.jpg"
                alt='Placeholder'
                width={0}
                height={0}
                sizes="100vw"
                placeholder="empty"
                loading="lazy"
                className={styles.single__image_panoramic}
              />
              <p className={styles.paragraph}>  - Contamos con un portfolio de acompañamientos anteriores y estamos abiertos a llevar adelante futuras asistencias en la elaboración de esta clase de encuentros. Por consultas sobre experiencias anteriores o posibles diseños especiales de este servicio, escribir para más información.   - </p>
              <div className={styles.center}>
              <Link href="/contact">
                <p className={styles.button}>
                   CONTACTO 
                </p>
              </Link>
            </div>
              <div className={styles.double__image_container}>
                <Image
                  src="/images/sohohouse-bonet-felixniikado-baja-7.jpg"
                  alt='Placeholder'
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="empty"
                  loading="lazy"
                  className={styles.double__image}
                />
                <Image
                  src="/images/sohohouse-bonet-felixniikado-baja-40.jpg"
                  alt='Placeholder'
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="empty"
                  loading="lazy"
                  className={styles.double__image}
                />
              </div>
              <p className={styles.subtitle}>Nuestros HQs tienen lugar en la <a href="https://es.wikipedia.org/wiki/Casa_de_Estudios_para_Artistas" target="_blank" style={{color: "#ab3131"}}>Casa de estudios para artistas</a> realizada por los arquitectos Antoni Bonet i Castellana, Horacio Vera Ramos y Abel López Chas en 1938</p>
              <div className={styles.double__image_container}>
                <Image
                  src="/images/DSCF8911 2.jpg"
                  alt='Placeholder'
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="empty"
                  loading="lazy"
                  className={styles.double__image}
                />
                <Image
                  src="/images/DSCF9035.jpg"
                  alt='Placeholder'
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="empty"
                  loading="lazy"
                  className={styles.double__image}
                />
              </div>
              <p className={styles.paragraph}> - conformándose como un patrimonio único de la ciudad pensado desde sus orígenes como “un pequeño centro de relación”. Es nuestro espíritu rendirle honores a este primer impulso de idear una arquitectura relacional invocando un ambiente para la distensión y el encuentro. = </p>
              <Image
                src="/images/DSCF9027 2.jpg"
                alt='Placeholder'
                width={0}
                height={0}
                sizes="100vw"
                placeholder="empty"
                loading="lazy"
                className={styles.single__image_panoramic}
              />
              <p className={styles.paragraph}>- En ocasiones muy especiales abrimos nuestro espacio para la realización de eventos que requieran de un lugar ideado para estos propósitos de una manera única. Desde catas a social events, a lo que el imaginario dicte, nuestras puertas están abiertas. -</p>
              <Image
                src="/images/DSCF8961 2.jpg"
                alt='Placeholder'
                width={0}
                height={0}
                sizes="100vw"
                placeholder="empty"
                loading="lazy"
                className={styles.single__image_panoramic}
              />
            </div> */}
            {/* <div className={styles.center}>
              <Link href="/contact">
                <p className={styles.button}>
                   CONTACTANOS
                </p>
              </Link>
            </div> */}
          </div>
        </motion.div>
        <Footer/>
      </main>
    );
  }
  