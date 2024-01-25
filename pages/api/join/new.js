import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (req.body.account == "") {
      return res.status(500).json("ID can't be blank ;(");
    }
    if (req.body.password == "") {
      return res.status(500).json("Password can't be blank ;(");
    }
    try {
      const db = (await connectDB).db("forum");
      let result = await db.collection("member").insertOne(req.body);
      return res.status(200).redirect("/");
    } catch (e) {
      console.log(e);
      res.status(500).send("鯖の問題");
    }
  }
}
