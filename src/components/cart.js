import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItem from './cart-item'
import { getCartProducts, getTotal } from '../reducers'
import { checkout } from '../actions'

class Cart extends Component {
  render() {
    const { cartProducts, cartQuantity, cartTotal } = this.props
    const hasProducts = cartProducts.length > 0
    // const emptyCart = ( <em>Your cart is empty.</em> )
    // const nodes = !hasProducts ? emptyCart : {cartItems}

    return (
      <div id="shopping-cart">
        <div id="cart-empty" className={hasProducts ? "hide" : ""}>
          <h4>Your cart is empty.</h4>
        </div>
        <div className={hasProducts ? "" : "hide"}>
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
          <div id="cart-total">Total: ${cartTotal}</div>
          <button className="cart-button" onClick={() => this.props.checkout()}>Checkout</button>
        </div>
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

export default connect(mapStateToProps, { checkout })(Cart)
