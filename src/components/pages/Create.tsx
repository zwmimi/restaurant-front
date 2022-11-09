import { ToTopButton } from "../atoms/button/ToTopButton";
import { RestaurantForm } from "../atoms/form/RestaurantForm";

const Create = () => {
  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div className="flex items-center justify-between pb-6">
        <h2 className="font-semibold">店舗新規登録</h2>
      </div>
      <RestaurantForm />
      <div className="flex justify-center">
        <ToTopButton />
      </div>
    </div>
  );
};

export default Create;
