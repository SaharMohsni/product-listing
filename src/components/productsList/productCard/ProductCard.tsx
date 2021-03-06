/**
 *
 * Product card
 *
 */
import React, { useState, useEffect } from 'react';
import { Button, Skeleton } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import './product-card.css';
import * as skeleton from '../../../utils/loading.skeleton.helper';
import { addProduct } from '../../../features/actions/products.actions';
import { IProduct } from '../../../features/types/products.types';
import { selectBasketProductsIdsList } from '../../../features/selectors/products.selectors';

export interface IOwnProps {
	product: IProduct;
	loading: boolean;
}

const ProductCard: React.FC<IOwnProps> = ({ product, loading }) => {
	const [ disableButton, setDisableButton ] = useState(false);
	const dispatch = useDispatch();
	const basketProductsIdsList = useSelector(selectBasketProductsIdsList);

	useEffect(
		() => {
			handleDisableAddButton();
		},
		[ basketProductsIdsList ]
	);

	const handleAdd = () => {
		dispatch(addProduct(product));
	};
	const handleDisableAddButton = () => {
		let findedProduct: string | undefined = basketProductsIdsList.find((slug: string) => slug === product.slug);
		if (findedProduct) {
			setDisableButton(true);
		} else setDisableButton(false);
	};

	return (
		<div className="product-card " key={product.slug}>
			<Skeleton avatar={{ shape: 'square' }} {...skeleton.imageSkeleton(loading)}>
				<div className="product-card__image global-flex-h-center-v-center">
					<img
						src="data:image/jpeg;base64,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"
						alt={`product-${product.name}`}
					/>
				</div>
			</Skeleton>
			<Skeleton {...skeleton.descriptionSkeleton(loading)}>
				<div className="product-card__price product-price">
					<span className="product-price__unit">$</span>
					<span className="product-price__price">{product.price}</span>
				</div>
				<div className="product-card__name product-name">{product.name}</div>
				<div className="product-card__button global-flex-h-any-v-end">
					<Button
						type="primary"
						className="product-card__button "
						onClick={handleAdd}
						disabled={disableButton}
					>
						Add
					</Button>
				</div>
			</Skeleton>
		</div>
	);
};

export default ProductCard;
