import { Restaurant } from "../types/restaurant";

export const postRestaurant = async (formItem: Restaurant) => {
  await fetch("http://localhost:3000/restaurants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formItem),
  }).then((res) => {
    res.ok ? alert("登録完了") : alert(`HTTP-Error : ${res.status}`);
  });
};
