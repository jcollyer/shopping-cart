import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from './product'

class Cart extends Component {
  render() {
    const { cart, products } = this.props
    const hasProducts = cart.cartIds.length > 0
    const nodes = !hasProducts ?
      <em>Please add some products to cart.</em> :
      cart.cartIds.map((id, i) => {
        return <div key={id}>{products[id - 1].type} x{cart.cartQuantity[id]}</div>
      }
    )

    return (
      <div>
        <h3>Your Cart</h3>
        <div>{nodes}</div>
      </div>
    )
  }
}

const mapStateToProps = (appState) => {
  return {
    cart: appState.cart,
    products: appState.products
  }
}

export default connect(mapStateToProps)(Cart)
