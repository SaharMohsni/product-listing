import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './market-page.css';
import ProductsStoreSection from '../components/productsStoreSection/ProductsStoreSection';
import MarketPageCustomizationSection from '../components/marketPageCustomizationSection/MarketPageCustomizationSection';
import Basket from '../components/basket/Basket';
import BasketDrawer from '../components/basketDrawer/BasketDrawer';
import { useMobile } from '../utils/useMobile';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanies, searchProducts } from '../features/actions/products.actions';
import {
	selectBrandsList,
	selectSearchParams,
	selectSearchProductsResult
} from '../features/selectors/products.selectors';
import { handleNavigationQuery } from '../utils/helper';

const MarketPage = () => {
	const productsList = useSelector(selectSearchProductsResult);
	const searchParams = useSelector(selectSearchParams);
	const brandsList = useSelector(selectBrandsList);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(
		() => {
			let navigationQuery = handleNavigationQuery(searchParams);
			navigate(navigationQuery);
			dispatch(searchProducts(searchParams));
			dispatch(fetchCompanies());
		},
		[ searchParams ]
	);

	const itemsTypeList = [ { id: 1, type: 'electro' }, { id: 2, type: 'fruits' }, { id: 3, type: 'clothes' } ];
	const isMobileVersion = useMobile();

	return (
		<div className="market-page global-page-padding-left-right">
			<div className={`${isMobileVersion ? 'global-flex-h-between-v-any' : ''}`}>
				<MarketPageCustomizationSection brandsList={brandsList} />
				{isMobileVersion && (
					<div>
						<BasketDrawer />
					</div>
				)}
			</div>
			<ProductsStoreSection productsList={productsList} itemsTypeList={itemsTypeList} />

			{!isMobileVersion && (
				<div>
					<Basket />
				</div>
			)}
		</div>
	);
};

export default MarketPage;
