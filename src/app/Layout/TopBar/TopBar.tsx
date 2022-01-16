import React, { lazy } from 'react';
import { ShoppingOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { Skeleton } from 'antd';
import './top-bar.css';
import * as skeleton from '../../../utils/loading.skeleton.helper';
import { selectBasketTotalPrice } from '../../../features/selectors/products.selectors';

const TopBar = () => {
	const totalPrice = useSelector(selectBasketTotalPrice);
	return (
		<div className="top-bar global-flex-h-between-v-center global-page-padding-left-right">
			<div className="top-bar__logo global-flex-h-end-v-center">
				<span className="top-bar__logo__text">Market</span>
			</div>
			<Skeleton {...skeleton.fullRowItemSkeleton(false)}>
				<div className="top-bar__basket global-flex-h-center-v-center">
					<ShoppingOutlined />
					<div className="top-bar__basket__total-price">
						<span className="top-bar__basket__total-price__unit">$</span>
						<span className="top-bar__basket__total-price__amount">{totalPrice}</span>
					</div>
				</div>
			</Skeleton>
		</div>
	);
};

export default TopBar;
