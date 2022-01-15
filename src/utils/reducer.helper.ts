import { ISearchProductsPayload } from '../features/types/products.types';

export const handleSearchParams = (localSearchParams: ISearchProductsPayload, params: ISearchProductsPayload) => {
	let { page, limit, sortVariable, sortType, manufacturer, tags } = localSearchParams;
	return {
		...localSearchParams,
		page: params.page ? params.page : page,
		limit: params.limit ? params.limit : limit,
		sortVariable: params.sortVariable ? params.sortVariable : sortVariable,
		sortType: params.sortType ? params.sortType : sortType,
		manufacturer: params.manufacturer ? params.manufacturer : manufacturer,
		tags: params.tags ? params.tags : tags
	};
};
