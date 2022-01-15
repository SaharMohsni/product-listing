import { ISearchProductsPayload } from '../features/types/products.types';
import { isEmpty } from 'lodash';
import queryString from 'query-string';

export const getURLCleanPath = (pathname: string) => pathname.split('/')[1];
export const generateQueryFromPathname = (pathName: string) => {
	return queryString.parse(getURLCleanPath(pathName));
};

export const isString = (data: any) => typeof data === 'string';
export const isObject = (data: any) => typeof data === 'object';

export const createNewStructureData = (queryValues: any) => {
	let objectKey = {};
	let key = '';
	for (var el of queryValues) {
		for (var subEl of el) {
			if (isObject(subEl)) {
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
			if (!isEmpty(obj[p])) {
				if (!isString(obj[p])) {
					for (var el in obj[p].data) {
						str.push(encodeURIComponent(p) + '=' + obj[p].data[el]);
					}
				} else {
					str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
				}
			}
		}
	return str.join('&');
};

export const handleNavigationQuery = (params: ISearchProductsPayload) => {
	return `${serialize(params)}`;
};

export const formatData = (data: any) => {
	return data.map((el: any) => {
		if (isString(el)) {
			let slug = el.split(' ').join('-');
			return { id: slug, value: el };
		}
		return { id: el.slug, value: el.name };
	});
};
