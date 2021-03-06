import React, { Component } from 'react'
import Message from '../Message'
import './message-list.css'

class MessageList extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='list'>
        {this.props.messages.map(msg => {
          return (
            <Message
              text={msg.text}
              picture={msg.picture}
              displayName={msg.displayName}
              username={msg.username}
              date={msg.date}
            />
          )
        })}
      </div>
    )
  }

}

export default MessageList
