// import { dbConnect } from "../../../utils/dbConnection";
// import User from "../../../models/user";

// dbConnect();

// export default async function handler(req, res) {
//   const { method, body } = req;

//   switch (method) {
//     case "POST":
//       if (!body) {
//         res.status(400).json({ success: false, error: error.message });
//       }
//       try {
//         const user = await User.create(body);
//         user.save();
//         res.status(201).json({ success: true, data: user });
//         // return;
//       } catch (error) {
//         res.status(400).json({ success: false, error: error.message });
//       }
//       break;

//     case "GET":
//       try {
//         const users = await User.find({});
//         res.status(200).json({ success: true, data: users });
//         return;
//       }
//       catch (error) {
//         res.status(400).json({ success: false, error: error.message });
//       }
//       break;

//     default:
//       res.status(400).json({ success: false });
//       break;
//   }
// }


import { dbConnect } from "../../../utils/dbConnection";
import User from "../../../models/user";

dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case "POST":
      if (!body) {
        res.status(400).json({ success: false, error: "No se proporcionó ningún cuerpo de solicitud." });
        return;
      }
      try {
        const existingUser = await User.findOne({ userName: body.userName });
        if (existingUser) {
          res.status(400).json({ success: false, error: "El usuario ya existe." });
          return;
        }
        
        const newUser = new User(body);
        await newUser.save();
        
        res.status(201).json({ success: true, data: newUser });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case "GET":
      try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
