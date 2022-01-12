import {ProductsActions,ProductsState} from "../types/products.types";
import produce from "immer";


// The initial state of the reducer
export const initialState: ProductsState = {
 data :{productsList:[]},
 local : {}
};

const productListingReducer = (
  state: ProductsState = initialState,
  action: ProductsActions
): ProductsState =>
  produce(state, (draft: ProductsState) => {
    switch (action) {
    
  
    }
  });

export default productListingReducer;