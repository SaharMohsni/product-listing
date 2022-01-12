import React, { useEffect, useState } from 'react';
import './market-page.css';
import ProductsStoreSection from '../components/productsStoreSection/ProductsStoreSection';
import MarketPageCustomizationSection from '../components/marketPageCustomizationSection/MarketPageCustomizationSection';

import Basket from '../components/basket/Basket';
import BasketDrawer from '../components/basketDrawer/BasketDrawer';
import { useMobile } from '../utils/useMobile';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts } from '../features/actions/products.actions';
import { selectSearchProductsResult } from '../features/selectors/products.selectors';
import { ProductsState } from '../features/types/products.types';

const MarketPage = () => {
	const [ currentPage, setCurrentPage ] = useState(1);
	const newProductsList = useSelector(selectSearchProductsResult);
	console.log('productsList', newProductsList);
	const dispatch = useDispatch();

	useEffect(
		() => {
			let payload = {
				page: currentPage,
				limit: 16,
				sortVariable: 'price,added',
				sortDirection: 'asc,desc'
			};
			dispatch(searchProducts(payload));
		},
		[ currentPage ]
	);
	const productsList = [
		{
			id: 0,
			name: 'camera 1',
			price: 1200,
			urlImage: 'string',
			type: 'electro'
		},
		{
			id: 1,
			name: 'camera 2',
			price: 1200,
			urlImage: 'string',
			type: 'electro'
		},
		{
			id: 2,
			name: 'camera 3',
			price: 1200,
			urlImage: 'string',
			type: 'electro'
		},
		{
			id: 3,
			name: 'camera 4',
			price: 1200,
			urlImage: 'string',
			type: 'electro'
		},
		{
			id: 4,
			name: 'camera 5',
			price: 1200,
			urlImage: 'string',
			type: 'electro'
		},
		{
			id: 5,
			name: 'camera 6',
			price: 1200,
			urlImage: 'string',
			type: 'itemsTypeList: { id: number; type: string }[];'
		}
	];
	const itemsTypeList = [ { id: 1, type: 'electro' }, { id: 2, type: 'fruits' }, { id: 3, type: 'clothes' } ];
	const isMobileVersion = useMobile();

	return (
		<div className="market-page global-page-padding-left-right">
			<div className={`${isMobileVersion ? 'global-flex-h-between-v-any' : ''}`}>
				<MarketPageCustomizationSection />
				{isMobileVersion && (
					<div>
						<BasketDrawer />
					</div>
				)}
			</div>
			<ProductsStoreSection
				setCurrentPage={setCurrentPage}
				productsList={productsList}
				itemsTypeList={itemsTypeList}
			/>

			{!isMobileVersion && (
				<div>
					<Basket />
				</div>
			)}
		</div>
	);
};

export default MarketPage;
