import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../../types/user";
import { Table } from "../atoms/table/Table";

const Restaurant = () => {
  const [state, setState] = useState<User[]>([]);
  useEffect(() => {
    const fetchUserList = async () => {
      const result = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((res) => {
        return res.json();
      });
      setState(result);
    };
    fetchUserList();
  }, []);

  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div className=" flex items-center justify-between pb-6">
        <h2 className="font-semibold">店舗一覧</h2>
      </div>
      <Table restaurants={state} />
      <div>
        <Link to={`/`}>TOPへ戻る</Link>
      </div>
    </div>
  );
};

export default Restaurant;
