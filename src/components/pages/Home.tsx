import { Link } from "react-router-dom";

const Home = () => {
  const topMenus = [
    { name: "店舗新規登録", link: "/create" },
    { name: "店舗一覧", link: "/restaurant" },
  ];

  return (
    <>
      {topMenus.map((menu) => (
        <div className="mb-4 mt-4" key={menu.link}>
          <div className="py-4">
            <div className="w-11/12 md:max-w-md mx-auto my-4 shadow-x1 border rounded-lg overflow-hidden bg-yellow-100">
              <Link to={menu.link}>
                <div className="p-4">
                  <div className="my-4 text-center text-xl text-gray-600 text-semibold">
                    {menu.name}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
