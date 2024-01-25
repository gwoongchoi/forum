export default function Member() {
  return (
    <div className="p-20">
      <form action="api/join/new" method="POST">
        <h4>新規会員の登録</h4>
        <input type="text" name="account" placeholder="ID" />
        <input type="password" name="password" placeholder="PW" />
        <button>確認</button>
      </form>
    </div>
  );
}
