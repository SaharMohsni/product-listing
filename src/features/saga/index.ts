import { all } from 'redux-saga/effects';

import {
	searchProductsWatcher,
	getSearchParamsWatcher,
	fetchCompaniesWatcher,
	fetchTagsWatcher
} from './products.saga';

// single entry point to start all Sagas at once
export default function* rootSaga() {
	yield all([ searchProductsWatcher(), getSearchParamsWatcher(), fetchCompaniesWatcher(), fetchTagsWatcher() ]);
}
