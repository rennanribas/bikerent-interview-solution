import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import Home from './Home.container'
import mockRouter from 'next-router-mock'
import { AuthProvider } from 'context/AuthContext'
import { BikeProvider } from 'context/BikeContext'
import { ThemeProvider } from '@mui/material'
import theme from 'styles/theme'
import { mockedBikesArray } from 'mocks/Bike'

jest.mock('next/router', () => require('next-router-mock'))
jest.mock('context/BikeContext', () => ({
  ...jest.requireActual('context/BikeContext'),
  useBike: () => ({ setBike: jest.fn() }),
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

  it('renders home components with bikes', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => mockedBikesArray,
    })

    renderWithProviders(<Home />)

    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument()
      expect(screen.getByTestId('header')).toBeInTheDocument()
      expect(screen.getByTestId('bikes-list')).toBeInTheDocument()
    })
  })

  it('displays "No bikes available" message when there are no bikes', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    })

    renderWithProviders(<Home />)

    await waitFor(() => {
      expect(screen.getByText('No bikes available at the moment.')).toBeInTheDocument()
    })
  })

  it('handles fetch error', async () => {
    global.fetch = jest.fn().mockRejectedValueOnce(new Error('Fetch error'))
    console.error = jest.fn()

    renderWithProviders(<Home />)

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith('Error fetching bikes:', expect.any(Error))
    })
  })
})
