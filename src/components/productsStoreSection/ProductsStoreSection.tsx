import React, { useState } from 'react';
import './products-store-section.css';
import { Skeleton } from 'antd';
import TagFilter from '../../shared/components/tagFilter/TagFilter';
import ProductsList from '../productsList/ProductsList';
import PaginationSection from '../../shared/components/pagination/PaginationSection';
import * as skeleton from '../../utils/loading.skeleton.helper';

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
	itemsTypeList: { id: number; type: string }[];
}

const ProductsStoreSection: React.FC<IOwnProps> = ({ productsList, itemsTypeList }) => {
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
					<PaginationSection />
				</div>
			</Skeleton>
		</div>
	);
};

export default ProductsStoreSection;
