import { combineReducers } from 'redux';
import products, { getProductsById, cartTotal } from './products';
import cart, {cartIds, cartQuantity} from './cart';
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

export function getTotal(state) {
    const itemTotals = []
    state.cart.cartIds.map((id) => {
      itemTotals.push(state.cart.cartQuantity[id] * getProductsById([id])[0].price)
    })

    const total = itemTotals.reduce((a, b) => {
      return a + b
    }, 0);

    return total || 0
}
