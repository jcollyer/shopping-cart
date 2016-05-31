import { initialState } from '../api/initial-state'
import { ADD_TO_CART, CHECKOUT } from '../constants/action-types'

function cartIds(state = initialState.cartIds, action) {
  switch (action.type) {
    case ADD_TO_CART:
      // check if productId is NOT already in cart so not to duplicate
      if (state.indexOf(action.productId) === -1) {
        return [...state, action.productId]
      }
    default:
      return state
  }
}

function cartQuantity(state = initialState.cartQuantity, action ) {
  switch (action.type) {
    case ADD_TO_CART:
      return Object.assign({}, state, {
        [action.productId]: (state[action.productId] || 0) + 1
      })
    default:
      return state
  }
}

export default function cart(state = initialState, action) {
  switch (action.type) {
    case CHECKOUT:
      return initialState
    default:
      return {
        cartIds: cartIds(state.cartIds, action),
        cartQuantity: cartQuantity(state.cartQuantity, action)
      }
  }
}
