import { takeEvery, put, call } from 'redux-saga/effects';
import { IResponseGenerator, ISearchProductsAction } from '../types/products.types';
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
