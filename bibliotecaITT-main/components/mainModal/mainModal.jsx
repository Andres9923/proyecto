import styles from "./mainModal.module.css";
import {
  AiFillCloseCircle,
  AiFillInfoCircle,
  AiOutlineSend,
} from "react-icons/ai";
import { useRouter } from "next/router";

export default function MainModal({ showModal, handleCloseFunction, title, idMessage, }) {
  const stateContainer = showModal ? styles.container : styles.containerOff;

  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/order/search/`);
  };


  const handleShowModal = () => {
    handleCloseFunction();
    router.push(`/`);
  };

  return (
    <>
      <div className={stateContainer}>
        <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <h2>{title}</h2>
            <AiFillInfoCircle className={styles.iconInfo} />
            <p>Tu Folio de pedido es</p>
            <p style={{background:"black",width:"auto", padding:"1em",borderRadius:"10px",margin:"0.5em"}} >{idMessage}</p>
            <p>
              y puedes tener seguimiento de el en Fistorsport.com/order/search
            </p>
          </div>
          <div className={styles.buttonsContainer}>
            <button onClick={handleShowModal} className={styles.btnControl}>
              <AiFillCloseCircle className={styles.iconBtn} />
              Close
            </button>
            <button className={styles.btnControl} onClick={handleRedirect}>
              <AiOutlineSend className={styles.iconBtn} />
              Ir
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
