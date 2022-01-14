import { ISearchProductsPayload } from '../features/types/products.types';
import { isEmpty } from 'lodash';
import queryString from 'query-string';

export const getURLCleanPath = (pathname: string) => pathname.split('/')[1];
export const generateQueryFromPathname = (pathName: string) => {
	return queryString.parse(getURLCleanPath(pathName));
};

export const createNewStructureData = (queryValues: any) => {
	let objectKey = {};
	let key = '';
	for (var el of queryValues) {
		for (var subEl of el) {
			if (typeof subEl === 'object') {
				key = el[0];
				objectKey = { key: el[0], data: el[1] };
			}
		}
	}
	return {
		objectKey,
		key
	};
};
export const convertObjectKey = (query: any) => {
	let queryValues = Object.entries(query);
	let { key, objectKey } = createNewStructureData(queryValues);
	let newObj = { ...query };
	newObj[key] = newObj['objectKey'];
	newObj[key] = objectKey;
	return newObj;
};
export const serialize = function(obj: any) {
	var str = [];

	for (var p in obj)
		if (obj.hasOwnProperty(p)) {
			if (typeof obj[p] !== 'string') {
				for (var el in obj[p].data) {
					str.push(encodeURIComponent(p) + '=' + obj[p].data[el]);
				}
			} else {
				str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
			}
		}
	return str.join('&');
};

export const handleNavigationQuery = (params: ISearchProductsPayload) => {
	let { page, sortVariable, sortType, manufacturer } = params;
	let query = params;
	if (isEmpty(page) && isEmpty(sortVariable) && isEmpty(manufacturer)) {
		query = {};
	} else if (isEmpty(page)) {
		if (!isEmpty(sortVariable) && !isEmpty(manufacturer)) {
			query = {
				page: '1',
				sortVariable: sortVariable,
				sortType: sortType,
				manufacturer: manufacturer
			};
		} else if (!isEmpty(sortVariable) && manufacturer && isEmpty(manufacturer)) {
			query = { page: '1', sortVariable: sortVariable, sortType: sortType };
		} else if (!isEmpty(manufacturer) && isEmpty(sortVariable)) {
			query = { page: '1', manufacturer: manufacturer };
		}
	} else if (!isEmpty(page)) {
		if (isEmpty(sortVariable) && isEmpty(manufacturer)) {
			query = {
				page: page
			};
		} else if (isEmpty(sortVariable) && !isEmpty(manufacturer)) {
			query = { page: '1', manufacturer: manufacturer };
		} else if (!isEmpty(sortVariable) && isEmpty(manufacturer)) {
			query = { page: '1', sortVariable: sortVariable };
		}
	} else {
		query = {
			...params
		};
	}

	return `${serialize(query)}`;
};
