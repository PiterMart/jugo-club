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
          ease: [0.33, 1, 0.68, 1],
          duration: 1.05,
          x: { duration: 1.55 },
          delay: 0.75
        }}>
          <div className={styles.page} style={{padding: '0px'}}>
        <div style={{height: '100VH',width: '100vw', background: '#e3384f', marginTop: '5rem' }}>
          <div className={styles.page__section} style={{marginTop: '0px', paddingTop: '5rem', gap: '5rem'}}>
            <p className={styles.subtitle} style={{color: 'white', textAlign: 'center', margin: 'auto'}}>ESTAS ENTRANDO</p>
            <div style={{width: '100%'}} className={styles.floating}>
                  <Image
                    src="/jugocup.png"
                    alt='Placeholder'
                    width={0}
                    height={0}
                    sizes="100vw"
                    placeholder="empty"
                    loading="lazy"
                    className={styles.double__image}
                    style={{maxWidth: '400px', filter: "drop-shadow(12px 9px 10px black)"}}
                  />
                </div>
            <p className={styles.subtitle} style={{color: 'white', textAlign: 'center', margin: 'auto'}}>A UN MUNDO DE PLACER</p>
          </div>
        </div>
        </div>
        </motion.div>
      </main>
    );
  }
  