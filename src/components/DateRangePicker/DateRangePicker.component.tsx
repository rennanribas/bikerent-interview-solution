import {
  ArrowButtons,
  ArrowsContainer,
  Container,
  Day,
  DayContainer,
  DayOfTheWeek,
  DaysContainer,
  Header,
  IntervalBackground,
  SelectedDayCircle,
  SelectedDayCircleContainer,
} from './DateRangePicker.styles'
import { Box, Typography } from '@mui/material'
import { daysOfTheWeek, generateDate, months } from './DateRangePicker.utils'
import dayjs from 'dayjs'
import { useDateRangePicker } from './hooks/useDateRangePicker'
import theme from 'styles/theme'
import { CalendarComponentProps } from './DateRangePicker.types'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'

const DateRangePicker = (props: CalendarComponentProps) => {
  const { selectedMonth, today, selectedYear, onNextMonth, onPrevMonth, onDayClick, period } =
    useDateRangePicker(props)

  return (
    <Container>
      <Header data-testid='datepicker-header'>
        <Box>
          <Typography
            data-testid='datepicker-month'
            fontSize={34}
            fontWeight={700}
            lineHeight={'39px'}
          >
            {months[selectedMonth]}
          </Typography>
          <Typography
            data-testid='datepicker-year'
            fontSize={16}
            fontWeight={600}
            sx={{ opacity: 0.5 }}
          >
            {selectedYear}
          </Typography>
        </Box>
        <ArrowsContainer data-testid='change-month-buttons-container'>
          <ArrowButtons
            data-testid='prev-month-button'
            onClick={onPrevMonth}
            disabled={today.month() === selectedMonth && selectedYear === today.year()}
          >
            <ArrowBackIos />
          </ArrowButtons>
          <ArrowButtons data-testid='next-month-button' onClick={onNextMonth}>
            <ArrowForwardIos />
          </ArrowButtons>
        </ArrowsContainer>
      </Header>
      <DaysContainer>
        {daysOfTheWeek.map((day) => (
          <DayOfTheWeek data-testid='day-of-the-week' key={day}>
            {day}
          </DayOfTheWeek>
        ))}
        {generateDate(selectedMonth, selectedYear).map((day) => {
          const isSelected =
            period.startDate?.toDate().toISOString() === day.date.toDate().toISOString() ||
            period.endDate?.toDate().toISOString() === day.date.toDate().toISOString()

          const isInterval = day.date.isBefore(period.endDate) && day.date.isAfter(period.startDate)

          return (
            <DayContainer data-testid='single-day-container' key={day.date.toString()}>
              {isInterval && <IntervalBackground data-testid='day-interval-indicator' />}
              {isSelected && (
                <>
                  {period.endDate && period.startDate && (
                    <SelectedDayCircleContainer
                      startdate={
                        period.startDate?.toDate().toISOString() === day.date.toDate().toISOString()
                          ? 'true'
                          : 'false'
                      }
                    />
                  )}
                  <SelectedDayCircle data-testid='selected-day-indicator' />
                </>
              )}
              <Day
                data-testid={`day-button-${dayjs(day.date).format('D')}`}
                disabled={!day.currentMonth || day.date.isBefore(today, 'day')}
                istoday={day.today ? 'true' : 'false'}
                isselected={isSelected ? 'true' : 'false'}
                onClick={() => {
                  onDayClick(day.date)
                }}
              >
                <Typography
                  color={isSelected ? theme.palette.primary.main : theme.palette.common.white}
                >
                  {dayjs(day.date).format('D')}
                </Typography>
              </Day>
            </DayContainer>
          )
        })}
      </DaysContainer>
    </Container>
  )
}

export default DateRangePicker
