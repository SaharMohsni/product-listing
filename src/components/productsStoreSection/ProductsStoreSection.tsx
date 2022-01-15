import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './products-store-section.css';
import { Skeleton } from 'antd';
import TagFilter from '../../shared/components/tagFilter/TagFilter';
import ProductsList from '../productsList/ProductsList';
import PaginationSection from '../../shared/components/pagination/PaginationSection';
import * as skeleton from '../../utils/loading.skeleton.helper';
import { selectProductsTypes, selectSearchParams } from '../../features/selectors/products.selectors';
import { formatData } from '../../utils/helper';

const ProductsStoreSection = () => {
	const searchParams = useSelector(selectSearchParams);
	const [ activeTagKey, setActiveTagKey ] = useState('');
	const itemsTypeList = useSelector(selectProductsTypes);
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
			<Skeleton {...skeleton.labelSkeleton(false)}>
				<div className="products-store-section__header">Products</div>
			</Skeleton>
			<Skeleton {...skeleton.tagSkeleton(false)}>
				<div className="products-store-section__tags-filter-list global-flex-h-any-v-center">
					{formatData(itemsTypeList).map((itemType: any) => {
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
				<ProductsList />
			</div>
			<Skeleton {...skeleton.fullRowItemSkeleton(false)}>
				<div className="products-store-section__pagination-container">
					<PaginationSection />
				</div>
			</Skeleton>
		</div>
	);
};

export default ProductsStoreSection;
