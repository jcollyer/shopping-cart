import React, { Component } from 'react'
import Product from './product'
import Cart from './cart'
import Modal from './modal'
import { connect } from 'react-redux'
import { addToCart, showModal } from '../actions'

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
        <button onClick={() => this.props.showModal(true)}>show cart</button>
        <Modal />
      </div>
    )
  }
}


const mapStateToProps = (appState) => {
  return {
    products: appState.products
  }
}

export default connect(mapStateToProps, {addToCart, showModal})(Products)
