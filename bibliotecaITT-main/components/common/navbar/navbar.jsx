import React from "react";
import styles from './navbar.module.css';
import { useEffect, useState } from "react";
import Link from 'next/link';
import Image from "next/image";

function Navbar(){
  const [showNav, setShowNav] = useState(true);
  const [navOpen, setNavOpen] = useState(true);

  const controlNav = (event) => { 
    checkScrollDirectionIsUp(event) ? setShowNav(true) : setShowNav(false);
  }

  const checkScrollDirectionIsUp = (event) => {
    if (event.wheelDelta)
      return event.wheelDelta > 0;
    return event.deltaY < 0;
  }

  const toggleable = () => {
    setNavOpen(!navOpen);
  }

  useEffect(() => {
    const scrollableElement = document.body; 
    scrollableElement.addEventListener('wheel', controlNav);

    window.innerWidth < 900 ? setNavOpen(false) : setNavOpen(true);

    window.addEventListener('resize', () => {
      window.innerWidth > 900 ? setNavOpen(true) : setNavOpen(false);
    });

  }, []);
  
  
  const navLinks = [
	{id:"Inicio",title: "Inicio", path: "/"},
	// {id:"Búsqueda",title: "Búsqueda", path: "/order/search"},
	{id:"Agregar",title: "Agregar", path: "/order"},
  ];
  return (
      <>
        <div className={!showNav ? styles.navBarContainerOff : styles.navBarContainer}>
          <div className={styles.logoContainer}>
            <Link href='/'>
              <Image src="/Logo.jpeg" alt="Logo Biblioteca" width={90} height={30} />
            </Link>
          </div> 
          <div className={navOpen ? styles.navContainer : styles.navContainerOff}>
            {navLinks.map(({id ,title, path }) => (
              <div key={id}  className={styles.navLink}>
                <Link legacyBehavior={true} href={path}>
                  {title}
                </Link>
              </div>
            ))}
          </div>
          <div id="navIcon" className={styles.navIcon}>
            <input type="checkbox" id="checkbox3" className={`${styles.checkbox3} ${styles.visuallyHidden}`}></input>
            <label htmlFor="checkbox3">
                <div onClick={toggleable} className={`${styles.hamburger} ${styles.hamburger3}`}>
                  <span className={`${styles.bar} ${styles.bar1}`}></span>
                  <span className={`${styles.bar} ${styles.bar2}`}></span>
                  <span className={`${styles.bar} ${styles.bar3}`}></span>
                  <span className={`${styles.bar} ${styles.bar4}`}></span>
                </div>
            </label>
          </div>
        </div>
      </>
  );
}

export default Navbar;