import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from './Home.container'
import mockRouter from 'next-router-mock'
import { AuthProvider } from 'context/AuthContext'
import { BikeProvider } from 'context/BikeContext'
import { ThemeProvider } from '@mui/material'
import theme from 'styles/theme'

jest.mock('next/router', () => require('next-router-mock'))
jest.mock('context/BikeContext', () => ({
  ...jest.requireActual('context/BikeContext'),
  useBike: () => ({ bikes: [], setBike: jest.fn() }),
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

describe('Home', () => {
  beforeEach(() => {
    mockRouter.push('/Home')
  })

  it('renders home components', () => {
    renderWithProviders(<Home />)

    expect(screen.getByTestId('home-page')).toBeInTheDocument()
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('bikes-list')).toBeInTheDocument()
  })

  it('displays "No bikes available at the moment.." message when there are no bikes', () => {
    renderWithProviders(<Home />)

    expect(screen.getByText('No bikes available at the moment..')).toBeInTheDocument()
  })
})
