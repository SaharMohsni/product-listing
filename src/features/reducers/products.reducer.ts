import produce from 'immer';
import ActionTypes from '../constants/products.constants';
import { ProductsActions, ProductsState } from '../types/products.types';

// The initial state of the reducer
export const initialState: ProductsState = {
	data: { productsList: [] },
	local: {
		loading: {
			fetchingProduct: false,
			fetchingProductByPage: false
		},
		errors: {
			fetchingProduct: '',
			fetchingProductByPage: ''
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
		}
	});

export default productListingReducer;
