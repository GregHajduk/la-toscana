import dbConnect from "../../../utilities/mongo";
import Wine from "../../../models/Wine";

export default async function handler(req, res) {
  const { method, cookies } = req;

  // const token = cookies.token;

  await dbConnect();

  if (method === "GET") {
    try {
      const wines = await Wine.find();
      res.status(201).json(wines);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    // if(!token || token !== process.env.token){
    //   return res.status(401).json("Not authenticated!")
    // }
    try {
      const wines = await Wine.create(req.body);
      res.status(201).json(wines);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}  