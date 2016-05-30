import React, { Component } from 'react'
import Product from './product'
import Modal from './modal'
import { connect } from 'react-redux'
import { addToCart, showModal } from '../actions'

class Products extends Component {

  render() {
    var productList
    const { products } = this.props

    productList = (
      products.map((p) => {
        return <Product
          description={p.description}
          price={p.price}
          type={p.type}
          onAddToCartClicked={() => this.props.addToCart(p.id)}
          key={p.id} />
      })
    )

    return (
      <div>
        <h3>products:</h3>
        { productList }
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
