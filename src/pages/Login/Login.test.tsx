import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Login from './Login.component'

describe('Login page', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    )
  })

  it('should have a header', () => {
    const headerElement = screen.getByText(/Login/i)
    expect(headerElement).toBeInTheDocument()
  })

  it('should have an email input field', () => {
    const emailInput = screen.getByPlaceholderText(/Email/i)
    expect(emailInput).toBeInTheDocument()
  })

  it('should have a password input field', () => {
    const passwordInput = screen.getByPlaceholderText(/Password/i)
    expect(passwordInput).toBeInTheDocument()
  })

  it('should have a submit button', () => {
    const submitButton = screen.getByRole('button', { name: /Submit/i })
    expect(submitButton).toBeInTheDocument()
  })
})
