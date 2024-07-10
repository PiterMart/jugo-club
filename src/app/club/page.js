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
          ease: [0.65, 0, 0.35, 1],
          duration: 0.75,
          x: { duration: 0.25 }
        }}>
          {/* <div>
            <Image
              src="/images/wineglasses.jpg"
              alt="Background"
              width={0}
              height={0}
              priority
              unoptimized
              style={{ width: '100%', height: '100%', position: 'fixed', objectFit: 'cover', zIndex: '-1', right: '0', bottom: '0', pointerEvents: 'none', }}
            />
          </div> */}
          {/* <div style={{height: '80vH'}}></div> */}
          {/* <div className={styles.division}>
          </div> */}
          <div className={styles.page}>
            <div className={styles.page__section}>
            <p className={styles.page__title}> CLUB</p>
            <p className={styles.subtitle}>JUGO CLUB se basa en entablar una relación fluída con los productores de vino locales</p>
            <div className={styles.double__image_container}>
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
              <Image
                src="/images/IMG_5696_1.jpg"
                alt='Placeholder'
                width={0}
                height={0}
                sizes="100vw"
                placeholder="empty"
                loading="lazy"
                className={styles.double__image}
              />
            </div>
            <p className={styles.paragraph}>  - Ir a la fuente, conocer la materia prima y los procesos de crianza de las uvas y la transformación hacia el vino, escuchar las historias y peripecias que llevaron a la elaboración de estos productos que se acercan por momentos mucho más a la categoría de artesanía que a la de elemento producido en serie.  - </p>
            <Link href="/shop">
              <div style={{textAlign: 'left', margin: 'auto',width: '100%', maxWidth: '700px'}}>
                <Image
                  src="/images/RIES_2595.jpg"
                  alt='Placeholder'
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="empty"
                  loading="lazy"
                  className={styles.single__image}
                />
                <div>
                    <p className={styles.description}>
                      Explora nuevas sensaciones
                    </p>
                </div>
              </div>
            </Link>
            <p className={styles.paragraph}>  - Desde el conocimiento sobre la trazabilidad de los vinos es que elaboramos un archivo extenso y curado en base a esta cadena de lazos humanos, teniendo en cuenta todos estos pasos previos, todas estas pequeñas biografías, creando una narrativa única que se desenvuelve en este trabajo de investigación y que termina por componer a la cava como un órgano vivo, mutable y ecléctico.   - </p>
            <div className={styles.double__image_container}>
              <Image
                src="/images/RIES_2580.jpg"
                alt='Placeholder'
                width={0}
                height={0}
                sizes="100vw"
                placeholder="empty"
                loading="lazy"
                className={styles.double__image}
              />
              <Image
                src="/images/RIES_2957.jpg"
                alt='Placeholder'
                width={0}
                height={0}
                sizes="100vw"
                placeholder="empty"
                loading="lazy"
                className={styles.double__image}
              />
            </div>
            </div>
            <div className={styles.page__section}>
            <p className={styles.title}>
              COMING SOON!
            </p>
            <p className={styles.paragraph}>  - Desde JUGO CLUB tenemos la intención de acercar al público este trabajo de investigación y su resultado a través del acceso al mismo y un sistema de suscripciones mensuales que constan no sólo de una selección curada de nuestras piezas favoritas puestas en diálogo entre sí, sino de un acercamiento didáctico y comprensivo a todos los matices que dan a cada botella su particularidad. Mes a mes entregaremos pequeños recortes de este archivo junto con la bio y el desglose de todas las notas y sensaciones que cada selección puede ofrecer.    - </p>
          </div>
          <div className={styles.center}>
              <Link href="/events">
                <p className={styles.button}>
                   JUGO CLUB EN CARNE Y HUESO
                </p>
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    );
  }
  