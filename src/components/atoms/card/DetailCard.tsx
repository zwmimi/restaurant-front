import { ResponseRestaurant } from "../../../types/restaurant";

type Props = { restaurant: ResponseRestaurant };
export const DetailCard = (props: Props) => {
  const { restaurant } = props;
  return (
    <>
      <div className="w-11/12 md:max-w-md mx-auto shadow p-4 my-4 border rounded-lg bg-white">
        <div className="flex flex-col mb-4">
          <h1 className="font-bold text-yellow-500 text-center mb-4">
            {restaurant.name}
          </h1>
          <p className="font-light text-center mb-4">
            {restaurant.description}
          </p>
        </div>
        <div className="flex justify-center">
          <a href={restaurant.url} target="_blank">
            <button className="text-white py-2 px-4 mr-4 font-semibold bg-yellow-400 rounded">
              食べログ
            </button>
          </a>
          <button className="text-white py-2 px-4 mr-4 font-semibold bg-lime-400 rounded">
            編集
          </button>
          <button className="text-white py-2 px-4 font-semibold bg-red-400 rounded">
            削除
          </button>
        </div>
      </div>
    </>
  );
};
