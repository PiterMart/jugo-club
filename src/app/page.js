'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <main className={styles.main}>
      <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} transition={{
        ease: [0.65, 0, 0.35, 1],
        duration: 0.75,
        x: { duration: 0.25 }
      }}>
        <div>
          <Image
            src="/backgrounddemo.png"
            alt="Background"
            width={0}
            height={0}
            priority
            unoptimized
            style={{ width: '100%', height: '100%', position: 'fixed', objectFit: 'cover', zIndex: '-1', right: '0', bottom: '0', pointerEvents: 'none', }}
          />
        </div>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/jugoClubLogo.png"
            alt='Jugo Club'
            width={0}
            height={0}
            sizes="100vw"
            placeholder="empty"
            loading="lazy"
            style={{position: 'fixed', height: 'auto', zIndex: "-1", marginTop: '20vh'}}
          />
        </div>
        <div style={{height: '100VH'}}></div>
        <div className={styles.page}>
          <div className={styles.page__section} style={{paddingTop: '5rem'}}>
            <p className={styles.title}>
              SERVIMOS VINOS NATURALES
            </p>
            <div className={styles.center}>
              <Link href="/about">
                <p className={styles.button}>
                  Lorem ipsum dolor sit amet
                </p>
              </Link>
            </div>
          </div>
          <div className={styles.page__section}>
            {/* <p className={styles.title}>
              EVENTOS
            </p> */}
            <Image
              src="/picturePlacehodler.png"
              alt='Placeholder'
              width={0}
              height={0}
              sizes="100vw"
              placeholder="empty"
              loading="lazy"
              style={{height: "auto", width: "100%", maxWidth: "500px", margin: "auto"}}
            />
            <div className={styles.center}>
              <Link href="/about">
                <p className={styles.paragraph}>
                  Lorem ipsum dolor sit amet 
                </p>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
