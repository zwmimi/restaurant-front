import { Link } from "react-router-dom";

const Create = () => {
  const title = "新規作成";
  return (
    <>
      <h1>{title}</h1>
      <div>
        <Link to={`/`}>TOPへ戻る</Link>
      </div>
    </>
  );
};

export default Create;
