/**
 * Products interfaces
 */
import { ActionType } from 'typesafe-actions';
import * as actions from '../actions/products.actions';

/* --- STATE --- */
interface Data {
	productsList: [];
	brandsList: {};
	tags: [];
	productsTypes: [];
	basket: IBasket;
	itemsCount: number;
}

interface Local {
	searchParams: ISearchProductsPayload;
	loading: {
		fetchingProductByPage: boolean;
		getSearchParams: boolean;
		fetchingCompanies: boolean;
		fetchingTags: boolean;
		fetchingProductsTypes: boolean;
		addingProduct: boolean;
		incrementQuantity: boolean;
		calculateTotalCost: boolean;
		decrementQuantity: boolean;
	};
	basketProductsIdsList: string[];
	hasError: boolean;
	errors: {
		fetchingProductByPage: string;
		getSearchParams: string;
		fetchingCompanies: string;
		fetchingTags: string;
		fetchingProductsTypes: string;
		addingProduct: string;
		incrementQuantity: string;
		calculateTotalCost: string;
		decrementQuantity: string;
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
	manufacturer?: object;
	tags?: object;
	itemType?: string;
}

export interface ISearchProductsAction {
	type: string;
	payload: ISearchProductsPayload;
}

export interface IActionWithoutPayload {
	type: string;
}
export interface IGetSearchParamsAction {
	type: string;
	payload: ISearchProductsPayload;
}

export interface IAddProductAction {
	type: string;
	payload: IProduct;
}
export interface IActionWithPayload {
	type: string;
	payload: any;
}

export interface IBrand {
	slug: string;
	name: string;
	address: string;
	city: string;
	state: string;
	zip: string;
	account: number;
	contact: string;
}

export interface ISetLocalState {
	success: boolean;
	message: string;
}
export interface IProduct {
	tags: string[];
	price: number;
	name: string;
	description: string;
	slug: string;
	added: number;
	manufacturer: number;
	itemType: string;
}

export interface IInBasketProduct {
	productData: IProduct;
	quantity: number;
}

export interface IBasket {
	productsList: IInBasketProduct[];
	totalPrice: number;
}
