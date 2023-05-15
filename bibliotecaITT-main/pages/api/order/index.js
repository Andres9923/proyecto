import { dbConnect } from "../../../utils/dbConnection"
import Book from "../../../models/book";

dbConnect();

export default async function handler(req, res) {    
    
  const { method, body } = req;

  switch (method) {
    case 'POST':
      if (!body) {
        res.status(400).json({ success: false, error: error.message });
      }
      try {
        const order = await Book.create(body);
        order.save();
        res.status(201).json({ success: true, data: order });
        // return;
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'GET':
      try {
        const orders = await Book.find({});
        res.status(200).json({ success: true, data: orders });
        return;
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

      default:
        res.status(400).json({ success: false })
        break;
  }
}

