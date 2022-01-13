import { ISearchProductsPayload } from '../features/types/products.types';
import { isEmpty } from 'lodash';
export const getURLCleanPath = (pathname: string) => pathname.split('/')[1];

export const serialize = function(obj: any) {
	var str = [];
	for (var p in obj)
		if (obj.hasOwnProperty(p)) {
			str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
		}
	return str.join('&');
};

export const handleNavigationQuery = (params: ISearchProductsPayload) => {
	let { page, sortVariable, sortType } = params;
	let query = params;
	if (!isEmpty(params) && (isEmpty(sortVariable) || isEmpty(sortType))) {
		query = {
			page: page
		};
	} else {
		query = {
			...params
		};
	}

	return `${serialize(query)}`;
};
