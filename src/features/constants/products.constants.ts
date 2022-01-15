import { generateActionTypes } from '../../utils/generic-saga';

const root = 'app/Products/';

const SEARCH_PRODUCTS = generateActionTypes(root, 'SEARCH_PRODUCTS');
const GET_SEARCH_PARAMS = generateActionTypes(root, 'GET_SEARCH_PARAMS');
const FETCH_COMPANIES = generateActionTypes(root, 'FETCH_COMPANIES');
const FETCH_TAGS = generateActionTypes(root, 'FETCH_TAGS');
const constants = {
	SEARCH_PRODUCTS,
	GET_SEARCH_PARAMS,
	FETCH_COMPANIES,
	FETCH_TAGS
};
export default constants;
