import React from 'react';
import { Skeleton } from 'antd';
import './basket.css';
import BasketItem from './basketItem/BasketItem';
import * as skeleton from '../../utils/loading.skeleton.helper';
const Basket = () => {
	const products = [
		{ id: 1, name: 'camera1', price: 2500, unit: '$' },
		{ id: 1, name: 'camera1', price: 2500, unit: '$' },
		{ id: 1, name: 'camera1', price: 2500, unit: '$' },
		{ id: 1, name: 'camera1', price: 2500, unit: '$' }
	];
	return (
		<Skeleton avatar={{ shape: 'square' }} {...skeleton.shapeSquareBoxSkeleton(false)}>
			<div className="basket section-block ">
				<div className="basket__products">
					{products.map((product) => {
						return <BasketItem />;
					})}
				</div>
				<div className="basket__total-price-container global-flex-h-end-v-center">
					<div className="basket__total-price-container__total-price product-price global-flex-h-center-v-center">
						<span>$</span>
						<span>14250</span>
					</div>
				</div>
			</div>
		</Skeleton>
	);
};

export default Basket;
