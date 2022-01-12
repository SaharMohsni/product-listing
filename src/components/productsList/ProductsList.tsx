import React from 'react';
import ProductCard from './productCard/ProductCard';
import './product-list.css';
interface IOwnProps {
	productsList: {
		id: number;
		name: string;
		price: number;
		urlImage: string;
		type: string;
	}[];
}

const ProductsList: React.FC<IOwnProps> = ({ productsList }) => {
	const renderProductsList = () => {
		return productsList.map((product) => {
			return <ProductCard product={product} />;
		});
	};
	return <div className="product-list">{renderProductsList()}</div>;
};

export default ProductsList;
