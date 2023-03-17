
import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import { URL } from '../constant';

export const PublicRoute = ({Component, ...props}) => {
	const navigate = useNavigate();
	const token = Cookies.get('token');

	useEffect(() => {
		if (token) {
			navigate(URL.HOME_PAGE);
		}
	}, []);
	return (
		<div>
			<Component {...props} />
		</div>
	);
};
