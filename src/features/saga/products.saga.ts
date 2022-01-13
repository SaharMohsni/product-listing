import { takeEvery, put, call } from 'redux-saga/effects';
import { IGetSearchParamsAction, IResponseGenerator, ISearchProductsAction } from '../types/products.types';
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
