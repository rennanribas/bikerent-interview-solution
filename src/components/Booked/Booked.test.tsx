import { render, screen } from '@testing-library/react'
import { mockedBike } from 'mocks/Bike'
import Booked from '.'
import { BikeProvider } from 'context/BikeContext'
import { ThemeProvider } from '@mui/material'
import theme from 'styles/theme'

jest.mock('next/router', () => require('next-router-mock'))
jest.mock('context/BikeContext', () => ({
  ...jest.requireActual('context/BikeContext'),
  useBike: () => ({ bike: mockedBike }),
}))

const renderWithProviders = (component: React.ReactNode) => {
  return render(
    <ThemeProvider theme={theme}>
      <BikeProvider>{component}</BikeProvider>
    </ThemeProvider>,
  )
}

describe('Booked component', () => {
  beforeEach(() => {
    renderWithProviders(<Booked />)
  })

  it('should render the thank you message', () => {
    const thankYouMessage = screen.getByText('Thank you!')
    expect(thankYouMessage).toBeInTheDocument()
  })

  it('should render the confirmation message', () => {
    const confirmationMessage = screen.getByText('Your bike is booked.')
    expect(confirmationMessage).toBeInTheDocument()
  })

  it('should render the bike name', () => {
    const bikeName = screen.getByText(mockedBike.name)
    expect(bikeName).toBeInTheDocument()
  })

  it('should render the bike type', () => {
    const bikeType = screen.getByTestId('bike-type')
    expect(bikeType).toBeInTheDocument()
    expect(bikeType).toHaveTextContent(mockedBike.type)
  })
})
