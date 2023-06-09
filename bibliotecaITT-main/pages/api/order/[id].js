import { dbConnect } from "../../../utils/dbConnection";
import Book from "../../../models/book";
import NextCors from "nextjs-cors";

//Connect to database
dbConnect();

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "DELETE", "POST", "OPTIONS", "PUT"],
    origin: ["https://biblioteca-itt.vercel.app","localhost:3000"],
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
        const book = await Book.findOne({ id: id });
        if (!book) {
          res
            .status(400)
            .json({ success: false, error: "Book not found 400 status" });
        }
        res.status(200).json({ success: true, data: book });
        return;
      } catch (error) {
        res
          .status(400)
          .json({ success: false, error: "Book not found defecto" });
      }
      break;

    case "DELETE":
      if (!id) {
        res
          .status(400)
          .json({ success: false, error: "Need to introduce an id" });
      }
      try {
        const deleteBook = await Book.findOneAndDelete({ id: id });
        if (!deleteBook) {
          res.status(400).json({ success: false, error: "Book not found" });
        }
        res.status(200).json({ success: true, data: deleteBook });
        return;
      } catch (error) {
        res.status(400).json({ success: false, error: "Book not found" });
      }
      break;

    default:
      res.status(400).json({ success: false, error: "Invalid method" });
      break;
  }
}
