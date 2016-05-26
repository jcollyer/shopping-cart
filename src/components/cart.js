import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from './product'

class Cart extends Component {
  render() {
    const { products } = this.props

    const hasProducts = products.length > 0
    const nodes = !hasProducts ?
      <em>Please add some products to cart.</em> :
      products.map(product =>
        <Product
          title={product.description}
          price={product.price}
          key={product.id}/>
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
    products: appState.cart
  }
}

export default connect(mapStateToProps)(Cart)
