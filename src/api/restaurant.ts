import { Restaurant } from "../types/restaurant";

// create
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

// delete
export const deleteRestaurant = async (id: string) => {
  await fetch(`http://localhost:3000/restaurants/${id}`, {
    method: "DELETE",
  }).then((res) => {
    res.ok ? alert("削除しました") : alert(`HTTP-Error : ${res.status}`);
  });
};
