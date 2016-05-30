import React, { Component } from 'react'

export default (props) => {
  const { id, description, price, type } = props
  return (
    <ul>
      <li>{type}</li>
      <li>{description}</li>
      <li>{price}</li>
      <button onClick={props.onAddToCartClicked}>Add to cart</button>
    </ul>
  )
}
