import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Layout from '../components/Layout';

export default function MainRoutes() {
	const PUBLIC_ROUTES = [
		{
			id: 1,
			path: '/',
			element: (
				<Layout>
					<HomePage />
				</Layout>
			),
		},
	];
	return (
		<Routes>
			{PUBLIC_ROUTES.map((route) => (
				<Route key={route.id} path={route.path} element={route.element} />
			))}
		</Routes>
	);
}
