import React, { Component } from 'react'

export default (props) => {
  const { id, description, price } = props
  return (
    <ul>
      <li>{description}</li>
      <li>{price}</li>
      <button onClick={props.onAddToCartClicked}>Add to cart</button>
    </ul>
  )
}
