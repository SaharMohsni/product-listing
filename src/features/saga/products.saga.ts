import { takeEvery, put, call } from 'redux-saga/effects';
import {
	IGetSearchParamsAction,
	IResponseGenerator,
	ISearchProductsAction,
	IActionWithoutPayload,
	IAddProductAction,
	IActionWithPayload
} from '../types/products.types';
import * as api from '../services/products.services';
import ActionTypes from '../constants/products.constants';

export function* searchProducts(action: ISearchProductsAction) {
	try {
		const results: IResponseGenerator = yield call(api.searchProducts, action.payload);
		const productsCount: IResponseGenerator = yield call(api.getProductsCount);
		yield put({
			type: ActionTypes.SEARCH_PRODUCTS.success,
			data: results,
			productsCount
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

export function* fetchCompanies(action: IActionWithoutPayload) {
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

export function* fetchTags(action: IActionWithoutPayload) {
	const results: IResponseGenerator = yield call(api.fetchTags);

	try {
		yield put({
			type: ActionTypes.FETCH_TAGS.success,
			data: results
		});
	} catch (e) {
		yield put({ type: ActionTypes.FETCH_TAGS.failure, e });
	}
}

export function* fetchTagsWatcher() {
	yield takeEvery(ActionTypes.FETCH_TAGS.request, fetchTags);
}

export function* fetchProductsTypes(action: IActionWithoutPayload) {
	const results: IResponseGenerator = yield call(api.fetchProductsTypes);
	try {
		yield put({
			type: ActionTypes.FETCH_PRODUCTS_TYPES.success,
			data: results
		});
	} catch (e) {
		yield put({ type: ActionTypes.FETCH_PRODUCTS_TYPES.failure, e });
	}
}

export function* fetchProductsTypesWatcher() {
	yield takeEvery(ActionTypes.FETCH_PRODUCTS_TYPES.request, fetchProductsTypes);
}

export function* addProduct(action: IAddProductAction) {
	try {
		yield put({
			type: ActionTypes.ADD_PRODUCT.success,
			payload: action.payload
		});
	} catch (e) {
		yield put({ type: ActionTypes.ADD_PRODUCT.failure, e });
	}
}

export function* addProductWatcher() {
	yield takeEvery(ActionTypes.ADD_PRODUCT.request, addProduct);
}

export function* incrementProductQuantity(action: IActionWithPayload) {
	try {
		yield put({
			type: ActionTypes.INCREMENT_PRODUCT_QUANTITY.success,
			payload: action.payload
		});
	} catch (e) {
		yield put({ type: ActionTypes.INCREMENT_PRODUCT_QUANTITY.failure, e });
	}
}

export function* incrementProductQuantityWatcher() {
	yield takeEvery(ActionTypes.INCREMENT_PRODUCT_QUANTITY.request, incrementProductQuantity);
}
