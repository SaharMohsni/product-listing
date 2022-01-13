import { action } from 'typesafe-actions';
import ActionTypes from '../constants/products.constants';
import { ISearchProductsPayload } from '../types/products.types';

export const searchProducts = (payload: ISearchProductsPayload) => action(ActionTypes.SEARCH_PRODUCTS.request, payload);
export const getSearchParams = (payload: ISearchProductsPayload) => {
	return action(ActionTypes.GET_SEARCH_PARAMS.request, payload);
};
