import { ISearchProductsPayload } from '../features/types/products.types';
import { isEmpty } from 'lodash';
import queryString from 'query-string';

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
	if (isEmpty(page) && isEmpty(sortVariable) && isEmpty(sortType)) {
		query = {};
	} else if (isEmpty(page) && (!isEmpty(sortVariable) && !isEmpty(sortType))) {
		query = { ...params, page: '1' };
	} else if (isEmpty(sortVariable) || isEmpty(sortType)) {
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

export const generateQueryFromPathname = (pathName: string) => queryString.parse(getURLCleanPath(pathName));
