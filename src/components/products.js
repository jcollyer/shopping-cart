import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from './product'
import { addToCart } from '../actions'
import Cart from './cart'

class Products extends Component {
  render() {
    var productList
    const { products } = this.props
    productList = (
      products.map((p) => {
        return <Product description={p.description} price={p.price} onAddToCartClicked={() => this.props.addToCart(p.id)} key={p.id} />
      })
    )

    return (
      <div>
        <h3>products:</h3>
        { productList }
        <Cart />
      </div>
    )
  }
}

const mapStateToProps = (appState) => {
  return {
    products: appState.products
  }
}

export default connect(mapStateToProps, {addToCart})(Products)
