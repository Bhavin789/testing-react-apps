// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import faker, {fake} from 'faker'

import Login from '../../components/login'

const buildLoginForm = data => {
  return {
    username: data && data.username ? data.username : faker.internet.userName(),
    password: data && data.password ? data.password : faker.internet.password(),
  }
}

test('submitting the form calls onSubmit with username and password', () => {
  let submittedData = {}
  const handleSubmit = data => {
    submittedData = data
  }
  render(<Login onSubmit={handleSubmit} />)

  const userNameField = screen.getByLabelText('Username')
  const passwordField = screen.getByLabelText('Password')

  const submitButton = screen.getByText('Submit')

  userEvent.type(userNameField, 'my username')
  userEvent.type(passwordField, 'my password')

  userEvent.click(submitButton)

  expect(submittedData).toEqual({
    username: 'my username',
    password: 'my password',
  })

  // 🐨 create a variable called "submittedData" and a handleSubmit function that
  // accepts the data and assigns submittedData to the data that was submitted
  // 💰 if you need a hand, here's what the handleSubmit function should do:
  // const handleSubmit = data => (submittedData = data)
  //
  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  //
  // 🐨 get the username and password fields via `getByLabelText`
  // 🐨 use userEvent.type to change the username and password fields to
  //    whatever you want
  //
  // 🐨 click on the button with the text "Submit"
  //
  // assert that submittedData is correct
  // 💰 use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue
})

test('submitting the form calls onSubmit with random username but given password', () => {
  let submittedData = {}
  const handleSubmit = jest.fn(data => {
    submittedData = data
  })

  render(<Login onSubmit={handleSubmit} />)

  const userNameField = screen.getByLabelText('Username')
  const passwordField = screen.getByLabelText('Password')

  const submitButton = screen.getByText('Submit')

  const {username, password} = buildLoginForm({password: 'my password'})

  userEvent.type(userNameField, username)
  userEvent.type(passwordField, password)

  userEvent.click(submitButton)

  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith({username, password})

  expect(submittedData).toEqual({
    username,
    password,
  })

  // 🐨 create a variable called "submittedData" and a handleSubmit function that
  // accepts the data and assigns submittedData to the data that was submitted
  // 💰 if you need a hand, here's what the handleSubmit function should do:
  // const handleSubmit = data => (submittedData = data)
  //
  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  //
  // 🐨 get the username and password fields via `getByLabelText`
  // 🐨 use userEvent.type to change the username and password fields to
  //    whatever you want
  //
  // 🐨 click on the button with the text "Submit"
  //
  // assert that submittedData is correct
  // 💰 use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue
})

/*
eslint
  no-unused-vars: "off",
*/
