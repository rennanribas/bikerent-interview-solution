import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Signup from './Signup.component'
import mockRouter from 'next-router-mock'
import { AuthProvider } from 'context/AuthContext'
import { BikeProvider } from 'context/BikeContext'
import { ThemeProvider } from '@mui/material'
import theme from 'styles/theme'

jest.mock('next/router', () => require('next-router-mock'))
jest.mock('./hooks/useSignup', () => ({
  useSignup: () => ({
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

describe('Signup', () => {
  beforeEach(() => {
    mockRouter.push('/Signup')
  })

  it('renders signup components', () => {
    renderWithProviders(<Signup />)

    expect(screen.getByTestId('title-signup')).toBeInTheDocument()
    expect(screen.getByTestId('subtitle-signup')).toBeInTheDocument()
    expect(screen.getByTestId('name-input')).toBeInTheDocument()
    expect(screen.getByTestId('email-input')).toBeInTheDocument()
    expect(screen.getByTestId('password-input')).toBeInTheDocument()
    expect(screen.getByTestId('signup-button')).toBeInTheDocument()
  })
})
