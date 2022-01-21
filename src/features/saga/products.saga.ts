/**
 * Products saga
 */
import { takeEvery, put, call, delay } from 'redux-saga/effects';
import {
	IResponseGenerator,
	ISearchProductsAction,
	IActionWithoutPayload,
	IAddProductAction,
	IActionWithPayload
} from '../types/products.types';
import * as api from '../services/products.services';
import ActionTypes from '../constants/products.constants';
import { DELAY_TIME } from '../../utils/constants';

export function* searchProducts(action: ISearchProductsAction) {
	try {
		yield delay(DELAY_TIME);
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

export function* decrementProductQuantity(action: IActionWithPayload) {
	try {
		yield put({
			type: ActionTypes.DECREMENT_PRODUCT_QUANTITY.success,
			payload: action.payload
		});
	} catch (e) {
		yield put({ type: ActionTypes.DECREMENT_PRODUCT_QUANTITY.failure, e });
	}
}

export function* decrementProductQuantityWatcher() {
	yield takeEvery(ActionTypes.DECREMENT_PRODUCT_QUANTITY.request, decrementProductQuantity);
}
