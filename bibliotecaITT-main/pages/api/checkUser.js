import { dbConnect } from "../../utils/dbConnection";
import User from "../../models/user";

dbConnect();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Método no permitido" });
    return;
  }

  const { userName } = req.body;

  try {
    const existingUser = await User.findOne({ userName });
    if (existingUser) {
      res.status(200).json({ exists: true });
    } else {
      res.status(200).json({ exists: false });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al verificar el usuario" });
  }
}
