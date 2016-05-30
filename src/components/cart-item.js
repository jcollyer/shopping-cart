import React, { Component } from 'react'
export default (props) => {
  const { type, price, quantity} = props
  return (
    <div>{type} ${price} - x{quantity}</div>
  )
}
