import React from 'react';
import { Skeleton } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import './basket.css';
import BasketItem from './basketItem/BasketItem';
import * as skeleton from '../../utils/loading.skeleton.helper';
import { basket } from '../../features/selectors/products.selectors';
const Basket = () => {
	const basketProducts = useSelector(basket);

	return (
		<Skeleton avatar={{ shape: 'square' }} {...skeleton.shapeSquareBoxSkeleton(false)}>
			<div className="basket section-block ">
				<div className="basket__products">
					{basketProducts.productsList.map((item) => {
						return <BasketItem item={item} />;
					})}
				</div>
				<div className="basket__total-price-container global-flex-h-end-v-center">
					<div className="basket__total-price-container__total-price product-price global-flex-h-center-v-center">
						<span>$</span>
						<span>{basketProducts.totalPrice}</span>
					</div>
				</div>
			</div>
		</Skeleton>
	);
};

export default Basket;
