import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showModal } from '../actions'
import Cart from './cart'

class Modal extends Component {
  render() {
    const { modal } = this.props
      return (
        <div id="cart">
          <h2>Cart</h2>
          <i className="fa fa-times-circle" onClick={() => this.props.showModal(false)}></i>
          <Cart />
        </div>
      )
  }
}


const mapStateToProps = (appState) => {
  return {
    modal: appState.modal
  }
}

export default connect(mapStateToProps, { showModal })(Modal)
