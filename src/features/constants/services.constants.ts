/**
 *
 * Services constants : URL
 *
 */
import { ISearchProductsPayload } from '../types/products.types';
import {
	addFilterByArrayListToUrl,
	addFilterByStringToUrl,
	addFilterToUrl,
	addSortToUrl
} from '../../utils/service.helper';

const URL = {
	baseApiUrl: () => (process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : ''),
	products: {
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
		fetchTags: () => `/tags` //added
	},
	productsTypes: {
		fetchProductsTypes: () => `/products-types` //added
	}
};

export default URL;
