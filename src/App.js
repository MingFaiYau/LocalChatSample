import React from 'react'
import './styles.css'

export default function App() {
  const [userName, setUserName] = React.useState('')
  const [messages, setMessages] = React.useState([])
  const resetMessages = React.useCallback(() => {
    setMessages([])
  }, [])

  const addMessage = React.useCallback((newMessage) => {
    setMessages((prev) => prev.concat(newMessage))
  }, [])

  return (
    <div className="app-container">
      {!userName && <AskNamePage setUserName={setUserName} />}
      {userName && (
        <>
          <Header resetMessages={resetMessages} />
          <Content
            messages={messages}
            addMessage={addMessage}
            userName={userName}
          />
        </>
      )}
    </div>
  )
}

const AskNamePage = ({ setUserName }) => {
  const [text, setText] = React.useState('')

  const sendMessage = () => {
    if (!text) return
    setUserName(text)
    setText('')
  }

  const onChange = (e) => {
    setText(e.target.value)
  }
  return (
    <div className="ask-name-page-container">
      <input type="text" value={text} onChange={onChange} />
      <input type="button" value={'Start'} onClick={sendMessage} />
    </div>
  )
}

const Header = ({ resetMessages }) => {
  return (
    <div className="header-container ">
      <div>Header</div>
      <input type="button" value={'R'} onClick={resetMessages} />
    </div>
  )
}

const Content = ({ messages, addMessage, userName }) => {
  return (
    <div className="content-container">
      <MessageList messages={messages} />
      <InputBar addMessage={addMessage} userName={userName} />
    </div>
  )
}

const MessageList = ({ messages }) => {
  return (
    <div className="message-list-container">
      {messages.map((message) => (
        <MessageItem
          className="input-bar-container"
          key={message.id}
          message={message}
        />
      ))}
    </div>
  )
}

const MessageItem = ({ message }) => {
  return (
    <div className="message-item-container">
      <MessageAuthor author={message.author} />
      <MessageContent text={message.text} />
      <MessageDate date={message.date} />
    </div>
  )
}

const MessageContent = ({ text }) => {
  return <div className="message-item-content-container">{text}</div>
}

const MessageAuthor = ({ author }) => {
  return <div className="message-item-author">{author}</div>
}

const MessageDate = ({ date }) => {
  return <div className="message-item-date">{date}</div>
}

const InputBar = ({ addMessage, userName }) => {
  const [text, setText] = React.useState('')

  const sendMessage = () => {
    if (!text) return
    const newMessage = {
      id: new Date().getTime(),
      text: text,
      author: userName,
      date: new Date().toISOString()
    }
    addMessage(newMessage)
    setText('')
  }

  const onChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className="input-bar-container">
      <input type="text" value={text} onChange={onChange} />
      <input type="button" value={'>'} onClick={sendMessage} />
    </div>
  )
}
