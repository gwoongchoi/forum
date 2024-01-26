import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className="p-20">
      <h4>編集</h4>
      <form action="/api/post/edit" method="POST">
        <input
          name="title"
          placeholder="タイトル"
          defaultValue={result.title}
        />
        <input
          name="content"
          placeholder="内容"
          defaultValue={result.content}
        />
        <input
          style={{
            display: "none",
          }}
          name="_id"
          defaultValue={result._id.toString()}
        />
        <button type="submit">編集する</button>
      </form>
    </div>
  );
}
