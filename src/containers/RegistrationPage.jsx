import React from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { switchRoute } from '../redux/slices/routerSlice'
import { v4 as uuidv4 } from 'uuid'
import { register, selectUserList } from '../redux/slices/userSlice'

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

const RegistrationPage = () => {
  const dispatch = useAppDispatch()
  const [text, setText] = React.useState('')
  const userList = useAppSelector(selectUserList)

  const gotoLoginPage = (e) => {
    dispatch(switchRoute('login'))
  }
  const doRegister = (e) => {
    if (!text) {
      alert('Please enter user name')
      return
    }
    if (userList.find((val) => val.name === text)) {
      alert('User already exist, please try other name')
      return
    }
    const user = {
      id: uuidv4(),
      name: text
    }
    dispatch(register(user))
  }

  const onChange = (e) => {
    setText(e.target.value)
  }
  return (
    <React.Fragment>
      <Container>
        <Title>Registration</Title>
        <InputName
          type="text"
          value={text}
          onChange={onChange}
          placeholder={'Your name'}
        />
        <ButtonStart type="button" value={'Register'} onClick={doRegister} />
        <ButtonStart
          type="button"
          value={'Back to login'}
          onClick={gotoLoginPage}
        />
      </Container>
    </React.Fragment>
  )
}

export default RegistrationPage
