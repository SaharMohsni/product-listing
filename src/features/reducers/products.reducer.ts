import produce from 'immer';
import { LIMIT_PRODUCTS_BY_Page } from '../../utils/constants';
import { handleSearchParams } from '../../utils/reducer.helper';
import ActionTypes from '../constants/products.constants';
import { ProductsActions, ProductsState } from '../types/products.types';

// The initial state of the reducer
export const initialState: ProductsState = {
	data: {
		productsList: [],
		brandsList: []
	},
	local: {
		searchParams: {
			page: '',
			limit: LIMIT_PRODUCTS_BY_Page.toString(),
			sortVariable: '',
			sortType: '',
			searchedBrandsList: []
		},
		loading: {
			fetchingProduct: false,
			fetchingProductByPage: false,
			getSearchParams: false,
			fetchingCompanies: false
		},
		errors: {
			fetchingProduct: '',
			fetchingProductByPage: '',
			getSearchParams: '',
			fetchingCompanies: ''
		}
	}
};

const productListingReducer = (state: ProductsState = initialState, action: ProductsActions | any): ProductsState =>
	produce(state, (draft: ProductsState) => {
		switch (action.type) {
			//Search products by page with sort and filter
			case ActionTypes.SEARCH_PRODUCTS.request:
				draft.local.loading.fetchingProductByPage = true;
				draft.local.errors.fetchingProductByPage = '';
				break;
			case ActionTypes.SEARCH_PRODUCTS.success:
				draft.local.loading.fetchingProductByPage = false;
				draft.local.errors.fetchingProductByPage = '';
				draft.data.productsList = action.data;
				break;
			case ActionTypes.SEARCH_PRODUCTS.failure:
				draft.local.loading.fetchingProductByPage = false;
				try {
					draft.local.errors.fetchingProductByPage = action.errors.response.data;
				} catch (e) {
					draft.local.errors.fetchingProductByPage = 'Server error';
				}
				break;
			//Search products by page with sort and filter
			case ActionTypes.GET_SEARCH_PARAMS.request:
				draft.local.loading.getSearchParams = true;
				draft.local.errors.getSearchParams = '';
				break;
			case ActionTypes.GET_SEARCH_PARAMS.success:
				draft.local.loading.getSearchParams = false;
				draft.local.errors.getSearchParams = '';
				draft.local.searchParams = handleSearchParams(state.local.searchParams, action.payload);
				break;
			case ActionTypes.GET_SEARCH_PARAMS.failure:
				draft.local.loading.getSearchParams = false;
				try {
					draft.local.errors.getSearchParams = action.errors.response.data;
				} catch (e) {
					draft.local.errors.getSearchParams = 'Server error';
				}
				break;
			//Fetch companies
			case ActionTypes.FETCH_COMPANIES.request:
				draft.local.loading.fetchingCompanies = true;
				draft.local.errors.fetchingCompanies = '';
				break;
			case ActionTypes.FETCH_COMPANIES.success:
				draft.local.loading.fetchingCompanies = false;
				draft.local.errors.fetchingCompanies = '';
				draft.data.brandsList = action.data;
				break;
			case ActionTypes.FETCH_COMPANIES.failure:
				draft.local.loading.fetchingCompanies = false;
				try {
					draft.local.errors.fetchingCompanies = action.errors.response.data;
				} catch (e) {
					draft.local.errors.fetchingCompanies = 'Server error';
				}
				break;
		}
	});

export default productListingReducer;
