/**
 *
 * Sorting local helper
 *
 */
import { isEmpty } from 'lodash';
import { ISearchProductsPayload } from '../../../../features/types/products.types';
import { ASC_PRICE, DEFAULT, DESC_PRICE, NEW_ADDED, OLD_ADDED } from '../../../../utils/constants';

export const handleRadioButtonValues = (value: number) => {
	switch (value) {
		case DEFAULT:
			return {};
		case ASC_PRICE:
			return { sortVariable: 'price', sortType: 'asc' };
		case DESC_PRICE:
			return { sortVariable: 'price', sortType: 'desc' };

		case NEW_ADDED:
			return { sortVariable: 'added', sortType: 'asc' };

		case OLD_ADDED:
			return { sortVariable: 'added', sortType: 'desc' };
		default:
			return { sortVariable: '', sortType: '' };
	}
};

export const handleRadioGroupValue = (searchParams: ISearchProductsPayload) => {
	const { sortVariable, sortType } = searchParams;
	if (isEmpty(sortVariable)) {
		return 4;
	}
	if (sortVariable === 'price') {
		if (sortType === 'asc') return 0;
		if (sortType === 'desc') return 1;
	}
	if (sortVariable === 'added') {
		if (sortType === 'asc') return 2;
		if (sortType === 'desc') return 3;
	}
};
