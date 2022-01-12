import React from 'react';
import ProductCard from './productCard/ProductCard';
import './product-list.css';
interface IOwnProps {
	productsList: {
		tags: string[];
		price: number;
		name: string;
		description: string;
		slug: string;
		added: number;
		manufacturer: string;
		itemType: string;
	}[];
}

const ProductsList: React.FC<IOwnProps> = ({ productsList }) => {
	const renderProductsList = () => {
		return productsList.map((product) => {
			return <ProductCard product={product} key={Math.random()} />;
		});
	};
	return <div className="product-list">{renderProductsList()}</div>;
};

export default ProductsList;
