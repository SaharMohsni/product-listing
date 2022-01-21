/**
 *
 * Products constants
 *
 */

import { generateActionTypes } from '../../utils/generic-saga';

const root = 'app/Products/';

const SEARCH_PRODUCTS = generateActionTypes(root, 'SEARCH_PRODUCTS'); //fetch products by key search

const FETCH_COMPANIES = generateActionTypes(root, 'FETCH_COMPANIES'); //Fetch companies

const FETCH_TAGS = generateActionTypes(root, 'FETCH_TAGS'); //Fetch tags: added

const FETCH_PRODUCTS_TYPES = generateActionTypes(root, 'FETCH_PRODUCTS_TYPES'); //Fetch products type: added

const ADD_PRODUCT = generateActionTypes(root, 'ADD_PRODUCT'); //Add product to the basket

const INCREMENT_PRODUCT_QUANTITY = generateActionTypes(root, 'INCREMENT_PRODUCT_QUANTITY'); //Increment products quantity on the basket

const DECREMENT_PRODUCT_QUANTITY = generateActionTypes(root, 'DECREMENT_PRODUCT_QUANTITY'); //Decrement products quantity on the basket

const constants = {
	SEARCH_PRODUCTS,
	FETCH_COMPANIES,
	FETCH_TAGS,
	FETCH_PRODUCTS_TYPES,
	ADD_PRODUCT,
	INCREMENT_PRODUCT_QUANTITY,
	DECREMENT_PRODUCT_QUANTITY
};
export default constants;
