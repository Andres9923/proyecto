import React from "react";
import styles from './preloader.module.css'
import Image from 'next/image'
import { useEffect} from "react";

export default function Preloader() {
    
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    window.onload ? 
      preloader.classList.remove(styles.preloaderHide) : 
        preloader.classList.add(styles.preloaderHide);

    setTimeout(() => {
      preloader.style.display = "none";
    }, 3000);


  }, []);
    return (
      <>
        <section id="preloader" className={styles.preloaderContainer}>
          <div  className={styles.logoContainer}>
            <Image priority src="/Logo.jpeg" alt="logo" width={100} height={100} />
          </div>
          <div className={styles.lds_roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>        
        </section>
      </>
    );

  }
