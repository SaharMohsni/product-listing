/**
 *
 * Products store section : containing the types filter, the products List and the pagination section
 *
 */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './products-store-section.css';
import { Skeleton } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';
import TagFilter from '../../shared/components/tagFilter/TagFilter';
import ProductsList from '../productsList/ProductsList';
import PaginationSection from '../../shared/components/pagination/PaginationSection';
import * as skeleton from '../../utils/loading.skeleton.helper';
import {
	selectLoading,
	selectProductsTypes,
	selectSearchProductsResult
} from '../../features/selectors/products.selectors';
import { formatArrayData, generateNavigationQueryFromPathName, handleNavigation } from '../../utils/helper';

const ProductsStoreSection = () => {
	const location = useLocation();
	let searchQuery = generateNavigationQueryFromPathName(location);
	const loading = useSelector(selectLoading);
	const [ activeTagKey, setActiveTagKey ] = useState(searchQuery.itemType);
	const itemsTypeList = useSelector(selectProductsTypes);
	const productsList = useSelector(selectSearchProductsResult);
	const navigate = useNavigate();

	useEffect(
		() => {
			handleSearchProductsQuery();
		},
		[ activeTagKey ]
	);
	const handleSearchProductsQuery = () => {
		let newSearchParams = { itemType: activeTagKey };
		handleNavigation(searchQuery, newSearchParams, navigate);
	};

	return (
		<div className="products-store-section">
			<Skeleton {...skeleton.labelSkeleton(loading.fetchingCompanies)}>
				<div className="products-store-section__header">Products</div>
			</Skeleton>
			<Skeleton {...skeleton.tagSkeleton(loading.fetchingProductsTypes)}>
				<div className="products-store-section__tags-filter-list global-scroll global-flex-h-any-v-center">
					{formatArrayData(itemsTypeList).map((itemType: any) => {
						return (
							<TagFilter
								itemType={itemType}
								key={itemType.id}
								activeTagKey={activeTagKey}
								setActiveTagKey={setActiveTagKey}
							/>
						);
					})}
				</div>
			</Skeleton>
			<div className="products-store-section__products-list-container">
				<ProductsList loading={loading.fetchingProducts} />
			</div>
			{!isEmpty(productsList) && (
				<Skeleton {...skeleton.fullRowItemSkeleton(loading.fetchingProducts)}>
					<div className="products-store-section__pagination-container">
						<PaginationSection />
					</div>
				</Skeleton>
			)}
		</div>
	);
};

export default ProductsStoreSection;
