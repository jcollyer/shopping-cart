import { initialState } from '../api/initial-state'
import { ADD_TO_CART } from '../constants/action-types'

export default function products(state = initialState.chocolates, action) {
  return state
}

export function getProductsById(cartProductIds, state = initialState.chocolates) {
  const cartProducts = [];
  cartProductIds.map((id) => {
    state.map((p) => {
      if(p.id === id){
        cartProducts.push(p)
      }
    })
  })
  return cartProducts;
}

export function getProductsTotal(state = initialState.cartTotal, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return state
    default:
      return state
  }
}
