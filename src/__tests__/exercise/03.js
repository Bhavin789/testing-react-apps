// Avoid implementation details
// http://localhost:3000/counter

import * as React from 'react'
// 🐨 add `screen` to the import here:
import {render, fireEvent, screen} from '@testing-library/react'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', () => {
  render(<Counter />)
  // 🐨 replace these with screen queries
  // 💰 you can use `getByText` for each of these (`getByRole` can work for the button too)
  const incrementButton = screen.getByText('Increment')
  const decrementButton = screen.getByText('Decrement')

  const message = screen.getByText('Current count: 0')

  expect(message).toHaveTextContent('Current count: 0')
  fireEvent.click(incrementButton)
  expect(message).toHaveTextContent('Current count: 1')
  fireEvent.click(decrementButton)
  expect(message).toHaveTextContent('Current count: 0')
})
