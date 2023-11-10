import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { MainPage } from "../pages/MainPage/MainPage";
import { FavoritesPage } from "../pages/FavoritesPage/FavoritesPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "/favorites", element: <FavoritesPage /> },
      // TODO Add city pages
      // { path: "/favorites/:city", element: <CityPage /> },
    ],
  },
]);
