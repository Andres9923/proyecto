import axios from "axios";


// Path: components/mainModalDelete.js
export const deleteOrder = async () => {
  try {
    await axios.delete(`/api/order/${id}`);
    // await axios.delete(`http://localhost:3000/api/order/${id}`);
  } catch (error) {
    console.error(error);
  }
};
