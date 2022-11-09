import { Restaurant } from "../types/restaurant";
import { RestaurantErrorMsg } from "../types/valdation";

export const restaurantFormValidate = (
  restaurant: Restaurant
): RestaurantErrorMsg => {
  let errorMessage: RestaurantErrorMsg = { name: [], url: [], description: [] };
  restaurant.name === "" && errorMessage.name.push("※入力してください");
  restaurant.url === "" && errorMessage.url.push("※入力してください");
  restaurant.description === "" &&
    errorMessage.description.push("※入力してください");

  restaurant.name.length > 50 &&
    errorMessage.name.push("※50文字以下にしてください");
  restaurant.url.length > 52 &&
    errorMessage.url.push("※52文字以下にしてください");
  restaurant.description.length > 100 &&
    errorMessage.description.push("※100文字以下にしてください");

  const pattern = /^https?:\/\/tabelog.com\/[\w/:%#\$&\?\(\)~\.=\+\-]+$/;
  pattern.test(restaurant.url) ||
    errorMessage.url.push("正しいURLを入力してください");

  return errorMessage;
};
