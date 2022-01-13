import { generateActionTypes } from '../../utils/generic-saga';

const root = 'app/Products/';

const GET_PRODUCTS = generateActionTypes(root, 'GET_PRODUCTS');
const SEARCH_PRODUCTS = generateActionTypes(root, 'SEARCH_PRODUCTS');
const GET_SEARCH_PARAMS = generateActionTypes(root, 'GET_SEARCH_PARAMS');

const FETCH_COMPANIES = generateActionTypes(root, 'FETCH_COMPANIES');

const constants = {
	GET_PRODUCTS,
	SEARCH_PRODUCTS,
	GET_SEARCH_PARAMS,
	FETCH_COMPANIES
};
export default constants;
