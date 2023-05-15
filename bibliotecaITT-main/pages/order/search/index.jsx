import { useRouter } from "next/router";
import { useState} from "react";
import styles from './search.module.css';
import Image from "next/image";
import Navbar from "../../../components/common/navbar/navbar";
import Preloader from "../../../components/common/preloader/preloader";
import Head from "next/head";


export default function Search() {

    const [idValue, setIdValue] = useState("");

    const router = useRouter();

    const handleRedirect = () => {
      router.push(`/order/search/${idValue}`);
    }

    const patternID = /^FS-[a-zA-Z0-9]{8}$/;

    const handleChangeID = (e) => {
      setIdValue(e.target.value);
    }


    const handleValidation = () => {
      if(idValue === "") {
        alert("Debes ingresar un ID");
        return;
      }
      else if(!patternID.test(idValue)) {
        alert("El ID no es válido (FS-xxxxxxxx)");
        setIdValue("");
        return;
      }
      else if(patternID.test(idValue)){
        handleRedirect();
      }
    }


    const handleSearchClick = (e) => {
      e.preventDefault();
      handleValidation();
    }


  return (
    <> 
      <Head>
        <title>Bliblioteca - Búsqueda</title>
        <meta name="author" content="brychxpin"/>
        <meta name="robots" content="index, follow"/>
        <meta name="googlebot" content="index, follow"/>
        <meta name="google" content="nositelinkssearchbox"/>
        <meta name="keywords" content="Vestimenta Uniformes Deportivos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='theme-color' content='#0F0F0F' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Navbar />
      <Preloader />
      <div className={styles.searchContainer}>
        <div className={styles.titleContainer}>
          <h1>Buscador de libros</h1>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/Logo.jpeg" alt="search" width={200} height={100} />
        </div>
        
        <input 
          placeholder="Ingresa un ID" 
          onChange={handleChangeID} 
          value={idValue} 
          type="text" 
          className={styles.inputSearcher}/>

        <button className={styles.btnSearcher} onClick={handleSearchClick}>Buscar</button>
      </div>
    </>
  );
}
