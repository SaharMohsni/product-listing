import { ActionType } from 'typesafe-actions'
import * as actions from '../actions/products.actions'

/* --- STATE --- */
interface Data {
  productsList: []
}

interface Local {


}
interface IProductsState {
  data: Data
  local: Local
}

/* --- ACTIONS --- */
type productsActions = ActionType<typeof actions>


/* --- EXPORTS --- */

export type ProductsState = IProductsState
export type ProductsActions = productsActions