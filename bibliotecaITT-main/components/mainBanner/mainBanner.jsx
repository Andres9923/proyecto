import styles from './mainBanner.module.css';
import { useState } from 'react';

export default function MainBanner({showBanner, handleFunction}) {
  
  const stateBanner = showBanner
    ? styles.bannerContainer
    : styles.bannerContainerOff;

  return (
    <div className={stateBanner}>
        <div className={styles.logoContainer}>
          <img src="Logo.jpeg" alt="Logo" />
        </div>
        <div className={styles.bannerText}>
          <h1>Biblioteca</h1>
        </div>
        <button
          onClick={handleFunction}
          className={styles.bannerButton}>Comenzar</button>
    </div>
  );
}
    
