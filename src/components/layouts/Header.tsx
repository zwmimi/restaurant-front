import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const Header = (p: Props) => {
  return (
    <>
      <div className="h-12 bg-yellow-400 text-white pl-4 pt-2">
        Restaurant-Picker
      </div>
      {p.children}
    </>
  );
};

export default Header;
