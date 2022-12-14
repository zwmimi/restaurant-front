import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ResponseRestaurant } from "../../types/restaurant";
import { DetailCard } from "../atoms/card/DetailCard";
import { ToTopButton } from "../atoms/button/ToTopButton";
import { RestaurantEditForm } from "../atoms/form/RestaurantEditForm";
import { fetchRestaurantById } from "../../api/restaurant";

export const Detail = () => {
  const [restaurant, setRestaurant] = useState<
    ResponseRestaurant | undefined
  >();
  const [isShowEditForm, setIsShowEditForm] = useState<boolean>(false);
  const clickEditButton = () => {
    setIsShowEditForm(!isShowEditForm);
  };
  const { id } = useParams();

  useEffect(() => {
    const fetchRestaurant = async () => {
      const result = await fetchRestaurantById(id as string);
      setRestaurant(result);
    };
    fetchRestaurant();
  }, []);
  return restaurant ? (
    <>
      <DetailCard
        restaurant={restaurant}
        isShowEditForm={isShowEditForm}
        clickEditButton={clickEditButton}
      />
      {isShowEditForm && (
        <RestaurantEditForm
          restaurant={restaurant}
          setRestaurant={setRestaurant}
        />
      )}
      <ToTopButton />
    </>
  ) : null;
};
