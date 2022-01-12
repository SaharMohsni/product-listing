import React, { useEffect, useState } from 'react';
import './market-page.css';
import ProductsStoreSection from '../components/productsStoreSection/ProductsStoreSection';
import MarketPageCustomizationSection from '../components/marketPageCustomizationSection/MarketPageCustomizationSection';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Basket from '../components/basket/Basket';
import BasketDrawer from '../components/basketDrawer/BasketDrawer';
import { useMobile } from '../utils/useMobile';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts } from '../features/actions/products.actions';
import { selectSearchProductsResult } from '../features/selectors/products.selectors';
import { ProductsState } from '../features/types/products.types';
import { getURLParams } from '../utils/helper';

const MarketPage = () => {
	// const router = useRouter();

	const [ currentPage, setCurrentPage ] = useState(1);
	const [ sortData, setSortData ] = useState({ sortVariable: '', sortType: '' });
	const productsList = useSelector(selectSearchProductsResult);
	const dispatch = useDispatch();
	const location = useLocation();
	useEffect(
		() => {
			let payload = getURLParams(location);
			dispatch(searchProducts(payload));
		},
		[ location ]
	);

	const itemsTypeList = [ { id: 1, type: 'electro' }, { id: 2, type: 'fruits' }, { id: 3, type: 'clothes' } ];
	const isMobileVersion = useMobile();

	return (
		<div className="market-page global-page-padding-left-right">
			<div className={`${isMobileVersion ? 'global-flex-h-between-v-any' : ''}`}>
				<MarketPageCustomizationSection setSortData={setSortData} />
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
