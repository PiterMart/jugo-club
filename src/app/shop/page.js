"use client"
import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import {motion} from 'framer-motion';
import { Suspense } from "react";

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
          <Suspense fallback={<p style={{color: 'white'}}>LOADING</p>}>
            <div style={{width: '100vw', zIndex: '0', marginTop: '5rem'}}>
              <iframe src="https://jugoclub.wine/productos" style={{height: '100vh', width: '100%', margin: '0'}} frameBorder="0" allowFullScreen></iframe>
            </div>
          </Suspense>
        </motion.div>
      </main>
    );
  }
  