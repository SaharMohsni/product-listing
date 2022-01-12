import React, { useState } from 'react';
import './products-store-section.css';
import { Skeleton } from 'antd';
import TagFilter from '../../shared/components/tagFilter/TagFilter';
import ProductsList from '../productsList/ProductsList';
import PaginationSection from '../../shared/components/pagination/PaginationSection';
import * as skeleton from '../../utils/loading.skeleton.helper';

interface IOwnProps {
	setCurrentPage: (currentPage: number) => void;
	productsList: {
		id: number;
		name: string;
		price: number;
		urlImage: string;
		type: string;
	}[];
	itemsTypeList: { id: number; type: string }[];
}

const ProductsStoreSection: React.FC<IOwnProps> = ({ setCurrentPage, productsList, itemsTypeList }) => {
	const [ activeTagKey, setActiveTagKey ] = useState(-1);
	return (
		<div className="products-store-section">
			<Skeleton {...skeleton.labelSkeleton(false)}>
				<div className="products-store-section__header">Products</div>
			</Skeleton>
			<Skeleton {...skeleton.tagSkeleton(false)}>
				<div className="products-store-section__tags-filter-list global-flex-h-any-v-center">
					{itemsTypeList.map((itemType) => {
						return (
							<TagFilter
								itemType={itemType}
								key={itemType.id}
								activeTagKey={activeTagKey}
								// setActiveTagKey={setActiveTagKey}
							/>
						);
					})}
				</div>
			</Skeleton>
			<div className="products-store-section__products-list-container">
				<ProductsList productsList={productsList} />
			</div>
			<Skeleton {...skeleton.fullRowItemSkeleton(false)}>
				<div className="products-store-section__pagination-container">
					<PaginationSection setCurrentPage={setCurrentPage} />
				</div>
			</Skeleton>
		</div>
	);
};

export default ProductsStoreSection;
