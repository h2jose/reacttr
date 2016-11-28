import React, { Component } from 'react'
import MessageList from '../MessageList'

class Main extends Component {
  constructor () {
    super()
    this.state = {
      messages: [
        {
          text: 'mensaje de prueba',
          picture: 'https://pbs.twimg.com/profile_images/696689442950672385/occEkJ13_400x400.jpg',
          displayName: 'Jose Hernandez',
          username: 'h2jose',
          date: Date.now()
        },
        {
          text: 'segundo mensaje',
          picture: 'https://pbs.twimg.com/profile_images/696689442950672385/occEkJ13_400x400.jpg',
          displayName: 'david Hernandez',
          username: 'david',
          date: Date.now()
        }
      ]
    }
  }
  render () {
    return (
      <MessageList messages={this.state.messages} />
    )
  }
}

export default Main
