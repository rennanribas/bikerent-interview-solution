import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { mockedBike } from 'mocks/Bike'
import BikeCardMini from './BikeCardMini.component'
import { BikeProvider } from 'context/BikeContext'

jest.mock('next/router', () => require('next-router-mock'))
jest.mock('context/BikeContext', () => ({
  ...jest.requireActual('context/BikeContext'),
  useBike: () => ({ bike: mockedBike }),
}))

const renderWithProviders = (component: React.ReactNode) => {
  return render(<BikeProvider>{component}</BikeProvider>)
}

describe('BikeCardMini component', () => {
  beforeEach(() => {
    renderWithProviders(<BikeCardMini />)
  })

  it('should render the bike image', () => {
    const imageElement = screen.getByTestId('bike-image')
    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('src', mockedBike.imageUrls[0])
  })

  it('should render the bike name', () => {
    const nameElement = screen.getByText(mockedBike.name)
    expect(nameElement).toBeInTheDocument()
  })

  it('should render the bike type', () => {
    const typeElement = screen.getByTestId('bike-type')
    expect(typeElement).toBeInTheDocument()
    expect(typeElement).toHaveTextContent(mockedBike.type)
  })

  it('should render the bike price per day', () => {
    const priceElement = screen.getByTestId('bike-price-day')
    expect(priceElement).toBeInTheDocument()
    expect(priceElement).toHaveTextContent(`${mockedBike.rate} €/Day`)
  })
})
