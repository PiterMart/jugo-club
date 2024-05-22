'use client'
import Image from "next/image";
import styles from "./page.module.css";
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
            src="/jugoClubLogo.png"
            alt='Jugo Club'
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100vh', height: '100%',maxWidth: '800px', filter: 'invert(100%)'}}
          />
        </div>
        <div className={styles.page} style={{marginTop: '25vh'}}>
        <p className={styles.title}>
            JUGO CLUB VINOS NATURALES
          </p>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet leo quis nulla varius laoreet. Phasellus sed vehicula felis. Quisque felis urna, laoreet finibus ullamcorper scelerisque, maximus id nisi. Morbi commodo quam et purus lobortis facilisis. Donec convallis elementum tempus. Phasellus ornare varius sapien, vitae tristique ex egestas fermentum. Vivamus posuere, sapien vitae suscipit condimentum, lorem ligula posuere leo, id congue ligula enim a turpis. Vivamus eget diam quis dui ullamcorper volutpat ac vel orci. Donec elit eros, pretium sit amet est sit amet, porttitor ornare quam.
          </p>
        </div>
      </motion.div>
    </main>
  );
}
