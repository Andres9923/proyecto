import styles from "./dataContainer.module.css";
import { BsCalendar2Date, BsFillTrashFill } from "react-icons/bs";
import {FaGenderless} from "react-icons/fa";
import {ImPriceTag }  from "react-icons/im";
import { AiOutlineBook, AiOutlineKey, AiFillEye, AiOutlineUser} from "react-icons/ai";

export default function DataContainer({ data, handleSetOrder, handleDeleteOrder }) {
  return (
    <>
      <div className={styles.orderContainer}>
        <div className={styles.infoOrderContainer}>
          <div className={styles.textInfo}>
            <span>
              <AiOutlineBook />
            </span>
            {data.bookName}
          </div>
          <div className={styles.textInfo}>
            <span>
              <AiOutlineUser />
            </span>
            {data.author}
          </div>
          <div className={styles.textInfo}>
            <span>
              <ImPriceTag />
            </span>
            {data.priceBook}
          </div>
          <div className={styles.textInfo}>
            <span>
              <FaGenderless />
            </span>
            {data.genre}
          </div>
          <div className={styles.textInfo}>
            <span>
              <AiOutlineKey />
            </span>
            {data.id}
          </div>
          <div className={styles.textInfo}>
            <span>
              <BsCalendar2Date />
            </span>
            {data.agePublication}
          </div>
        </div>
        <div className={styles.controlsContainer}>
          <button
            onClick={()=>{handleSetOrder(data.id)}}
            className={styles.btnControl}>
            <AiFillEye className={styles.iconBtn} />
            <span>Revisar</span>
          </button>
          <button 
            onClick={()=>{handleDeleteOrder(data.id)}} 
            className={styles.btnControl}>
            <BsFillTrashFill className={styles.iconBtn} />
            <span>Eliminar</span>
          </button>
        </div>
      </div>
    </>
  );
}
