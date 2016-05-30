import { combineReducers } from 'redux';
import products, { getProductsById } from './products';
import cart from './cart';
import modal from './modal';

export const rootReducer = combineReducers({
  cart,
  products,
  modal
})

export function getCartProducts(state) {
  if(state.cart.cartIds.length > 0) {
    return getProductsById(state.cart.cartIds)
  } else {
    return []
  }
}
