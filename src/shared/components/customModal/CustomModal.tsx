import React, { useState } from 'react';
import { Modal } from 'antd';

import './custom-modal.css';

export interface IOwnProps {
	title: string;
	loading: boolean;
	modalVisible: boolean;
	handleSubmit(): void;
	handleCancel(): void;
}
const CustomModal: React.FC<IOwnProps> = ({ children, title, modalVisible, handleSubmit, handleCancel, loading }) => {
	const handleSubmitAction = () => {
		handleSubmit();
	};

	const handleCancelAction = () => {
		handleCancel();
	};

	return (
		<div className="market-page-customization-section">
			<Modal
				title={title}
				visible={modalVisible}
				onOk={handleSubmitAction}
				confirmLoading={loading}
				onCancel={handleCancelAction}
			>
				{children}
			</Modal>
		</div>
	);
};

export default CustomModal;
