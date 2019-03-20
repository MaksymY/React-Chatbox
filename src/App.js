import React, { Component } from 'react'
import './App.css'
import Formulaire from './components/Formulaire'
import Message from './components/Message'


class App extends Component {
  state ={
    messages: {}, 
    pseudo: this.props.match.params.pseudo
  }

  createMessage = () => {
    const { addMessage, pseudo } = this.props
  }

  addMessage = message => {
    const messages = { ...this.state.messages }
    message[`message-${Date.now()}`] = message
    this.setState({ messages })
  }

  render () {
    return (
      <div className='box' >
        <div className='messages'>
          <Message />
        </div>
        <Formulaire 
        pseudo={this.state.pseudo}
        addMessage={this.addMessage}/>
      </div>
    )
  }
}

export default App
