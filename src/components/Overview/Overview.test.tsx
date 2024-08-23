import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Overview from '.'
import { ThemeProvider } from '@mui/material'
import theme from 'styles/theme'
import { AuthProvider } from 'context/AuthContext'
import { BookingProvider } from 'components/Booking/hooks/useBooking'
import { BikeProvider } from 'context/BikeContext'

jest.mock('next/router', () => require('next-router-mock'))
jest.mock('context/BikeContext', () => ({
  ...jest.requireActual('context/BikeContext'),
  useBike: () => ({ bikes: [], setBike: jest.fn() }),
}))

const renderWithProviders = (component: React.ReactNode) => {
  return render(
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BikeProvider>
          <BookingProvider>{component}</BookingProvider>
        </BikeProvider>
      </AuthProvider>
    </ThemeProvider>,
  )
}
describe('Overview component', () => {
  it('renders the Overview component', () => {
    renderWithProviders(<Overview />)

    expect(screen.getByTestId('overview-container')).toBeInTheDocument()
  })

  it('displays the overview title', () => {
    renderWithProviders(<Overview />)

    expect(screen.getByTestId('overview-title')).toBeInTheDocument()
  })
})
