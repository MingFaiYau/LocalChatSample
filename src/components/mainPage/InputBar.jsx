import React from 'react'

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

export default InputBar
