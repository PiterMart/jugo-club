"use client"
import contactForm from "../components/contactForm";
import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import {motion} from 'framer-motion';
import ContactForm from "../components/contactForm";

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
          <div className={styles.page} style={{gap: '2.5rem'}}>
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
                {/* <a>mateo@jugoclub.wine</a> */}
                </p>
              </div>
            </div>
            <ContactForm/>
          </div>
        </motion.div>
      </main>
    );
  }
  