import { useState } from "react";
import { Restaurant } from "../../../types/restaurant";

export const Form = () => {
  const initialFormItem = {
    name: "",
    url: "",
    description: "",
  };
  const [formItem, setFormItem] = useState<Restaurant>(initialFormItem);
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
  const clearFormItem = () => setFormItem(initialFormItem);
  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <div className="mb-5">
          <label htmlFor="name" className="mb-3 block text-base font-medium">
            店舗名
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formItem.name}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none"
            onChange={(e) => setNewFormItem("name", e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="mb-3 block text-base font-medium">
            食べログURL
          </label>
          <input
            type="text"
            name="url"
            id="url"
            value={formItem.url}
            placeholder="https://tabelog.com/"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none"
            onChange={(e) => setNewFormItem("url", e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="subject" className="mb-3 block text-base font-medium">
            メモ
          </label>
          <input
            type="text"
            name="description"
            id="description"
            value={formItem.description}
            placeholder="店の雰囲気など"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none"
            onChange={(e) => setNewFormItem("description", e.target.value)}
          />
        </div>
        <div>
          <button className="bg-lime-400 py-2 px-4 mr-4 font-semibold text-white outline-none rounded">
            登録
          </button>
          <button
            onClick={() => clearFormItem()}
            className="bg-transparent text-lime-400 py-2 px-4 font-semibold border border-lime-400 rounded"
          >
            クリア
          </button>
        </div>
      </div>
    </div>
  );
};
