import dbConnect from "../../../utilities/mongo";
import Wine from "../../../models/Wine";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const wine = await Wine.findById(id);
      res.status(201).json(wine);
      console.log(wine)
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    try {
      const wine = await Wine.create(req.body);
      res.status(201).json(wine);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
