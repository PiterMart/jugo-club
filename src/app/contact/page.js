"use client"
import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import {motion} from 'framer-motion';

export default function Contact() {

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
            <div className={styles.page__section} style={{gap: '0rem'}}>
              <div className={styles.jugo}>
                <p>J</p>
                <Image
                src="/monkU.jpg"
                alt='Placeholder'
                width={0}
                height={0}
                sizes="100vw"
                placeholder="empty"
                loading="lazy"
                className={styles.jugo_image}
              />
                <p>GO?</p>
              </div>
              <div className={styles.jugo_subtitle}>
                <p>Escribinos!
                  <br></br>
                <a>mateo@jugoclub.wine</a>
                </p>
              </div>
              {/* <div style={{textAlign: 'left', margin: 'auto',width: '100%', maxWidth: '700px'}}>
                <Image
                  src="/images/DSCF8972 2.jpg"
                  alt='Placeholder'
                  width={0}
                  height={0}
                  sizes="100vw"
                  placeholder="empty"
                  loading="lazy"
                  style={{height: "auto", width: "100%", maxWidth: "700px", margin: "auto", borderRadius: '10px'}}
                />
                <div>
                    <p className={styles.description}>
                      MATEO 
                    </p>
                </div>
              </div> */}
            </div>
          </div>
        </motion.div>
      </main>
    );
  }
  