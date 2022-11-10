import { ResponseRestaurant, Restaurant } from "../types/restaurant";

// showAll
export const fetchAllRestaurant = async (): Promise<ResponseRestaurant[]> => {
  return await fetch("http://localhost:3000/restaurants")
    .then((res) => res.json())
    .then((data) => data);
};

// showById
export const fetchRestaurantById = async (id: string) => {
  return await fetch(`http://localhost:3000/restaurants/${id}`)
    .then((res) => res.json())
    .then((data) => data);
};

// create
export const postRestaurant = async (formItem: Restaurant): Promise<void> => {
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

// update
export const updateRestaurant = async (
  formItem: ResponseRestaurant
): Promise<void> => {
  await fetch("http://localhost:3000/restaurants", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formItem),
  }).then((res) => {
    res.ok ? alert("更新しました") : alert(`HTTP-Error : ${res.status}`);
  });
};

// delete
export const deleteRestaurant = async (id: string): Promise<void> => {
  await fetch(`http://localhost:3000/restaurants/${id}`, {
    method: "DELETE",
  }).then((res) => {
    res.ok ? alert("削除しました") : alert(`HTTP-Error : ${res.status}`);
  });
};
