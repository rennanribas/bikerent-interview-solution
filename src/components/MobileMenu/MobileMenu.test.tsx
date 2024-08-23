import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import MobileMenu from '.'
import { ThemeProvider } from '@mui/material'
import theme from 'styles/theme'
import { AuthProvider } from 'context/AuthContext'
import { BikeProvider } from 'context/BikeContext'

jest.mock('next/router', () => require('next-router-mock'))
jest.mock('context/AuthContext', () => ({
  ...jest.requireActual('context/AuthContext'),
  useAuth: () => ({ isAuthenticated: false }),
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

describe('MobileMenu component', () => {
  it('renders the MobileMenu component', () => {
    renderWithProviders(<MobileMenu />)

    expect(screen.getByTestId('mobile-menu-button')).toBeInTheDocument()
  })

  it('displays the menu icon', () => {
    renderWithProviders(<MobileMenu />)

    const menuIcon = screen.getByTestId('mobile-menu-button').querySelector('svg')
    expect(menuIcon).toBeInTheDocument()
  })
})
