import { useState, useEffect } from "react";
import { updateRestaurant } from "../../../api/restaurant";
import { ResponseRestaurant, Restaurant } from "../../../types/restaurant";
import { RestaurantErrorMsg } from "../../../types/valdation";
import { restaurantFormValidate } from "../../../validation/validation";

type Props = {
  restaurant: ResponseRestaurant;
  setRestaurant: (restaurant: ResponseRestaurant) => void;
};

export const RestaurantEditForm = (props: Props) => {
  const { restaurant, setRestaurant } = props;

  const initialFormItem = {
    id: "",
    name: "",
    url: "",
    description: "",
  };
  const initialRestaurantErrorMsg: RestaurantErrorMsg = {
    name: [],
    url: [],
    description: [],
  };
  const [formItem, setFormItem] = useState<ResponseRestaurant>(initialFormItem);
  const [formErrorMsg, setFormErrorMsg] = useState<RestaurantErrorMsg>(
    initialRestaurantErrorMsg
  );

  useEffect(() => {
    setFormItem(restaurant);
  }, []);

  const setNewFormItem = (key: keyof Restaurant, val: string) => {
    const newFormItem = () => {
      switch (key) {
        case "name":
          return { ...formItem, name: val };
        case "url":
          return { ...formItem, url: val };
        case "description":
          return { ...formItem, description: val };
        default:
          return { ...formItem };
      }
    };
    setFormItem(newFormItem);
  };
  const resetFormItem = () => setFormItem(restaurant);

  const updateFormItem = async (): Promise<void> => {
    // バリデーション
    const errorMsg = restaurantFormValidate(formItem);
    setFormErrorMsg(errorMsg);
    // POST可能か判定
    if (Object.values(errorMsg).every((msg) => msg.length === 0)) {
      await updateRestaurant(formItem);
      // DetailCardの更新
      setRestaurant(formItem);
    }
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="w-full max-w-[550px]">
        <div className="mb-5">
          <label htmlFor="name" className="mb-3 block text-base font-medium">
            店舗名
            {formErrorMsg.name.length > 0 && (
              <>
                {formErrorMsg.name.map((msg) => (
                  <span key={msg} className="text-red-500 text-sm ml-4">
                    {msg}
                  </span>
                ))}
              </>
            )}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formItem.name}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none"
            onChange={(e) => setNewFormItem("name", e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="mb-3 block text-base font-medium">
            食べログURL
            {formErrorMsg.url.length > 0 && (
              <>
                {formErrorMsg.url.map((msg) => (
                  <span key={msg} className="text-red-500 text-sm ml-4">
                    {msg}
                  </span>
                ))}
              </>
            )}
          </label>
          <input
            type="text"
            name="url"
            id="url"
            value={formItem.url}
            placeholder="https://tabelog.com/"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none"
            onChange={(e) => setNewFormItem("url", e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="subject" className="mb-3 block text-base font-medium">
            メモ
            {formErrorMsg.description.length > 0 && (
              <>
                {formErrorMsg.description.map((msg) => (
                  <span key={msg} className="text-red-500 text-sm ml-4">
                    {msg}
                  </span>
                ))}
              </>
            )}
          </label>
          <input
            type="text"
            name="description"
            id="description"
            value={formItem.description}
            placeholder="店の雰囲気など"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none"
            onChange={(e) => setNewFormItem("description", e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={() => updateFormItem()}
            className="bg-lime-400 py-2 px-4 mr-4 font-semibold text-white outline-none rounded"
          >
            登録
          </button>
          <button
            onClick={() => resetFormItem()}
            className="bg-transparent text-lime-400 py-2 px-4 font-semibold border border-lime-400 rounded"
          >
            リセット
          </button>
        </div>
      </div>
    </div>
  );
};
