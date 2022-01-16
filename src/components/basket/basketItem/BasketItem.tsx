import React from 'react';
import { useDispatch } from 'react-redux';
import { IInBasketProduct } from '../../../features/types/products.types';
import './basket-item.css';

interface IOwnProps {
	item: IInBasketProduct;
}

const BasketItem: React.FC<IOwnProps> = ({ item }) => {
	return (
		<div className="basket-item global-flex-h-between-v-center">
			<div className="basket-item__details">
				<div className="basket-item__details__name product-name">{item.productData.name}</div>
				<div className="basket-item__details__price-details product-price">
					<span className="basket-item__details__price-details__unit product-price__unit">$</span>
					<span className="basket-item__details__price-details__price product-price__price">
						{item.productData.price}
					</span>
				</div>
			</div>
			<div className="basket-item__quantity-details global-flex-h-between-v-center">
				<button className="basket-item__quantity-details__increment-btn global-flex-h-center-v-center">
					+
				</button>
				<div className="basket-item__quantity-details__quantity global-flex-h-center-v-center">
					{item.quantity}
				</div>
				<button className="basket-item__quantity-details__decrement-btn global-flex-h-center-v-center">
					-
				</button>
			</div>
		</div>
	);
};

export default BasketItem;
