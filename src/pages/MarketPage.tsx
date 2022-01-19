/**
 *
 * Market page
 *
 */

import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './market-page.css';
import ProductsStoreSection from '../components/productsStoreSection/ProductsStoreSection';
import MarketPageCustomizationSection from '../components/marketPageCustomizationSection/MarketPageCustomizationSection';
import Basket from '../components/basket/Basket';
import BasketDrawer from '../components/basketDrawer/BasketDrawer';
import { useMobile } from '../utils/useMobile';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchCompanies,
	getSearchParams,
	searchProducts,
	fetchTags,
	fetchProductsTypes
} from '../features/actions/products.actions';
import { selectHasError, selectSearchParams } from '../features/selectors/products.selectors';
import { generateQueryFromPathname, handleNavigationQuery, convertObjectKey } from '../utils/helper';
import { ErrorComponent } from '../shared/components/errors/ErrorComponent';

const MarketPage = () => {
	const searchParams = useSelector(selectSearchParams);
	const hasError = useSelector(selectHasError);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const isMobileVersion = useMobile();
	let query = generateQueryFromPathname(location.pathname);

	useEffect(() => {
		dispatch(getSearchParams(convertObjectKey(query)));
		dispatch(fetchCompanies());
		dispatch(fetchTags());
		dispatch(fetchProductsTypes());
	}, []);

	useEffect(
		() => {
			if (!isMobileVersion) {
				let navigationQuery = handleNavigationQuery(searchParams); // generate navigation query of data from the store
				navigate(navigationQuery); // making the search product works using the route path ( case of sinding product with specific search query)
				dispatch(searchProducts(searchParams));
			}
		},
		[ searchParams ]
	);

	return (
		<div>
			{hasError ? (
				<ErrorComponent />
			) : (
				<div className="market-page global-page-padding-left-right">
					<div className={`${isMobileVersion ? 'global-flex-h-between-v-any' : ''}`}>
						<MarketPageCustomizationSection />
						{isMobileVersion && (
							<div>
								<BasketDrawer />
							</div>
						)}
					</div>
					<ProductsStoreSection />

					{!isMobileVersion && (
						<div>
							<Basket />
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default MarketPage;
