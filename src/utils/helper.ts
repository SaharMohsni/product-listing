/**
 *
 * Global helper
 *
 */

import { ISearchProductsPayload } from '../features/types/products.types';
import { isEmpty } from 'lodash';
import queryString from 'query-string';

// get navigation pathname
export const getURLCleanPath = (pathname: string) => pathname.split('/')[1];

// generate a query from pathname
export const generateQueryFromPathname = (pathName: string) => {
	return queryString.parse(getURLCleanPath(pathName));
};

export const isString = (data: any) => typeof data === 'string';

export const isObject = (data: any) => typeof data === 'object';

/**** create a structure needed for the product search (get with keys) ****/
export const createNewStructureData = (queryValues: any) => {
	let objectKey = {};
	let key = '';
	let res = [];
	for (var el of queryValues) {
		for (var subEl of el) {
			if (typeof subEl !== 'string') {
				key = el[0];
				objectKey = { key: el[0], data: el[1] };
			}
		}
		res.push({
			objectKey,
			key
		});
	}

	return res;
};

export const convertObjectKey = (query: any) => {
	let queryValues = Object.entries(query);

	let newStructure = createNewStructureData(queryValues);
	let newObj = { ...query };
	for (let el of newStructure) {
		let { key, objectKey } = el;
		newObj[key] = newObj['objectKey'];
		newObj[key] = objectKey;
	}

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

/********/

// serialize the navigation query params
export const handleNavigationQuery = (params: ISearchProductsPayload) => {
	return `${serialize(params)}`;
};

// Format data of type array to get id value object
export const formatArrayData = (data: any) => {
	return data.map((el: any) => {
		if (isString(el)) {
			let slug = el.split(' ').join('-');
			return { id: slug, value: el };
		}
		return { id: el.slug, value: el.name };
	});
};
