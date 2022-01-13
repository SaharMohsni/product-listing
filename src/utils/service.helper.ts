import { isEmpty } from 'lodash';
export const addSortToUrl = (variable: string | undefined, sortType: string | undefined) => {
	if (!isEmpty(variable) && !isEmpty(sortType)) {
		return `&_sort=${variable}&_order=${sortType}`;
	} else return '';
};
