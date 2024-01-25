import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (req.body.title == "") {
      return res.status(500).json("The title can't be blank ;(");
    }
    if (req.body.content == "") {
      return res.status(500).json("The content can't be blank ;(");
    }
    try {
      const db = (await connectDB).db("forum");
      let result = await db.collection("post").insertOne(req.body);
      return res.status(200).redirect("/list");
    } catch (e) {
      console.log(e);
      res.status(500).send("鯖の問題");
    }
  }
}
