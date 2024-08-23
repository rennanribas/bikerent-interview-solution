import { Alert, Box, Typography } from '@mui/material'
import Overview from 'components/Overview'
import { DateRangePickerContainer, BookingContainer, BookingButton } from './Booking.desktop.styles'
import DateRangePicker from 'components/DateRangePicker'
import { useBooking } from '../../hooks/useBooking'
import Booked from 'components/Booked'

const DesktopBooking = () => {
  const { onChangePeriod, handleBooking, isBooked, error, selectedPeriod } = useBooking()

  return (
    <BookingContainer data-testid='booking-container' variant='outlined'>
      {!isBooked ? (
        <>
          {error && (
            <Alert severity='error' sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
          <Box width='90%' display='block' marginY={1}>
            <Typography variant='h2' fontSize={24} fontWeight={'800'} textAlign='left'>
              Select date and time
            </Typography>
          </Box>

          <DateRangePickerContainer>
            <DateRangePicker onChangePeriod={onChangePeriod} />
          </DateRangePickerContainer>

          <Overview />

          <BookingButton
            fullWidth
            disableElevation
            variant='contained'
            data-testid='rent-booking-button'
            onClick={handleBooking}
            disabled={!selectedPeriod.startDate || !selectedPeriod.endDate}
          >
            Add to booking
          </BookingButton>
        </>
      ) : (
        <Booked />
      )}
    </BookingContainer>
  )
}

export default DesktopBooking
