import { Link } from "react-router-dom";

const Home = () => {
  const title = "ホーム";
  return (
    <>
      <h1>{title}</h1>
      <div>
        <Link to={`/card/`}>新規登録</Link>
      </div>
    </>
  );
};

export default Home;
