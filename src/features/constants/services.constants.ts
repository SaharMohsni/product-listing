import {
	addFilterByArrayListToUrl,
	addFilterByStringToUrl,
	addFilterToUrl,
	addSortToUrl
} from '../../utils/service.helper';
import { ISearchProductsPayload } from '../types/products.types';

const URL = {
	baseApiUrl: () => 'http://localhost:4000',
	products: {
		itemsCount: '/total-items-count',
		searchProducts: (payload: ISearchProductsPayload) => {
			return `/items?_page=${payload.page}&_limit=16${addSortToUrl(
				payload.sortVariable,
				payload.sortType
			)}${addFilterToUrl(payload.manufacturer)}&${addFilterByArrayListToUrl(
				payload.tags
			)}&${addFilterByStringToUrl(payload.itemType)}`;
		}
	},
	companies: {
		fetchCompanies: () => `/companies`
	},
	tags: {
		fetchTags: () => `/tags`
	},
	productsTypes: {
		fetchProductsTypes: () => `/products-types`
	}
};

export default URL;
