import * as types from '../constants/action-types'

export function addToCart(productId) {
  return { type: types.ADD_TO_CART, productId }
}

export function showModal(toggle) {
  return { type: types.SHOW_MODAL, toggle }
}

export function checkout() {
  return { type: types.CHECKOUT }
}
