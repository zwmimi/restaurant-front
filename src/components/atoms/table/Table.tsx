import { User } from "../../../types/user";

type Props = { restaurants: User[] };
export const Table = (props: Props) => {
  const { restaurants } = props;
  const TableHeaders = ["店舗名", "食べログURL", "メモ"];

  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              {TableHeaders.map((tebleHeader) => (
                <th
                  key={tebleHeader}
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  {tebleHeader}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {restaurants.map((restaurant) => (
              <tr key={restaurant.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {restaurant.name}
                    </p>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {restaurant.website}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {restaurant.phone}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
