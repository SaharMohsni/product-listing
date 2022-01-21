export const ASC_PRICE = 0;
export const DESC_PRICE = 1;
export const NEW_ADDED = 2;
export const OLD_ADDED = 3;

export const LIMIT_PRODUCTS_BY_Page = 16;

export const sortDataMessages = {
	[ASC_PRICE]: 'Price low to high',
	[DESC_PRICE]: 'Price high to low',
	[NEW_ADDED]: 'New to old',
	[OLD_ADDED]: 'Old to new'
};

export const MIN_PRODUCT_QUANTITY_IN_BASKET = 1;
export const FAKE_DATA = Array.from({ length: 16 }).map(() => {}).map((el, i) => ({
	tags: [ '' ],
	price: i,
	name: 'string',
	description: 'string',
	slug: 'string',
	added: i,
	manufacturer: i,
	itemType: 'string'
}));
export const DELAY_TIME = 3000;
