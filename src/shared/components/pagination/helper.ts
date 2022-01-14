import { isEmpty } from 'lodash';
import { ISearchProductsPayload } from '../../../features/types/products.types';

export const handlePaginationValue = (searchParams: ISearchProductsPayload) => {
	const { page } = searchParams;
	console.log('🚀 ~ file: helper.ts ~ line 6 ~ handlePaginationValue ~ page', page);
	if (isEmpty(page)) return 1;
	else return Number(page);
};
