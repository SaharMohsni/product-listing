import { action } from 'typesafe-actions';
import ActionTypes from '../constants/products.constants';
import { ISearchProductsPayload } from '../types/products.types';

export const searchProducts = (payload: ISearchProductsPayload) => action(ActionTypes.SEARCH_PRODUCTS.request, payload);
export const getSearchParams = (payload: ISearchProductsPayload) => {
	return action(ActionTypes.GET_SEARCH_PARAMS.request, payload);
};
export const fetchCompanies = () => action(ActionTypes.FETCH_COMPANIES.request);
export const fetchTags = () => action(ActionTypes.FETCH_TAGS.request);
export const fetchProductsTypes = () => action(ActionTypes.FETCH_PRODUCTS_TYPES.request);
