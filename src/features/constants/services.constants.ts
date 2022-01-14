import { addFilterToUrl, addSortToUrl } from '../../utils/service.helper';
import { ISearchProductsPayload } from '../types/products.types';

const URL = {
	baseApiUrl: () => 'http://localhost:4000',
	products: {
		searchProducts: (payload: ISearchProductsPayload) => {
			return `/items?_page=${payload.page}&_limit=${payload.limit}${addSortToUrl(
				payload.sortVariable,
				payload.sortType
			)}${addFilterToUrl(payload.manufacturer)}`;
		}
	},
	companies: {
		fetchCompanies: () => `/companies`
	}
};

export default URL;
