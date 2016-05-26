import React, { Component } from 'react'
import { connect } from 'react-redux'

class Test extends Component {

  render() {
    const { test } = this.props
    // debugger;
    return (
      <p>
      test
      { test.map((p) => {
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
    test: appState.test
  }
}

export default connect(mapStateToProps)(Test)
