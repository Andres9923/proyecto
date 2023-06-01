import styles from "./DtuWindow.module.css";
import Image from "next/image";
import {AiOutlineUser} from 'react-icons/ai'

export default function DtuWindow({ state, handleCloseFunction }) {
  const stateContainer = state ? styles.container : styles.containerOff;

  const team = [
    {
      name: "Jesus Andres Avendaño Montoya",
      id: "18210456"
    },
    {
      name: "Anahi del Carmen Hernandez Pablo",
      id: "18210486"
    },
  ]


  return (
    <section className={stateContainer}>
      <div onClick={handleCloseFunction} className={styles.closeBtn}>X</div>
      <section className={styles.InfoContainer}>
        <picture className={styles.imageContainer}>
          <Image src="/Logo.jpeg" alt="DTU" width={400} height={400} />
        </picture>
        <article className={styles.textContainer}>
          <h2>Mundo de palabras</h2>
          <p>
            La pagina web de la biblioteca mundo de palabras sera una 
            herramienta fundamental para mejorar la comunicacion y conocimientos
            sobre los libros que se encuentran en la biblioteca.
          </p>
        </article>
      </section>
      <article className={styles.teamContainer}>
        {team.map((member, index) => (
          <div key={index} className={styles.userTeam}>
            <AiOutlineUser fontSize={"3em"}/>
            <p>{member.name}</p>
            <p>{member.id}</p>
          </div>
        ))}
      </article>
    </section>
  );
}
