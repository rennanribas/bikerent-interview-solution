import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from '.'
import { AuthProvider } from 'context/AuthContext'
import { ThemeProvider } from '@mui/material'
import theme from 'styles/theme'

jest.mock('next/router', () => require('next-router-mock'))
jest.mock('context/AuthContext', () => ({
  ...jest.requireActual('context/AuthContext'),
  useAuth: () => ({ isAuthenticated: false }),
}))

const renderWithProviders = (component: React.ReactNode) => {
  return render(
    <ThemeProvider theme={theme}>
      <AuthProvider>{component}</AuthProvider>
    </ThemeProvider>,
  )
}

describe('Header component', () => {
  it('renders common header elements', () => {
    renderWithProviders(<Header />)

    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('app-name')).toHaveTextContent('Bike Rental')
    expect(screen.getByTestId('location-label')).toBeInTheDocument()
    expect(screen.getByText('Manhattan')).toBeInTheDocument()
  })
})
