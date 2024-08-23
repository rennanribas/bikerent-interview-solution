import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Login from './Login.component'
import mockRouter from 'next-router-mock'
import { AuthProvider } from 'context/AuthContext'
import { BikeProvider } from 'context/BikeContext'
import { ThemeProvider } from '@mui/material'
import theme from 'styles/theme'

jest.mock('next/router', () => require('next-router-mock'))
jest.mock('./hooks/useLogin', () => ({
  useLogin: () => ({
    errors: {},
    register: jest.fn(),
    onSubmit: jest.fn(),
  }),
}))

const renderWithProviders = (component: React.ReactNode) => {
  return render(
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BikeProvider>{component}</BikeProvider>
      </AuthProvider>
    </ThemeProvider>,
  )
}

describe('Login', () => {
  beforeEach(() => {
    mockRouter.push('/Login')
  })
  it('renders login components', () => {
    renderWithProviders(<Login />)

    expect(screen.getByTestId('title-login')).toBeInTheDocument()
    expect(screen.getByTestId('subtitle-login')).toBeInTheDocument()
    expect(screen.getByTestId('email-input')).toBeInTheDocument()
    expect(screen.getByTestId('password-input')).toBeInTheDocument()
    expect(screen.getByTestId('login-button')).toBeInTheDocument()
  })
})
