import { Link } from "react-router-dom";

export const ToTopButton = () => {
  return (
    <div className="flex justify-center">
      <Link to={`/`}>
        <button className="text-yellow-400 py-2 px-4 font-semibold border border-yellow-400 rounded">
          TOPへ戻る
        </button>
      </Link>
    </div>
  );
};
