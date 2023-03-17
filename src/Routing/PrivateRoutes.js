import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import {URL} from '../constant/RoutePath'
export const PrivateRoutes = ({Component, ...props}) => {
	const token = Cookies.get('token');

	const navigate = useNavigate();
	useEffect(() => {
		if (!token) {
			navigate(URL.LOGIN_PAGE);
		}
	}, []);
	return <Component {...props} />;
};
