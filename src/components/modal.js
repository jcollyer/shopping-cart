import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showModal, checkout } from '../actions'
import Cart from './cart'

class Modal extends Component {
  render() {
    const { modal } = this.props
    const showModal = modal.showModal
      return (
        <div className={showModal ? "" : "hide"}>
          <h2>Cart</h2>
          <Cart />
          <button onClick={() => this.props.checkout()}>Checkout</button>
          <button onClick={() => this.props.showModal(false)}>close modal</button>
        </div>
      )
  }
}


const mapStateToProps = (appState) => {
  return {
    modal: appState.modal
  }
}

export default connect(mapStateToProps, { showModal, checkout })(Modal)
