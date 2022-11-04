import { Link } from "react-router-dom";

const Card = () => {
  const title = "カード";
  return (
    <>
      <h1>{title}</h1>
      <div>
        <Link to={`/`}>TOPへ戻る</Link>
      </div>
    </>
  );
};

export default Card;
