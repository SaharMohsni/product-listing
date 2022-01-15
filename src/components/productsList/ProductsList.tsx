import React from 'react';
import { useSelector } from 'react-redux';

import ProductCard from './productCard/ProductCard';
import './product-list.css';
import { selectSearchProductsResult } from '../../features/selectors/products.selectors';

const ProductsList = () => {
	const productsList = useSelector(selectSearchProductsResult);
	const renderProductsList = () => {
		return productsList.map((product) => {
			return <ProductCard product={product} key={Math.random()} />;
		});
	};
	return <div className="product-list">{renderProductsList()}</div>;
};

export default ProductsList;
