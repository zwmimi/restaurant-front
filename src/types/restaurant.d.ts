export type Restaurant = {
  name: string;
  url: string;
  description: string;
};

export type ResponseRestaurant = Restaurant & { id: string };
