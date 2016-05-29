import * as types from '../constants/action-types'

export function addToCart(productId) {
  return { type: types.ADD_TO_CART, productId }
}
