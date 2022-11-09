import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ResponseRestaurant } from "../../types/restaurant";
import { DetailCard } from "../atoms/card/DetailCard";
import { ToTopButton } from "../atoms/button/ToTopButton";

export const Detail = () => {
  const [restaurant, setRestaurant] = useState<
    ResponseRestaurant | undefined
  >();
  const { id } = useParams();

  useEffect(() => {
    const fetchRestaurant = async () => {
      const result = await fetch(
        `http://localhost:3000/restaurants/${id}`
      ).then((res) => {
        return res.json();
      });
      setRestaurant(result);
    };
    fetchRestaurant();
  }, []);
  return restaurant ? (
    <>
      <DetailCard restaurant={restaurant} />
      <ToTopButton />
    </>
  ) : null;
};
