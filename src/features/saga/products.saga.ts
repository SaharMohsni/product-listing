import { takeEvery, put, call } from 'redux-saga/effects';
import {
	IFetchCompaniesAction,
	IGetSearchParamsAction,
	IResponseGenerator,
	ISearchProductsAction,
	IFetchTagsAction
} from '../types/products.types';
import * as api from '../services/products.services';
import ActionTypes from '../constants/products.constants';

export function* searchProducts(action: ISearchProductsAction) {
	try {
		const results: IResponseGenerator = yield call(api.searchProducts, action.payload);
		yield put({
			type: ActionTypes.SEARCH_PRODUCTS.success,
			data: results
		});
	} catch (e) {
		yield put({ type: ActionTypes.SEARCH_PRODUCTS.failure, e });
	}
}

export function* searchProductsWatcher() {
	yield takeEvery(ActionTypes.SEARCH_PRODUCTS.request, searchProducts);
}

export function* getSearchParams(action: IGetSearchParamsAction) {
	try {
		yield put({
			type: ActionTypes.GET_SEARCH_PARAMS.success,
			payload: action.payload
		});
	} catch (e) {
		yield put({ type: ActionTypes.GET_SEARCH_PARAMS.failure, e });
	}
}

export function* getSearchParamsWatcher() {
	yield takeEvery(ActionTypes.GET_SEARCH_PARAMS.request, getSearchParams);
}

export function* fetchCompanies(action: IFetchCompaniesAction) {
	try {
		const results: IResponseGenerator = yield call(api.fetchCompanies);
		yield put({
			type: ActionTypes.FETCH_COMPANIES.success,
			data: results
		});
	} catch (e) {
		yield put({ type: ActionTypes.FETCH_COMPANIES.failure, e });
	}
}

export function* fetchCompaniesWatcher() {
	yield takeEvery(ActionTypes.FETCH_COMPANIES.request, fetchCompanies);
}
let tagsFakeData = [ 'Beach', 'Ocean', 'Water', 'Animal', 'Bear', 'Road', 'Rocks', 'Rust' ];

export function* fetchTags(action: IFetchTagsAction) {
	// const results: IResponseGenerator = yield call(api.fetchTags);

	try {
		yield put({
			type: ActionTypes.FETCH_TAGS.success,
			data: tagsFakeData
		});
	} catch (e) {
		yield put({ type: ActionTypes.FETCH_TAGS.failure, e });
	}
}

export function* fetchTagsWatcher() {
	yield takeEvery(ActionTypes.FETCH_TAGS.request, fetchTags);
}
let typesFakeData = [ 'mug', 'shirt', 'clothes' ];

export function* fetchProductsTypes(action: IFetchTagsAction) {
	// const results: IResponseGenerator = yield call(api.fetchProductsTypes);

	try {
		yield put({
			type: ActionTypes.FETCH_PRODUCTS_TYPES.success,
			data: typesFakeData
		});
	} catch (e) {
		yield put({ type: ActionTypes.FETCH_PRODUCTS_TYPES.failure, e });
	}
}

export function* fetchProductsTypesWatcher() {
	yield takeEvery(ActionTypes.FETCH_PRODUCTS_TYPES.request, fetchTags);
}
