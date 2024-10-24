"use client"
import Footer from "../../components/footer";
import Image from "next/image";
import styles from "../../page.module.css";
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
              <p className={styles.title}>Bonet Soho House</p>
              <div style={{borderBottom: '1px solid black', borderTopLeftRadius: "20px 50px",}} className={styles.page__section_paragraphcontainer}>
                <div>
                  <p className={styles.subtitle}>Hosted by Jugo
                    <span style={{color: '#e3384f '}}></span>
                  </p>
                </div>
              </div>
            </div>
            <div style={{borderBottom: '1px solid black'}} className={styles.page__section_container2}>
              <div className={styles.masonry__container}>
                <div className={styles.masonry__galery} style={{ maxWidth: '90vw', margin: 'auto'}}>
                  <div className={styles.image_container}>
                    <Image
                      className={styles.masonry__image}
                      src="/bonet-soho-house/sohohouse-bonet1.jpg"
                      alt="Bonet Soho House Registro"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.image_container}>
                    <Image
                      className={styles.masonry__image}
                      src="/bonet-soho-house/sohohouse-bonet2.jpg"
                      alt="Bonet Soho House Registro"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.image_container}>
                    <Image
                      className={styles.masonry__image}
                      src="/bonet-soho-house/sohohouse-bonet3.jpg"
                      alt="Bonet Soho House Registro"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.image_container}>
                    <Image
                      className={styles.masonry__image}
                      src="/bonet-soho-house/sohohouse-bonet4.jpg"
                      alt="Bonet Soho House Registro"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.image_container}>
                    <Image
                      className={styles.masonry__image}
                      src="/bonet-soho-house/sohohouse-bonet5.jpg"
                      alt="Bonet Soho House Registro"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.image_container}>
                    <Image
                      className={styles.masonry__image}
                      src="/bonet-soho-house/sohohouse-bonet6.jpg"
                      alt="Bonet Soho House Registro"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.image_container}>
                    <Image
                      className={styles.masonry__image}
                      src="/bonet-soho-house/sohohouse-bonet7.jpg"
                      alt="Bonet Soho House Registro"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.image_container}>
                    <Image
                      className={styles.masonry__image}
                      src="/bonet-soho-house/sohohouse-bonet8.jpg"
                      alt="Bonet Soho House Registro"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.image_container}>
                    <Image
                      className={styles.masonry__image}
                      src="/bonet-soho-house/sohohouse-bonet9.jpg"
                      alt="Bonet Soho House Registro"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.image_container}>
                    <Image
                      className={styles.masonry__image}
                      src="/bonet-soho-house/sohohouse-bonet10.jpg"
                      alt="Bonet Soho House Registro"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.image_container}>
                    <Image
                      className={styles.masonry__image}
                      src="/bonet-soho-house/sohohouse-bonet11.jpg"
                      alt="Bonet Soho House Registro"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.image_container}>
                    <Image
                      className={styles.masonry__image}
                      src="/bonet-soho-house/sohohouse-bonet12.jpg"
                      alt="Bonet Soho House Registro"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.image_container}>
                    <Image
                      className={styles.masonry__image}
                      src="/bonet-soho-house/sohohouse-bonet13.jpg"
                      alt="Bonet Soho House Registro"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.image_container}>
                    <Image
                      className={styles.masonry__image}
                      src="/bonet-soho-house/sohohouse-bonet14.jpg"
                      alt="Bonet Soho House Registro"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.image_container}>
                    <Image
                      className={styles.masonry__image}
                      src="/bonet-soho-house/sohohouse-bonet15.jpg"
                      alt="Bonet Soho House Registro"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.image_container}>
                    <Image
                      className={styles.masonry__image}
                      src="/bonet-soho-house/sohohouse-bonet16.jpg"
                      alt="Bonet Soho House Registro"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.image_container}>
                    <Image
                      className={styles.masonry__image}
                      src="/bonet-soho-house/sohohouse-bonet17.jpg"
                      alt="Bonet Soho House Registro"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.image_container}>
                    <Image
                      className={styles.masonry__image}
                      src="/bonet-soho-house/sohohouse-bonet18.jpg"
                      alt="Bonet Soho House Registro"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className={styles.image_container}>
                    <Image
                      className={styles.masonry__image}
                      src="/bonet-soho-house/sohohouse-bonet19.jpg"
                      alt="Bonet Soho House Registro"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          {/* <marquee className={styles.paragraph} style={{  color: 'white', background: '#e3384f', padding: '0.5rem', marginBottom: '5rem', fontSize: '119px'}} loop="0" scrollamount="15" Scrolldelay="175" >PAGINA EN CONSTRUCCIÓN    &#9829;  </marquee> */}
          </div>
        </motion.div>
        <Footer/>
      </main>
    );
  }
  