import expect from 'expect'
import cart from '../../src/reducers/cart'

describe('reducers', () => {
  describe('cart', () => {
    const initialState = {
      cartIds: [],
      cartQuantity: {}
    }

    it('should provide the initial state', () => {
      expect(cart(undefined, {})).toEqual(initialState)
    })

    it('should handle CHECKOUT action', () => {
      expect(cart({}, { type: 'CHECKOUT_REQUEST' })).toEqual(initialState)
    })

    it('should handle ADD_TO_CART action', () => {
      expect(cart(initialState, { type: 'ADD_TO_CART', productId: 1 })).toEqual({
        cartIds: [ 1 ],
        cartQuantity: { 1: 1 }
      })
    })

    describe('when product is already in cart', () => {
      it('should handle ADD_TO_CART action', () => {
        const state = {
          cartIds: [ 1, 2 ],
          cartQuantity: { 1: 1, 2: 1 }
        }

        expect(cart(state, { type: 'ADD_TO_CART', productId: 2 })).toEqual({
          cartIds: [ 1, 2 ],
          cartQuantity: { 1: 1, 2: 2 }
        })
      })
    })
  })
})
