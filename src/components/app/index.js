import React, { Component } from 'react'
import 'normalize-css'

import './app.css'
import Header from '../header'
import Main from '../main'

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        photoURL: 'https://pbs.twimg.com/profile_images/696689442950672385/occEkJ13_400x400.jpg',
        mail: 'h2jose@mail.com',
        onOpenText: false
      }
    }
  }
  render () {
    return (
      <div>
        <Header />
        <Main user={this.state.user} />
      </div>
    )
  }
}

export default App
