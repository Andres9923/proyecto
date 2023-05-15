import styles from "./mainModal.module.css";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillCloseCircle, AiFillInfoCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

export default function MainModal({ showModal, handleCloseFunction, id }) {


  const router = useRouter();
  const [idOrder, setIdOrder] = useState(id);
  const stateContainer = showModal ? styles.container : styles.containerOff;


  const handleDeleteError = () => {
    alert("Error al eliminar el pedido");
    setIdOrder("");
    handleCloseFunction();
  };

  const handleDeleteSuccess = () => {
    alert("Pedido eliminado con éxito");
    setIdOrder("");
    router.reload();
    handleCloseFunction();
  };

  const deleteOrder = async () => {
    try {
      let res = await axios.delete(`https://www.fistorsport.com/api/order/${id}`);
      // let res = await axios.delete(`http://localhost:3000/api/order/${id}`);
      res ? handleDeleteSuccess() : handleDeleteError();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={stateContainer}>
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <h2>¿Desea eliminar este pedido?</h2>
          <AiFillInfoCircle className={styles.iconInfo} />
          <span>{id}</span>
        </div>
        <div className={styles.buttonsContainer}>
          <button onClick={handleCloseFunction} className={styles.btnControl}>
            <AiFillCloseCircle className={styles.iconBtn} />
            Close
          </button>
          <button onClick={deleteOrder} className={styles.btnControl}>
            <BsFillTrashFill className={styles.iconBtn} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}


  
