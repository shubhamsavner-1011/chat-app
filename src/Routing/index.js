import React from 'react';
import {privateRoutes, publicRoutes} from './RoutingTypes';
import {Routes, Route} from 'react-router-dom';
import {PrivateRoutes} from './PrivateRoutes';
import {PublicRoute} from './PublicRouting';
import {ToastContainer} from 'react-toastify';

export const Routing = (props) => (
	<>
		<ToastContainer
			position='top-right'
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
		/>
		<Routes>
			{publicRoutes?.map((route, index) => (
				<Route
					path={route.path}
					key={index}
					element={<PublicRoute Component={route.Component} setToken={props.setToken} />}
				/>
			))}
			{privateRoutes?.map((route, index) => (
				<Route
					path={route.path}
					key={index}
					element={<PrivateRoutes Component={route.Component} setToken={props.setToken} />}
				/>
			))}
		</Routes>
	</>
);
