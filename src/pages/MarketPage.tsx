import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import './market-page.css';
import ProductsStoreSection from '../components/productsStoreSection/ProductsStoreSection';
import MarketPageCustomizationSection from '../components/marketPageCustomizationSection/MarketPageCustomizationSection';
import Basket from '../components/basket/Basket';
import BasketDrawer from '../components/basketDrawer/BasketDrawer';
import { useMobile } from '../utils/useMobile';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanies, getSearchParams, searchProducts } from '../features/actions/products.actions';
import {
	selectBrandsList,
	selectSearchParams,
	selectSearchProductsResult
} from '../features/selectors/products.selectors';
import { generateQueryFromPathname, handleNavigationQuery, convertObjectKey } from '../utils/helper';

const MarketPage = () => {
	const productsList = useSelector(selectSearchProductsResult);
	const searchParams = useSelector(selectSearchParams);
	const brandsList = useSelector(selectBrandsList);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	let query = generateQueryFromPathname(location.pathname);
	useEffect(() => {
		dispatch(getSearchParams(convertObjectKey(query)));
		dispatch(fetchCompanies());
	}, []);

	useEffect(
		() => {
			let navigationQuery = handleNavigationQuery(searchParams);
			navigate(navigationQuery);
			dispatch(searchProducts(searchParams));
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
