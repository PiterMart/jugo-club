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
          ease: [0.65, 0, 0.35, 1],
          duration: 0.75,
          x: { duration: 0.25 }
        }}>
          <div className={styles.page}>
            <div className={styles.page__section}>
              <p className={styles.page__title}>WORK IN PROGRESS</p>
              <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dolor nisi. Integer vitae sem eu justo convallis ultrices. Vestibulum auctor in sem sit amet maximus. Aenean dapibus dolor sem, ut aliquet diam sagittis vitae. In feugiat, enim ut bibendum tempus, nisi est dapibus ante, sit amet faucibus purus mi ut metus.</p>
              <div style={{textAlign: 'left', margin: 'auto',width: '100%', maxWidth: '700px'}}>
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
                <div style={{textAlign: 'left', margin: 'auto',width: '100%', maxWidth: '700px'}}>
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
              </div>
              <div style={{textAlign: 'left', margin: 'auto',width: '100%', maxWidth: '700px'}}>
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
              </div>
              <div style={{textAlign: 'left', margin: 'auto',width: '100%', maxWidth: '700px'}}>
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
              </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    );
  }
  