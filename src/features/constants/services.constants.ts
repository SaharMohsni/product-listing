import { addFilterByArrayListToUrl, addFilterToUrl, addSortToUrl } from '../../utils/service.helper';
import { ISearchProductsPayload } from '../types/products.types';

const URL = {
	baseApiUrl: () => 'http://localhost:4000',
	products: {
		searchProducts: (payload: ISearchProductsPayload) => {
			// ${payload.limit}
			return `/items?_page=${payload.page}&_limit=16${addSortToUrl(
				payload.sortVariable,
				payload.sortType
			)}${addFilterToUrl(payload.manufacturer)}&${addFilterByArrayListToUrl(payload.tags)}`;
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
