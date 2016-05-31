import React, { Component } from 'react'
export default (props) => {
  const { type, price, quantity} = props
  return (
    <tr>
      <td>{type}</td>
      <td>$ {price}</td>
      <td>{quantity}</td>
    </tr>
  )
}
