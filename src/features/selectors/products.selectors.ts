import { createSelector } from 'reselect';

export const selectSearchProductsResult = createSelector(
	(state: any): object => state.products,
	(products: any): [] => products.data.productsList
);
