/**
 *
 * Products store section : containing the types filter, the products List and the pagination section
 *
 */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './products-store-section.css';
import { Skeleton } from 'antd';
import TagFilter from '../../shared/components/tagFilter/TagFilter';
import ProductsList from '../productsList/ProductsList';
import PaginationSection from '../../shared/components/pagination/PaginationSection';
import * as skeleton from '../../utils/loading.skeleton.helper';
import {
	selectLoading,
	selectProductsTypes,
	selectSearchParams,
	selectSearchProductsResult
} from '../../features/selectors/products.selectors';
import { formatArrayData } from '../../utils/helper';
import { isEmpty } from 'lodash';

const ProductsStoreSection = () => {
	const loading = useSelector(selectLoading);
	const searchParams = useSelector(selectSearchParams);
	const [ activeTagKey, setActiveTagKey ] = useState('');
	const [ fetchLoadingStatus, setFetchLoadingStatus ] = useState(true);
	const itemsTypeList = useSelector(selectProductsTypes);
	const productsList = useSelector(selectSearchProductsResult);

	useEffect(
		() => {
			setTimeout(function() {
				setFetchLoadingStatus(loading.fetchingProductByPage);
			}, 3000);
		},
		[ loading.fetchingProductByPage ]
	);

	useEffect(
		() => {
			if (searchParams.itemType) {
				setActiveTagKey(searchParams.itemType);
			}
		},
		[ searchParams ]
	);

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
				<ProductsList loading={fetchLoadingStatus} />
			</div>
			{!isEmpty(productsList) && (
				<Skeleton {...skeleton.fullRowItemSkeleton(fetchLoadingStatus)}>
					<div className="products-store-section__pagination-container">
						<PaginationSection />
					</div>
				</Skeleton>
			)}
		</div>
	);
};

export default ProductsStoreSection;
