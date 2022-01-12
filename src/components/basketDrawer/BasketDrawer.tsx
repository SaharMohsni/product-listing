import React, { useState } from 'react';
import { Drawer, Button, Space, Skeleton } from 'antd';
import './basket-drawer.css';
import Basket from '../basket/Basket';
import * as skeleton from '../../utils/loading.skeleton.helper';

const BasketDrawer = () => {
	const [ visible, setVisible ] = useState(false);
	const showDefaultDrawer = () => {
		setVisible(true);
	};
	const onClose = () => {
		setVisible(false);
	};

	return (
		<div className="basket-drawer">
			<Space>
				<Skeleton {...skeleton.fullRowItemSkeleton(false)}>
					<div className="custom-button-on-mobile">
						<Button type="primary" onClick={showDefaultDrawer}>
							Order's details
						</Button>
					</div>
				</Skeleton>
			</Space>
			<Drawer
				title={`Details`}
				placement="right"
				onClose={onClose}
				visible={visible}
				extra={
					<Space className="action-buttons">
						<Button onClick={onClose}>Cancel</Button>
						<Button type="primary" onClick={onClose}>
							Submit
						</Button>
					</Space>
				}
			>
				<Basket />
			</Drawer>
		</div>
	);
};

export default BasketDrawer;
