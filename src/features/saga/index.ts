/**
 * Combine  Sagas  watcher
 */
import { all } from 'redux-saga/effects';
import {
	searchProductsWatcher,
	fetchCompaniesWatcher,
	fetchTagsWatcher,
	fetchProductsTypesWatcher,
	addProductWatcher,
	incrementProductQuantityWatcher,
	decrementProductQuantityWatcher
} from './products.saga';

// single entry point to start all Sagas at once
export default function* rootSaga() {
	yield all([
		searchProductsWatcher(),
		fetchCompaniesWatcher(),
		fetchTagsWatcher(),
		fetchProductsTypesWatcher(),
		addProductWatcher(),
		incrementProductQuantityWatcher(),
		decrementProductQuantityWatcher()
	]);
}
