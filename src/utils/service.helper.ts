import { isEmpty } from 'lodash';
export const addSortToUrl = (variable: string, sortType: string) => {
	if (!isEmpty(variable) && !isEmpty(sortType)) {
		return `&_sort=${variable}&_order=${sortType}`;
	} else return '';
};
