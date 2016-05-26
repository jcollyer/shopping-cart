import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from './product'
class Products extends Component {

  render() {
    const { products } = this.props
    return (
      <div>
        <h3>products:</h3>
        { products.map((p) => {
          return (
            <div  key={p.id}>
              <Product product={p} />
            </div>
          )
        }) }

      </div>
    )
  }
}

const mapStateToProps = (appState) => {
  return {
    products: appState.products
  }
}

export default connect(mapStateToProps)(Products)
