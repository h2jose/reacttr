import React, { Component } from 'react'
import 'normalize-css'

import './app.css'
import Header from '../header'
import Main from '../main'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}

export default App
