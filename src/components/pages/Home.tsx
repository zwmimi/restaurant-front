import { Link } from "react-router-dom";

const Home = () => {
  const title = "ホーム";
  return (
    <>
      <h1>{title}</h1>
      <div>
        <Link to={`/create`}>新規登録</Link>
      </div>
      <div>
        <Link to={`/card`}>カード一覧</Link>
      </div>
    </>
  );
};

export default Home;
