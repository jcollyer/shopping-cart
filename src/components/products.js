import React, { Component } from 'react'
import Product from './product'
import Modal from './modal'
import { connect } from 'react-redux'
import { addToCart, showModal } from '../actions'

class Products extends Component {

  render() {
    var productList
    const { products, modal } = this.props
    const showModal = modal.showModal;
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
      <div id="container">
        <div id="cart-panel" className={ showModal ? "expand" : ""}>
          <div className={ showModal ? "hide" : ""} onClick={() => this.props.showModal(true)}>
            <i className="fa fa-shopping-cart"></i>
          </div>
          <div className={ showModal ? "" : "hide"}><Modal /></div>
        </div>
        <h1>SSCT</h1>
        <h4>Sugar Sweet Chocolate Treats </h4>
        <h2>Menu</h2>
        <table id="products-table">
          <thead>
            <tr>
              <th width="100px">Type</th>
              <th width="100px">Price $</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { productList }
          </tbody>
        </table>
      </div>
    )
  }
}


const mapStateToProps = (appState) => {
  return {
    products: appState.products,
    modal: appState.modal
  }
}

export default connect(mapStateToProps, {addToCart, showModal})(Products)
