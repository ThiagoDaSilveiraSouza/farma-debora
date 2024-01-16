import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, PageNotFound } from "../pages";

export const PagesRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/links" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
