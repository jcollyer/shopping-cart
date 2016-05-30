import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItem from './cart-item'
import { getCartProducts, getTotal } from '../reducers'

class Cart extends Component {
  render() {
    const { cartProducts, cartQuantity, cartTotal } = this.props
    const hasProducts = cartProducts.length > 0
    const nodes = !hasProducts ?
      <em>Please add some products to cart.</em> :


      cartProducts.map((p) => {
        return <CartItem type={p.type} price={p.price} key={p.id} quantity={cartQuantity[p.id]} />
      }
    )

    return (
      <div>
        <h3>Your Cart</h3>
        <div>{nodes}</div>
        ${cartTotal}
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
