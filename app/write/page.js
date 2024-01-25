export default async function Write() {
  return (
    <div className="p-20">
      <h4>投稿</h4>
      <form action="/api/join/new" method="POST">
        <input name="title" placeholder="タイトル" />
        <input name="content" placeholder="内容" />
        <button type="submit">投稿する</button>
      </form>
    </div>
  );
}
