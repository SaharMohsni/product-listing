import React, { useEffect } from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import { useSelector } from 'react-redux';
import { selectHasError } from '../../../features/selectors/products.selectors';
import errorImage from '../../../assets/serverError.png';
import './error-component.css';
export const ErrorComponent = () => {
	const hasError = useSelector(selectHasError);

	useEffect(
		() => {
			openNotification();
		},
		[ hasError ]
	);
	const openNotification = () => {
		notification.open({
			message: '',
			description: (
				<div>
					<CloseCircleOutlined /> <span>Server Error</span>
				</div>
			)
		});
	};

	return (
		<div className="error-component global-flex-h-center-v-center">
			<img src={errorImage} alt="server error" />
		</div>
	);
};
