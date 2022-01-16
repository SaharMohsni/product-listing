import { generateActionTypes } from '../../utils/generic-saga';

const root = 'app/Products/';

const SEARCH_PRODUCTS = generateActionTypes(root, 'SEARCH_PRODUCTS');
const GET_SEARCH_PARAMS = generateActionTypes(root, 'GET_SEARCH_PARAMS');
const FETCH_COMPANIES = generateActionTypes(root, 'FETCH_COMPANIES');
const FETCH_TAGS = generateActionTypes(root, 'FETCH_TAGS');
const FETCH_PRODUCTS_TYPES = generateActionTypes(root, 'FETCH_PRODUCTS_TYPES');
const ADD_PRODUCT = generateActionTypes(root, 'ADD_PRODUCT');
const INCREMENT_PRODUCT_QUANTITY = generateActionTypes(root, 'INCREMENT_PRODUCT_QUANTITY');
const DECREMENT_PRODUCT_QUANTITY = generateActionTypes(root, 'DECREMENT_PRODUCT_QUANTITY');
const constants = {
	SEARCH_PRODUCTS,
	GET_SEARCH_PARAMS,
	FETCH_COMPANIES,
	FETCH_TAGS,
	FETCH_PRODUCTS_TYPES,
	ADD_PRODUCT,
	INCREMENT_PRODUCT_QUANTITY,
	DECREMENT_PRODUCT_QUANTITY
};
export default constants;
