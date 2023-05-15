import Navbar from "../../components/common/navbar/navbar";
import Head from "next/head";
import Preloader from "../../components/common/preloader/preloader";
import Form from '../../components/form/form';

function Contacto() {

  return (
    <>
      <Head>
        <title>Biblioteca - Agregar</title>
        <meta name="author" content="brychxpin"/>
        <meta name="robots" content="index, follow"/>
        <meta name="googlebot" content="index, follow"/>
        <meta name="google" content="nositelinkssearchbox"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='theme-color' content='#0F0F0F' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Preloader />
      <Navbar />
      <Form />
    </>

  );
}

export default Contacto;