import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import BikeList from '.'
import { BikeProvider } from 'context/BikeContext'

jest.mock('next/router', () => require('next-router-mock'))
jest.mock('context/BikeContext', () => ({
  ...jest.requireActual('context/BikeContext'),
  useBike: () => ({ bikes: [] }),
}))

const renderWithProviders = (component: React.ReactNode) => {
  return render(<BikeProvider>{component}</BikeProvider>)
}

describe('BikeList component', () => {
  beforeEach(() => {
    renderWithProviders(<BikeList />)
  })
  it('should render the list quantity element', () => {
    const quantityElement = screen.getByTestId('list-quantity')
    expect(quantityElement).toBeInTheDocument()
  })

  it('should render the bike cards container', () => {
    const bikeCardsContainer = screen.getByTestId('bikes-list')
    expect(bikeCardsContainer).toBeInTheDocument()
  })
})
