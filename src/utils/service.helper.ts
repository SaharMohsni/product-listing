import { isEmpty } from 'lodash';
export const addSortToUrl = (variable: string | undefined, sortType: string | undefined) => {
	if (!isEmpty(variable) && !isEmpty(sortType)) {
		return `&_sort=${variable}&_order=${sortType}`;
	} else return '';
};

export const addFilterToUrl = (variable: any | undefined) => {
	let str = [];
	if (variable) {
		for (var el in variable.data) {
			str.push(variable.key + '=' + variable.data[el]);
		}
	}
	return str.join('&');
};
