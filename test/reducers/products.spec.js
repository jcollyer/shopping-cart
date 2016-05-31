import expect from 'expect'
import products from '../../src/reducers/products'

describe('reducers', () => {
  describe('products', () => {

    it('should handle ADD_TO_CART action', () => {
      const state = {
        getProductsById: {
          1: {
            id: 1,
            type: 'Milk',
            description: 'Tasty milk chocolate'
          }
        }
      }

      expect(products(state, { type: 'ADD_TO_CART', productId: 1 })).toEqual({
        getProductsById: {
          1: {
            id: 1,
            type: 'Milk',
            description: 'Tasty milk chocolate'
          }
        }
      })
    })
  })
})
