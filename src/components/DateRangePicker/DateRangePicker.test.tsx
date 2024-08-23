import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import DateRangePicker from '.'
import { ThemeProvider } from '@mui/material'
import theme from 'styles/theme'

const renderWithTheme = (component: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}

describe('DateRangePicker component test', () => {
  it('Should render the DateRangePicker component', () => {
    renderWithTheme(<DateRangePicker onChangePeriod={() => {}} />)

    expect(screen.getByTestId('datepicker-header')).toBeInTheDocument()
    expect(screen.getByTestId('datepicker-month')).toBeInTheDocument()
    expect(screen.getByTestId('datepicker-year')).toBeInTheDocument()
    expect(screen.getByTestId('prev-month-button')).toBeInTheDocument()
    expect(screen.getByTestId('next-month-button')).toBeInTheDocument()
    expect(screen.getAllByTestId('day-of-the-week')).toHaveLength(7)
    expect(screen.getAllByTestId('single-day-container')).toHaveLength(42)
  })
})
