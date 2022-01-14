import { isEmpty } from 'lodash';
import { ISearchProductsPayload } from '../../../../features/types/products.types';
export const handleRadioButtonValues = (value: string) => {
	switch (value) {
		case '0':
			return { sortVariable: 'price', sortType: 'asc' };
		case '1':
			return { sortVariable: 'price', sortType: 'desc' };

		case '2':
			return { sortVariable: 'added', sortType: 'asc' };

		case '3':
			return { sortVariable: 'added', sortType: 'desc' };
		default:
			return { sortVariable: '', sortType: '' };
	}
};

export const handleRadioGroupValue = (searchParams: ISearchProductsPayload) => {
	const { sortVariable, sortType } = searchParams;
	if (isEmpty(sortVariable)) {
		return;
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
