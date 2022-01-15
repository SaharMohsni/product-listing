import { generateActionTypes } from '../../utils/generic-saga';

const root = 'app/Products/';

const SEARCH_PRODUCTS = generateActionTypes(root, 'SEARCH_PRODUCTS');
const GET_SEARCH_PARAMS = generateActionTypes(root, 'GET_SEARCH_PARAMS');
const FETCH_COMPANIES = generateActionTypes(root, 'FETCH_COMPANIES');
const FETCH_TAGS = generateActionTypes(root, 'FETCH_TAGS');
const FETCH_PRODUCTS_TYPES = generateActionTypes(root, 'FETCH_PRODUCTS_TYPES');
const constants = {
	SEARCH_PRODUCTS,
	GET_SEARCH_PARAMS,
	FETCH_COMPANIES,
	FETCH_TAGS,
	FETCH_PRODUCTS_TYPES
};
export default constants;
