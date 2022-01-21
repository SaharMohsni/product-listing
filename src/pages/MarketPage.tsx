/**
 *
 * Market page
 *
 */

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './market-page.css';
import ProductsStoreSection from '../components/productsStoreSection/ProductsStoreSection';
import MarketPageCustomizationSection from '../components/marketPageCustomizationSection/MarketPageCustomizationSection';
import Basket from '../components/basket/Basket';
import BasketDrawer from '../components/basketDrawer/BasketDrawer';
import { useMobile } from '../utils/useMobile';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanies, searchProducts, fetchTags, fetchProductsTypes } from '../features/actions/products.actions';
import { selectHasError } from '../features/selectors/products.selectors';
import { generateNavigationQueryFromPathName } from '../utils/helper';
import ErrorComponent from '../shared/components/errors/ErrorComponent';

const MarketPage = () => {
	const hasError = useSelector(selectHasError);
	const dispatch = useDispatch();
	const location = useLocation();
	const isMobileVersion = useMobile();
	let lastQuery = generateNavigationQueryFromPathName(location);
	useEffect(() => {
		dispatch(searchProducts(lastQuery));
		dispatch(fetchCompanies());
		dispatch(fetchTags());
		dispatch(fetchProductsTypes());
	}, []);
	useEffect(
		() => {
			if (!isMobileVersion) {
				dispatch(searchProducts(lastQuery));
			}
		},
		[ lastQuery ]
	);

	// useEffect(
	// 	() => {
	// 		if (!isMobileVersion) {
	// 			let navigationQuery = serializeNavigationQuery(searchParams); // generate navigation query of data from the store
	// 			navigate(navigationQuery); // making the search product works using the route path ( case of sinding product with specific search query)
	// 			dispatch(searchProducts(searchParams));
	// 		}
	// 	},
	// 	[ searchParams ]
	// );

	return (
		<div>
			{hasError ? (
				<ErrorComponent />
			) : (
				<div className="market-page global-page-padding-left-right">
					<div
						className={`market-page-customization-section-container ${isMobileVersion
							? 'global-flex-h-between-v-any'
							: ''}`}
					>
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
