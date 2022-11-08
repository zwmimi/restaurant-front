import { useEffect, useState } from "react";
import { ResponseRestaurant } from "../../types/restaurant";
import { ToTopButton } from "../atoms/button/ToTopButton";
import { Table } from "../atoms/table/Table";

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState<ResponseRestaurant[]>([]);

  useEffect(() => {
    const fetchUserList = async () => {
      const results = await fetch("http://localhost:3000/restaurants").then(
        (res) => {
          return res.json();
        }
      );
      setRestaurants(results);
    };
    fetchUserList();
  }, []);

  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div className=" flex items-center justify-between pb-6">
        <h2 className="font-semibold">店舗一覧</h2>
      </div>
      <Table restaurants={restaurants} />
      <ToTopButton />
    </div>
  );
};

export default Restaurant;
