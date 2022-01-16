import React from 'react';
import { useSelector } from 'react-redux';

import ProductCard from './productCard/ProductCard';
import './product-list.css';
import { selectLoading, selectSearchProductsResult } from '../../features/selectors/products.selectors';
import { fakeData } from '../../utils/constants';

const ProductsList = () => {
	const productsList = useSelector(selectSearchProductsResult);
	const loading = useSelector(selectLoading);
	const data = loading.fetchingProductByPage ? fakeData : productsList;
	const renderProductsList = () => {
		return data.map((product) => {
			return <ProductCard product={product} key={Math.random()} />;
		});
	};
	return (
		<div className={`${loading.fetchingProductByPage && 'without-background'} product-list`}>
			{renderProductsList()}
		</div>
	);
};

export default ProductsList;
