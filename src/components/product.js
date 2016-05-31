import React, { Component } from 'react'

export default (props) => {
  const { id, description, price, type } = props
  return (
    <tr>
      <td width="100px">{type}</td>
      <td width="100px">{price}</td>
      <td className="description">{description}</td>
      <td><button className="fancy-button" onClick={props.onAddToCartClicked}>Add to cart</button></td>
    </tr>
  )
}
