import styles from "./mainRequest.module.css";
import React from "react";
import { BsCalendar2Date, BsFillTrashFill } from "react-icons/bs";
import {FaGenderless} from "react-icons/fa";
import {ImPriceTag }  from "react-icons/im";
import { AiOutlineBook, AiOutlineKey, AiFillEye, AiOutlineUser} from "react-icons/ai";
import { useState } from "react";
import DataContainer from "../dataContainer/dataContainer";

export default function MainRequest({
  showDataContainer,
  handleFunction,
  dataContainer,
}) {

  const stateBanner = showDataContainer
    ? styles.requestContainer
    : styles.requestContainerOff;


  return (
    <div className={stateBanner}>
      <div onClick={handleFunction} className={styles.closeBtn}>
        X
      </div>
      <div className={styles.container}>
        <div className={styles.orderInfoClienContainer}>
          <div className={styles.orderInfoClient}>
          <div className={styles.textInfo}>
            <span>
              <AiOutlineBook />
            </span>
            {dataContainer.bookName}
          </div>
          <div className={styles.textInfo}>
            <span>
              <AiOutlineUser />
            </span>
            {dataContainer.author}
          </div>
          <div className={styles.textInfo}>
            <span>
              <ImPriceTag />
            </span>
            {dataContainer.priceBook}
          </div>
          <div className={styles.textInfo}>
            <span>
              <FaGenderless />
            </span>
            {dataContainer.genre}
          </div>
          <div className={styles.textInfo}>
            <span>
              <AiOutlineKey />
            </span>
            {dataContainer.id}
          </div>
          <div className={styles.textInfo}>
            <span>
              <BsCalendar2Date />
            </span>
            {dataContainer.agePublication}
          </div>
          </div>
          <div className={styles.optionsContainer}>
            <div className={styles.dataContainer}>
              <div className={styles.dataNameContainer}>
                <p>Libro</p>
                <div className={styles.dataFocusContainer}>
                  {/* {dataContainer.players &&
                  dataContainer.players.clothes &&
                  dataContainer.players.clothes.includes("Portero") ? (
                    <p>Si</p>
                  ) : (
                    <p>No</p>
                  )}{" "} */}
                  <p>Si</p>
                </div>
              </div>
            </div>
            <div className={styles.dataContainer}>
              <div className={styles.dataNameContainer}>
                <p>Disponible</p>
                <div className={styles.dataFocusContainer}>
                  {/* <p>{tallaMasRepetida}</p> */}
                </div>
              </div>
            </div>
            <div className={styles.dataContainer}>
              <div className={styles.dataNameContainer}>
                <p>TIEMPO</p>
                <div className={styles.dataFocusContainer}>
                  <p>00:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
