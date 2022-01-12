import React, { useState } from 'react';
import { Modal } from 'antd';

import './custom-modal.css';

interface IOwnProps {
	title: string;
	modalVisible: boolean;
	setModalVisible: (status: boolean) => void;
	handleSubmit(): void;
	handleCancel(): void;
}
const CustomModal: React.FC<IOwnProps> = ({
	children,
	title,
	modalVisible,
	setModalVisible,
	handleSubmit,
	handleCancel
}) => {
	const [ confirmLoading, setConfirmLoading ] = useState(false);

	const handleSubmitAction = () => {
		setConfirmLoading(true);
		handleSubmit();
		setTimeout(() => {
			setModalVisible(false);
			setConfirmLoading(false);
		}, 2000);
	};

	const handleCancelAction = () => {
		console.log('Clicked cancel button');
		handleCancel();
	};

	return (
		<div className="market-page-customization-section">
			<Modal
				title={title}
				visible={modalVisible}
				onOk={handleSubmitAction}
				confirmLoading={confirmLoading}
				onCancel={handleCancelAction}
			>
				{children}
			</Modal>
		</div>
	);
};

export default CustomModal;
