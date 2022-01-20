/**
 *
 * Products list
 *
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { Empty } from 'antd';
import ProductCard from './productCard/ProductCard';
import './product-list.css';
import { selectSearchProductsResult } from '../../features/selectors/products.selectors';
import { FAKE_DATA } from '../../utils/constants';

export interface IOwnProps {
	loading: boolean;
}

const ProductsList: React.FC<IOwnProps> = ({ loading }) => {
	const productsList = useSelector(selectSearchProductsResult);
	const data = loading ? FAKE_DATA : productsList;

	const renderProductsList = () => {
		return data.map((product) => {
			return <ProductCard product={product} key={Math.random()} loading={loading} />;
		});
	};
	let isEmptyData = isEmpty(data);
	return (
		<div
			className={`${loading && 'without-background'} ${isEmptyData &&
				'is-empty global-flex-h-center-v-any'} product-list`}
		>
			{!isEmptyData ? (
				renderProductsList()
			) : (
				<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No products with this filter " />
			)}
		</div>
	);
};

export default ProductsList;
