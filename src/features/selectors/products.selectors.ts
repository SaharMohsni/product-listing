/**
 * Products selectors
 */
import { createSelector } from 'reselect';
import { IBasket, ISearchProductsPayload } from '../types/products.types';

export const selectSearchProductsResult = createSelector(
	(state: any): object => state.products,
	(products: any): [] => products.data.productsList
);
export const selectSearchProductsCount = createSelector(
	(state: any): object => state.products,
	(products: any): number => products.data.itemsCount
);
export const selectSearchParams = createSelector(
	(state: any): object => state.products,
	(products: any): ISearchProductsPayload => products.local.searchParams
);

export const selectBrandsList = createSelector(
	(state: any): object => state.products,
	(products: any): [] => products.data.brandsList
);

export const selectTags = createSelector(
	(state: any): object => state.products,
	(products: any): [] => products.data.tags
);
export const selectProductsTypes = createSelector(
	(state: any): object => state.products,
	(products: any): [] => products.data.productsTypes
);
export const selectBasket = createSelector(
	(state: any): object => state.products,
	(products: any): IBasket => products.data.basket
);
export const selectBasketTotalPrice = createSelector(
	(state: any): object => state.products,
	(products: any): number => products.data.basket.totalPrice
);
export const selectBasketProducts = createSelector(
	(state: any): object => state.products,
	(products: any): any => products.data.basket.productsList
);

export const selectLoading = createSelector(
	(state: any): object => state.products,
	(products: any): any => products.local.loading
);
export const selectErrors = createSelector(
	(state: any): object => state.products,
	(products: any): any => products.local.errors
);

export const selectModalStatusAfterSearch = createSelector(
	(state: any): object => state.products,
	(products: any): boolean => products.local.modalStatusOnMobile
);
export const selectHasError = createSelector(
	(state: any): object => state.products,
	(products: any): boolean => products.local.hasError
);
