import React, { Suspense, use } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { ImExit } from "react-icons/im";
import { AiOutlinePlusSquare, AiOutlineTeam } from "react-icons/ai";
import {FaSearch} from "react-icons/fa";

import styles from "../styles/admin.module.css";
import Preloader from "../components/common/preloader/preloader";

import MainBanner from "../components/mainBanner/mainBanner";
import MainRequest from "../components/mainRequest/mainRequest";
import DtuWindow from "@/components/DtuWindow/DtuWindow";

import MainModalDelete from "../components/mainModalDelete/mainModal";
import DataContainerLoading from "../components/dataContainer/dataContainerLoading";

const DataContainer = dynamic(
  () => import("../components/dataContainer/dataContainer"),
  {
    ssr: true,
    loading: () => <DataContainerLoading />,
  }
);

export async function getServerSideProps() {
  const res = await fetch("https://biblioteca-itt.vercel.app/api/order");
  const data = await res.json();
  return {
    props: {
      data: { data },
    },
  };
}

export default function Home(data) {
  const [showBanner, setShowBanner] = useState(true);
  const [showDataContainer, setShowDataContainer] = useState(false);
  const [showDtuWindow, setShowDtuWindow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [idOrder, setIdOrder] = useState("");

  const router = useRouter();

  const dataOrders = data.data.data.data;

  const [dataOrder, setDataOrder] = useState({
    id: "",
    bookName: "",
    genre: "",
    agePublication: "",
    author: "",
    priceBook: "",
  });

  const getOrderData = (id) => {
    const orderData = dataOrders.filter((item) => item.id === id);
    if (orderData.length === 0) {
      return;
    }
    setDataOrder({
      id: orderData[0].id,
      bookName: orderData[0].bookName,
      genre: orderData[0].genre,
      agePublication: orderData[0].agePublication,
      author: orderData[0].author,
      priceBook: orderData[0].priceBook,
    });
  };

  const handleSetOrder = (id) => {
    getOrderData(id);
    setShowDataContainer(!showDataContainer);
  };

  const handleDeleteOrder = (id) => {
    if (id === "") return;
    setIdOrder(id);
    setShowModal(!showModal);
  };


  const dataReversed = [...dataOrders].reverse();

  return (
    <>
      <Preloader />

      <MainBanner
        showBanner={showBanner}
        handleFunction={() => { setShowBanner(!showBanner);}}
      />

      <main className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.row}>
            {React.Children.toArray(
              dataReversed.map((item) => {
                return (
                  <DataContainer
                    data={item}
                    handleSetOrder={handleSetOrder}
                    handleDeleteOrder={handleDeleteOrder}
                  />
                );
              })
            )}
          </div>
        </div>

        <div className={styles.navbarContainer}>
          <div onClick={() => { setShowBanner(!showBanner); }} className={styles.navLink} >
            <ImExit className={styles.icon} />
          </div>
          <div onClick={() => { router.push("/order") }} className={styles.navLink} >
            <AiOutlinePlusSquare className={styles.icon} />
          </div>
          <div onClick={() => { setShowDtuWindow(!showDtuWindow); }} className={styles.navLink}>
            <AiOutlineTeam className={styles.icon} />
          </div>
          <div onClick={() => { router.push("/order/search") }} className={styles.navLink}>
            <FaSearch className={styles.icon} />
          </div>
        </div>
      </main>

      <MainModalDelete
        showModal={showModal}
        handleCloseFunction={() => { setShowModal(!showModal);}}
        id={idOrder}
      />

      <MainRequest
        showDataContainer={showDataContainer}
        handleFunction={() => { setShowDataContainer(!showDataContainer);}}
        dataContainer={dataOrder}
      />

      <DtuWindow 
        handleCloseFunction={() => { setShowDtuWindow(!showDtuWindow);}}
        state={showDtuWindow}
      />
    </>
  );
}
