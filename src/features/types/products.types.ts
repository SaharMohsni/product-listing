import { ActionType } from 'typesafe-actions';
import * as actions from '../actions/products.actions';

/* --- STATE --- */
interface Data {
	productsList: [];
}

interface Local {
	loading: {
		fetchingProduct: Boolean;
		fetchingProductByPage: Boolean;
	};
	errors: {
		fetchingProduct: String;
		fetchingProductByPage: String;
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
	page: number;
	limit: number;
	sortVariable: string;
	sortDirection: string;
}

export interface ISearchProductsAction {
	type: string;
	payload: ISearchProductsPayload;
}
