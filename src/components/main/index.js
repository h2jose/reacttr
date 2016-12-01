import React, { Component } from 'react'
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component {
  constructor () {
    super()
    this.state = {
      openText: false,
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
  
  handleOpenText (event) {
    event.preventDefault()
    this.setState({ openText: true })
  }

  renderOpenText () {
    if (this.state.openText) {
      return <InputText />
    }
  }

  render () {
    return (
      <div>
        <perfileBar
          picture={this.props.user.photoURL}
          username={this.props.user.email.split('@')[0]}
          onOpenText={this.handleOpenText}
        />
        {this.renderOpenText()}
        <MessageList messages={this.state.messages} />
      </div>
    )
  }
}

export default Main
