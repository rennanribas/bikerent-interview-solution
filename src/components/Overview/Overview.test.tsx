import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Overview from '.'
import { ThemeProvider } from '@mui/material'
import theme from 'styles/theme'

const renderWithTheme = (component: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}

describe('Overview component', () => {
  it('renders the Overview component', () => {
    renderWithTheme(<Overview />)

    expect(screen.getByTestId('overview-container')).toBeInTheDocument()
  })

  it('displays the overview title', () => {
    renderWithTheme(<Overview />)

    expect(screen.getByText('Overview')).toBeInTheDocument()
  })
})
