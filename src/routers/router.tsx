import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout/MainLayout";
import {MainPage} from "../pages/MainPage/MainPage";
import {FavoritesPage} from "../pages/FavoritesPage/FavoritesPage";
import {CityPage} from "../pages/CityPage/CityPage";
import {NotFoundPage} from "../pages/NotFoundPage/NotFoundPage";
import React from "react";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout/>,
		errorElement: <NotFoundPage/>,
		children: [
			{index: true, element: <MainPage/>},
			{path: "/favorites", element: <FavoritesPage/>},
			{path: '/favorites/:city', element: <CityPage/>},
		]
	},
]);