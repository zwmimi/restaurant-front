import { Link } from "react-router-dom";

const Restaurant = () => {
  const title = "店舗一覧";
  return (
    <>
      <h1>{title}</h1>
      <div>
        <Link to={`/`}>TOPへ戻る</Link>
      </div>
    </>
  );
};

export default Restaurant;
