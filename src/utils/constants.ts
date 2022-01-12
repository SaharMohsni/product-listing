export const ASC_PRICE = 0;
export const DESC_PRICE = 1;
export const NEW_ADDED = 2;
export const OLD_ADDED = 3;

export const SortCriteria = {
	[ASC_PRICE]: { key: 'price', sortType: 'asc' },
	[DESC_PRICE]: { key: 'price', sortType: 'desc' },
	[NEW_ADDED]: { key: 'added', sortType: 'desc' },
	[OLD_ADDED]: { key: 'added', sortType: 'desc' }
};

export const LIMIT_PRODUCTS_BY_Page = 16;
