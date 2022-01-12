import { action } from 'typesafe-actions';
import ActionTypes from '../constants/products.constants';
import { ISearchProductsPayload } from '../types/products.types';

export const searchProducts = (payload: ISearchProductsPayload) => action(ActionTypes.SEARCH_PRODUCTS.request, payload);
