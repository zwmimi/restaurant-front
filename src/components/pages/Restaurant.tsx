import { useEffect, useState } from "react";
import { ResponseRestaurant } from "../../types/restaurant";
import { ToTopButton } from "../atoms/button/ToTopButton";
import { Table } from "../atoms/table/Table";
import { fetchAllRestaurant } from "../../api/restaurant";

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState<ResponseRestaurant[]>([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const results = await fetchAllRestaurant();
      setRestaurants(results);
    };
    fetchRestaurants();
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
