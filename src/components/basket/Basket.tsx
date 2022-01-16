import React, { useEffect } from 'react';
import { Skeleton } from 'antd';
import { useSelector } from 'react-redux';

import './basket.css';
import BasketItem from './basketItem/BasketItem';
import * as skeleton from '../../utils/loading.skeleton.helper';
import { selectBasket, selectLoading } from '../../features/selectors/products.selectors';
const Basket = () => {
	const basketProducts = useSelector(selectBasket);
	const loading = useSelector(selectLoading);

	return (
		<Skeleton avatar={{ shape: 'square' }} {...skeleton.shapeSquareBoxSkeleton(loading.fetchingProductByPage)}>
			<div className="basket section-block ">
				<div className="basket__products">
					{basketProducts.productsList.map((item) => {
						return <BasketItem item={item} key={Math.random()} />;
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
