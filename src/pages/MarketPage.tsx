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
import { selectSearchParams } from '../features/selectors/products.selectors';
import { generateQueryFromPathname, handleNavigationQuery, convertObjectKey } from '../utils/helper';

const MarketPage = () => {
	const searchParams = useSelector(selectSearchParams);
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
				let navigationQuery = handleNavigationQuery(searchParams);
				navigate(navigationQuery);
				dispatch(searchProducts(searchParams));
			}
		},
		[ searchParams ]
	);

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
			<ProductsStoreSection />

			{!isMobileVersion && (
				<div>
					<Basket />
				</div>
			)}
		</div>
	);
};

export default MarketPage;
