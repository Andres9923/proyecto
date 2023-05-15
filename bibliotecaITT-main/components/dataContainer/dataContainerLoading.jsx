import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { AiFillPrinter, AiFillEye, AiOutlinePhone, AiOutlineUser, AiOutlineMail} from "react-icons/ai";
import { BiBaseball } from "react-icons/bi";
import { BsCalendar2Date, BsFillTrashFill } from "react-icons/bs";
import styles from './dataContainer.module.css';


export default function DataContainerLoading() {
    return (
        <>
        <div className={styles.orderContainer}>
            <div className={styles.infoOrderContainer}>
            <div className={styles.textInfo}>
                <span>
                <AiOutlineUser />
                </span>
                <Skeleton width={100} />
            </div>
            <div className={styles.textInfo}>
                <span>
                <BiBaseball />
                </span>
                <Skeleton width={100} />
            </div>
            <div className={styles.textInfo}>
                <span>
                <AiOutlinePhone />
                </span>
                <Skeleton width={100} />
            </div>
            <div className={styles.textInfo}>
                <span>
                <AiOutlineMail />
                </span>
                <Skeleton width={100} />
            </div>
            <div className={styles.textInfo}>
                <span>
                <BsCalendar2Date />
                </span>
                <Skeleton width={100} />
            </div>
            </div>
            <div className={styles.controlsContainer}>
            <button
                className={styles.btnControl}>
                <AiFillPrinter className={styles.iconBtn} />
                <span>Imprimir</span>
            </button>
            <button
                className={styles.btnControl}
            >
                <AiFillEye className={styles.iconBtn} />
                <span>Revisar</span>
            </button>
            <button
                className={styles.btnControl}>
                <BsFillTrashFill className={styles.iconBtn} />
                <span>Eliminar</span>
            </button>
            </div>
        </div>
        <hr />
        </>
    )
}