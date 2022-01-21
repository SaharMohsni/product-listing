/**
 *
 * Service helper
 *
 */
import { isEmpty } from 'lodash';
export const addSortToUrl = (variable: string | undefined, sortType: string | undefined) => {
	if (!isEmpty(variable) && !isEmpty(sortType)) {
		return `&_sort=${variable}&_order=${sortType}`;
	}
	return '';
};

export const addFilterToUrl = (variable: any | undefined) => {
	let str = [];
	if (variable && !isEmpty(variable)) {
		for (var el in variable.data) {
			str.push(variable.key + '=' + variable.data[el]);
		}
		return str.join('&');
	}
	return '';
};

export const addFilterByArrayListToUrl = (variable: any | undefined) => {
	let str = [];
	if (variable && !isEmpty(variable)) {
		for (var el in variable.data) {
			str.push(variable.key + '_like=' + variable.data[el]);
		}
		return str.join('&');
	}
	return '';
};

export const addFilterByStringToUrl = (variable: any | undefined) => {
	if (!isEmpty(variable)) {
		return `itemType=${variable}`;
	} else return '';
};
