import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItem from './cart-item'
import { getCartProducts, getTotal } from '../reducers'

class Cart extends Component {
  render() {
    const { cartProducts, cartQuantity, cartTotal } = this.props
    const hasProducts = cartProducts.length > 0
    // const emptyCart = ( <em>Your cart is empty.</em> )
    // const nodes = !hasProducts ? emptyCart : {cartItems}





    return (
      <div id="shopping-cart">
        <h3>Your Cart</h3>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Qty</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((p) => {
                return <CartItem type={p.type} price={p.price} key={p.id} quantity={cartQuantity[p.id]} />
            })}
          </tbody>
        </table>
        <div id="cart-total">${cartTotal}</div>
      </div>
    )
  }
}

const mapStateToProps = (appState) => {
  return {
    cartProducts: getCartProducts(appState),
    cartTotal: getTotal(appState),
    cartQuantity: appState.cart.cartQuantity
  }
}

export default connect(mapStateToProps)(Cart)
