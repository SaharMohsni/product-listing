/**
 * Products services
 */
import axios from 'axios';
import { requestHeader } from '../../utils/requestHeader';
import URL from '../constants/services.constants';
import { ISearchProductsPayload } from '../types/products.types';

export const searchProducts = async (body: ISearchProductsPayload): Promise<any> => {
	const result = await axios.get(URL.baseApiUrl() + URL.products.searchProducts(body), requestHeader({}));
	let productsCount = result.headers['x-total-count']; // getting products number result search from header
	let res = { data: result.data, productsCount };
	return res;
};

export const fetchCompanies = async (): Promise<any> => {
	const result = await axios.get(URL.baseApiUrl() + URL.companies.fetchCompanies(), requestHeader({}));
	return result.data;
};

// service added
export const fetchTags = async (): Promise<any> => {
	const result = await axios.get(URL.baseApiUrl() + URL.tags.fetchTags(), requestHeader({}));
	return result.data;
};

// service added
export const fetchProductsTypes = async (): Promise<any> => {
	const result = await axios.get(URL.baseApiUrl() + URL.productsTypes.fetchProductsTypes(), requestHeader({}));
	return result.data;
};
