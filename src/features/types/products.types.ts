import { ActionType } from 'typesafe-actions';
import * as actions from '../actions/products.actions';

/* --- STATE --- */
interface Data {
	productsList: [];
}

interface Local {
	searchParams: ISearchProductsPayload;
	loading: {
		fetchingProduct: boolean;
		fetchingProductByPage: boolean;
		getSearchParams: boolean;
	};
	errors: {
		fetchingProduct: string;
		fetchingProductByPage: string;
		getSearchParams: string;
	};
}
interface IProductsState {
	data: Data;
	local: Local;
}
/* --- SAGA --- */

/* --- ACTIONS --- */
type productsActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

export type ProductsState = IProductsState;
export type ProductsActions = productsActions;
export interface IResponseGenerator {
	config?: any;
	data?: any;
	headers?: any;
	request?: any;
	status?: number;
	statusText?: string;
}

export interface ISearchProductsPayload {
	page?: string | null | string[];
	limit?: string;
	sortVariable?: string;
	sortType?: string;
}

export interface ISearchProductsAction {
	type: string;
	payload: ISearchProductsPayload;
}
export interface IGetSearchParamsAction {
	type: string;
	payload: ISearchProductsPayload;
}
