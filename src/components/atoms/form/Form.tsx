import { Link } from "react-router-dom";

export const Form = () => {
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
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="mb-3 block text-base font-medium">
            食べログURL
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="https://tabelog.com/"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="subject" className="mb-3 block text-base font-medium">
            メモ
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="店の雰囲気など"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none"
          />
        </div>
        <div>
          <button className="bg-yellow-400 py-2 px-4 mr-4 font-semibold text-white outline-none rounded">
            登録
          </button>
          <Link to={`/`}>
            <button className="bg-transparent text-yellow-400 py-2 px-4 font-semibold border border-yellow-400 rounded">
              キャンセル
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};