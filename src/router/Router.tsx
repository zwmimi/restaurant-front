import { memo, FC } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/layouts/Header";
import Restaurant from "../components/pages/Restaurant";
import Create from "../components/pages/Create";
import Home from "../components/pages/Home";
import { Detail } from "../components/pages/Detail";

export const Router: FC = memo(() => {
  return (
    <Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/restaurant/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Header>
  );
});
