import React, { Component } from 'react'
import { connect } from 'react-redux'

class Products extends Component {

  render() {
    const { products } = this.props
    // debugger;
    return (
      <p>
      products
      { products.map((p) => {
        return (
          <li>{p.price}</li>
        )
      }) }

      </p>
    )
  }
}

const mapStateToProps = (appState) => {
  return {
    products: appState.products
  }
}

export default connect(mapStateToProps)(Products)
