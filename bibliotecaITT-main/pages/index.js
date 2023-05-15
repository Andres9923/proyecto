import React, { Suspense, use } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { ImExit } from "react-icons/im";
import { AiOutlinePlusSquare, AiOutlineSearch } from "react-icons/ai";
import styles from "../styles/admin.module.css";
import MainBanner from "../components/mainBanner/mainBanner";
import Preloader from "../components/common/preloader/preloader";
import MainRequest from "../components/mainRequest/mainRequest";
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
  const [showPrintList, setshowPrintList] = useState(false);
  const [showDataContainer, setShowDataContainer] = useState(false);
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

  const handleOrderEvent = (e) => {
    console.log(e.target.id);

    getOrderData(e.target.id);
    setShowDataContainer(!showDataContainer);
  };
  const handlePrintEvent = (e) => {
    console.log(e.target.id);
    getOrderData(e.target.id);
    setshowPrintList(!showPrintList);
  };

  const handleBtnEvent = () => {
    setShowBanner(!showBanner);
  };

  const handleShowData = () => {
    setShowDataContainer(!showDataContainer);
  };

  const handleModal = (e) => {
    setShowModal(!showModal);
    if (e.target.id === "") return;
    // console.log(e.target.id);
    setIdOrder(e.target.id);
    // console.log(idOrder);
  };

  // console.log(dataOrder);

  const dataReversed = [...dataOrders].reverse();

  return (
    <>
      <Preloader />
      <MainBanner showBanner={showBanner} handleFunction={handleBtnEvent} />
      <MainModalDelete
        showModal={showModal}
        handleCloseFunction={handleModal}
        id={idOrder}
      />

      <main className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.row}>
            {React.Children.toArray(
              dataReversed.map((item) => {
                return (
                  <DataContainer
                    data={item}
                    handleShowData={handleOrderEvent}
                    handleModal={handleModal}
                  />
                );
              })
            )}
          </div>
        </div>

        <div className={styles.navbarContainer}>
          <div onClick={handleBtnEvent} className={styles.navLink}>
            <ImExit className={styles.icon} />
          </div>
          <div onClick={() =>{router.push("/order")}} className={styles.navLink}>
            <AiOutlinePlusSquare className={styles.icon} />
          </div>
          {/* <div onClick={() =>{router.push("/order/search")}} className={styles.navLink}>
            <AiOutlineSearch className={styles.icon} />
          </div> */}
        </div>
      </main>

      <MainRequest
        showDataContainer={showDataContainer}
        handleFunction={handleShowData}
        dataContainer={dataOrder}
      />
    </>
  );
}
