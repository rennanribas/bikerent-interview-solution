import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Booking from './Booking.container'
import { AuthProvider } from 'context/AuthContext'
import { BikeProvider } from 'context/BikeContext'
import { ThemeProvider } from '@mui/material'
import theme from 'styles/theme'
import { mockedBike } from 'mocks/Bike'

jest.mock('next/router', () => require('next-router-mock'))
jest.mock('context/AuthContext', () => ({
  ...jest.requireActual('context/AuthContext'),
  useAuth: () => ({ user: null }),
}))
jest.mock('context/BikeContext', () => ({
  ...jest.requireActual('context/BikeContext'),
  useBike: () => ({ bike: mockedBike }),
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

describe('Booking component', () => {
  it('renders BookingLogin when user is not logged in', () => {
    renderWithProviders(<Booking />)

    expect(screen.getByTestId('booking-container')).toBeInTheDocument()
    expect(
      screen.getByText('Please login to calculate the total amount with fees and add to booking'),
    ).toBeInTheDocument()
    expect(screen.getByTestId('login-button')).toBeInTheDocument()
  })

  it('renders MobileBooking when user is logged in and screen is small', () => {
    jest.spyOn(require('context/AuthContext'), 'useAuth').mockReturnValue({ user: { id: 1 } })
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }))

    renderWithProviders(<Booking />)

    expect(screen.getByTestId('booking-container')).toBeInTheDocument()
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('location-label')).toBeInTheDocument()
    expect(screen.getByTestId('back-button')).toBeInTheDocument()
    expect(screen.getByText('Booking')).toBeInTheDocument()
    expect(screen.getByTestId('rent-booking-button')).toBeInTheDocument()
  })

  it('renders DesktopBooking when user is logged in and screen is large', () => {
    jest.spyOn(require('context/AuthContext'), 'useAuth').mockReturnValue({ user: { id: 1 } })
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }))

    renderWithProviders(<Booking />)

    expect(screen.getByTestId('booking-container')).toBeInTheDocument()
    expect(screen.getByText('Select date and time')).toBeInTheDocument()
    expect(screen.getByTestId('rent-booking-button')).toBeInTheDocument()
  })
})
