import { initialState } from '../api/initial-state'

export default function products(state = initialState.chocolates, action) {
  return state
}

export function getProductsById(cartProductIds, state = initialState.chocolates){
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
