import { isEmpty } from 'lodash';
import { ISearchProductsPayload } from '../../../features/types/products.types';

export const handlePaginationValue = (searchParams: ISearchProductsPayload) => {
	const { page } = searchParams;
	if (isEmpty(page)) return 1;
	else return Number(page);
};
