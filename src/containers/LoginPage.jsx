import React from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { switchRoute } from '../redux/slices/routerSlice'
import { login, selectUserList } from '../redux/slices/userSlice'

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
  cursor: pointer;
`

const ButtonStart = styled.input`
  width: 50%;
  height: 2rem;
  margin-top: 20px;
  padding: 5px 20px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
`

const LoginPage = ({ setUserName }) => {
  const dispatch = useAppDispatch()
  const [text, setText] = React.useState('')
  const userList = useAppSelector(selectUserList)

  const gotoRegistrationPage = (e) => {
    dispatch(switchRoute('registration'))
  }

  const onChange = (e) => {
    setText(e.target.value)
  }

  const doLogin = () => {
    if (!text) {
      alert('Please enter user name')
      return
    }
    const user = userList.find((val) => val.name === text)
    if (!user) {
      alert('User not found, please try again or sign-up')
      return
    }
    dispatch(login(user))
  }
  return (
    <React.Fragment>
      <Container>
        <Title>Welcome</Title>
        <InputName
          type="text"
          value={text}
          onChange={onChange}
          placeholder={'Your name'}
        />
        <ButtonStart type="button" value={'Login'} onClick={doLogin} />
        <ButtonStart
          type="button"
          value={'Sign Up'}
          onClick={gotoRegistrationPage}
        />
      </Container>
    </React.Fragment>
  )
}

export default LoginPage
