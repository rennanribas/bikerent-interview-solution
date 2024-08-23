import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import BikeDetails from './BikeDetails.container'
import mockRouter from 'next-router-mock'
import { AuthProvider } from 'context/AuthContext'
import { BikeProvider } from 'context/BikeContext'
import { ThemeProvider } from '@mui/material'
import theme from 'styles/theme'
import { mockedBike } from 'mocks/Bike'

jest.mock('next/router', () => require('next-router-mock'))
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

describe('BikeDetails', () => {
  beforeEach(() => {
    mockRouter.push('/BikeDetails')
  })

  it('renders bike details components', async () => {
    renderWithProviders(<BikeDetails />)

    await waitFor(() => {
      expect(screen.getByTestId('bike-details-page')).toBeInTheDocument()
      expect(screen.getByTestId('header')).toBeInTheDocument()
      expect(screen.getByTestId('bike-details-breadcrumbs')).toBeInTheDocument()
      expect(screen.getByTestId('bike-details-container')).toBeInTheDocument()
      expect(screen.getByTestId('bike-image-selector')).toBeInTheDocument()
      expect(screen.getByTestId('bike-name-details')).toBeInTheDocument()
      expect(screen.getByTestId('bike-prices-details')).toBeInTheDocument()
      expect(screen.getByTestId('booking-address-map')).toBeInTheDocument()
    })
  })
})
