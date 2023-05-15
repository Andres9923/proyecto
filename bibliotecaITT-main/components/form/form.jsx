import React, { useState, useEffect, useRef } from "react";
import styles from "./form.module.css";
import { useRouter } from "next/router";
import { dateByFormat, IDuserForm, sendData } from "./controller";

export default function Form() {
  const router = useRouter();
  const dateOrder = useRef(null);
  const IDForm = useRef(null);

  const [dataSendend, setDataSendend] = useState(false);

  const [clientsInfo, setClientsInfo] = useState({
    id: "",
    bookName: "",
    genre: "",
    agePublication: "",
    author: "",
    priceBook: "",
    date: "",
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (dataSendend) {
      // console.log(clientsInfo);
      if (sendData(clientsInfo)) {
        // sendEmail(clientMessageInfo);
      }
      handleShowModal();
      // sendWhatsapp(clientMessageWhatsapp);
    }
  }, [dataSendend]);

  // HANDLE FUNCTIONS

  const handleUpdateClientInfo = () => {
    setClientsInfo({
      ...clientsInfo,
      date: dateOrder.current,
      id: IDForm.current,
    });
    setDataSendend(true);
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleSetDataClient = (e) => {
    setClientsInfo({ ...clientsInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    IDForm.current = IDuserForm();
    dateOrder.current = dateByFormat();
    handleUpdateClientInfo();
    router.push("/");
  };

  return (
    <>
      <div className={styles.formMainContainer}>
        {/* FIRTS FORM */}
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Agregar Libro</h1>

          <form id="formData" onSubmit={handleSubmit}>
            <input
              value={clientsInfo.name}
              onChange={handleSetDataClient}
              required
              placeholder="Nombre del libro"
              name="bookName"
              type="text"
            />

            <input
              required
              value={clientsInfo.teamName}
              onChange={handleSetDataClient}
              placeholder="Género"
              name="genre"
              type="text"
            />

            <input
              required
              value={clientsInfo.email}
              onChange={handleSetDataClient}
              placeholder="Año de publicación"
              name="agePublication"
              type="text"
            />

            <input
              required
              value={clientsInfo.category}
              onChange={handleSetDataClient}
              placeholder="Autor"
              name="author"
              type="text"
            />

            <input
              required
              value={clientsInfo.phone}
              onChange={handleSetDataClient}
              placeholder="Costo de renta"
              name="priceBook"
              type="text"
            />
            <input
              className={styles.submitBtn}
              value="Completar registro"
              form="formData"
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
}
