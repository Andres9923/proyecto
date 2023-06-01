import { dbConnect } from "../../../utils/dbConnection";
import User from "../../../models/user";
import NextCors from "nextjs-cors";

dbConnect();

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "DELETE", "POST", "OPTIONS", "PUT"],
    origin: ["https://biblioteca-itt.vercel.app"],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      if (!id) {
        res
          .status(400)
          .json({ success: false, error: "Need to introduce an id" });
      }
      try {
        const user = await User.findOne({ id: id });
        if (!user) {
          res
            .status(400)
            .json({ success: false, error: "User not found 400 status" });
        }
        res.status(200).json({ success: true, data: user });
        return;
      } catch (error) {
        res
          .status(400)
          .json({ success: false, error: "User not found defecto" });
      }
      break;
  }
}
