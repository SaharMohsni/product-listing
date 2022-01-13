import { createSelector } from 'reselect';
import { ISearchProductsPayload } from '../types/products.types';

export const selectSearchProductsResult = createSelector(
	(state: any): object => state.products,
	(products: any): [] => products.data.productsList
);

export const selectSearchParams = createSelector(
	(state: any): object => state.products,
	(products: any): ISearchProductsPayload => products.local.searchParams
);
