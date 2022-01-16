import { IInBasketProduct, IProduct, ISearchProductsPayload } from '../features/types/products.types';

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

export const calculateProductCost = (quantity: number, unitPrice: number) => {
	return Number((quantity * unitPrice).toFixed(3));
};

export const handleAddProduct = (localState: any, data: IProduct) => {
	let productsList = [
		...localState.productsList,
		{
			productData: data,
			quantity: 1
		}
	];
	let totPrice = handleBasketTotalPrice(productsList);
	return {
		productsList,
		totalPrice: totPrice
	};
};
const incrementQuantity = (quantity: number) => {
	return (quantity += 1);
};
export const handleIncrementQuantity = (localState: any, payload: string) => {
	let newProductsList = localState.productsList.map((product: IInBasketProduct) => {
		let newProductData = {};
		if (product.productData.slug === payload) {
			newProductData = { ...product, quantity: incrementQuantity(product.quantity) };
		} else {
			newProductData = product;
		}

		return newProductData;
	});
	let totPrice = handleBasketTotalPrice(newProductsList);
	return { newProductsList, totPrice };
};

export const handleBasketTotalPrice = (productsList: any) => {
	let totalPrice = 0;
	productsList.forEach((product: IInBasketProduct) => {
		totalPrice += calculateProductCost(product.quantity, product.productData.price);
	});
	return Number(totalPrice.toFixed(3));
};
