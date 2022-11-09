import { Restaurant } from "../types/restaurant";
import { RestaurantErrorMsg } from "../types/valdation";

export const restaurantFormValidate = (
  restaurant: Restaurant
): RestaurantErrorMsg => {
  let errorMessage: RestaurantErrorMsg = { name: [], url: [], description: [] };
  // 空文字チェック
  restaurant.name === "" && errorMessage.name.push("※入力してください");
  restaurant.url === "" && errorMessage.url.push("※入力してください");
  restaurant.description === "" &&
    errorMessage.description.push("※入力してください");

  // 文字列制限
  restaurant.name.length > 50 &&
    errorMessage.name.push("※50文字以下にしてください");
  restaurant.url.length > 52 &&
    errorMessage.url.push("※52文字以下にしてください");
  restaurant.description.length > 100 &&
    errorMessage.description.push("※100文字以下にしてください");

  // urlチェック
  // 例 https://tabelog.com/tokyo/A1234/A123456/1234567/
  const pattern =
    /^https?:\/\/tabelog.com\/\w{3,9}\/A\d{4}\/A\d{6}\/\d{7,8}\/$/;
  pattern.test(restaurant.url) ||
    errorMessage.url.push("正しいURLを入力してください");

  return errorMessage;
};
