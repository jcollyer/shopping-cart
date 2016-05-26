import React, { Component } from 'react'

export default (props) => {
  const { id, description, price } = props.product
  return (
    <ul>
      <li>{description}</li>
      <li>{price}</li>
    </ul>
  )
}
