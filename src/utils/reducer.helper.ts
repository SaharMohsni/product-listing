/**
 *
 * Reducer helper
 *
 */
import { IInBasketProduct, IProduct } from '../features/types/products.types';
import { MIN_PRODUCT_QUANTITY_IN_BASKET } from './constants';

// Calculate product cost
export const calculateProductCost = (quantity: number, unitPrice: number) => {
	return Number((quantity * unitPrice).toFixed(3));
};

// Calculate total cost
export const handleBasketTotalPrice = (productsList: any) => {
	let totalPrice = 0;
	productsList.forEach((product: IInBasketProduct) => {
		totalPrice += calculateProductCost(product.quantity, product.productData.price);
	});
	return Number(totalPrice.toFixed(3));
};

/*********Add product to the basket *********/
export const handleAddProduct = (localState: any, data: IProduct) => {
	let productsList = [
		...localState.productsList,
		{
			productData: data,
			quantity: MIN_PRODUCT_QUANTITY_IN_BASKET
		}
	];
	let totPrice = handleBasketTotalPrice(productsList);
	return {
		productsList,
		totalPrice: totPrice
	};
};
/***************************/

const incrementQuantity = (quantity: number) => {
	return (quantity += 1);
};
const decrementQuantity = (quantity: number) => {
	if (quantity > 0) {
		return (quantity -= 1);
	}
	return 0;
};

// Increment quantity function
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

// Decrement quantity function
export const handleDecrementQuantity = (localState: any, payload: string) => {
	let newProductsList = localState.productsList.map((product: IInBasketProduct) => {
		let newProductData = { quantity: 0 };
		if (product.productData.slug === payload) {
			let newQuantity = decrementQuantity(product.quantity);
			newProductData = { ...product, quantity: newQuantity };
		} else {
			newProductData = product;
		}

		return newProductData;
	});
	let data = newProductsList.filter((el: any) => el.quantity !== 0);
	let totPrice = handleBasketTotalPrice(data);
	return { productsList: data, totalPrice: totPrice };
};

export const createBasketProductsIdsList = (basketProductsIdsList: string[], slug: string) => {
	return [ ...basketProductsIdsList, slug ];
};
