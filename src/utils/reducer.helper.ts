import { IProduct, ISearchProductsPayload } from '../features/types/products.types';

export const handleSearchParams = (localSearchParams: ISearchProductsPayload, params: ISearchProductsPayload) => {
	let { page, limit, sortVariable, sortType, manufacturer, tags, itemType } = localSearchParams;
	return {
		...localSearchParams,
		page: params.page ? params.page : page,
		limit: params.limit ? params.limit : limit,
		sortVariable: params.sortVariable ? params.sortVariable : sortVariable,
		sortType: params.sortType ? params.sortType : sortType,
		manufacturer: params.manufacturer ? params.manufacturer : manufacturer,
		tags: params.tags ? params.tags : tags,
		itemType: params.itemType ? params.itemType : itemType
	};
};
export const calculateBasketTotalPrice = (totalPrice: number, price: number) => {
	let newTotal = (totalPrice += price);
	return Number(newTotal.toFixed(3));
};
export const handleAddProduct = (localState: any, data: IProduct) => {
	let productsList = [
		...localState.productsList,
		{
			productData: data,
			quantity: 1
		}
	];
	let totalPrice = calculateBasketTotalPrice(localState.totalPrice, data.price);
	return {
		productsList,
		totalPrice
	};
};

export const handleIncrementQuantity = (localState: any, payload: string) => {
	let newState = { ...localState };
	let product = newState.productsList[payload];
	product.quantity += 1;
	return newState;
};
