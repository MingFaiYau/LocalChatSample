import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 20px;
  font-size: 14px;
`

const Title = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
`

const InputName = styled.input`
  width: 80%;
  height: 2.5rem;
  padding: 0 10px;
  font-size: 1rem;
  outline: none;
  border: 1px solid black;
  border-radius: 5px;
`

const ButtonStart = styled.input`
  width: 50%;
  height: 2rem;
  margin-top: 20px;
  padding: 5px 20px;
  border: 1px solid black;
  border-radius: 5px;
`

const LoginPage = ({ setUserName }) => {
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
    <React.Fragment>
      {
        // <div className="ask-name-page-container">
        //   <div>Your Name</div>
        //   <input type="text" value={text} onChange={onChange} />
        //   <input type="button" value={'Start'} onClick={sendMessage} />
        // </div>
      }
      <Container>
        <Title>Welcome</Title>
        <InputName
          type="text"
          value={text}
          onChange={onChange}
          placeholder={'Your name'}
        />
        <ButtonStart type="button" value={'Login'} onClick={sendMessage} />
      </Container>
    </React.Fragment>
  )
}

export default LoginPage
