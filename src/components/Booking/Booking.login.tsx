import { Typography } from '@mui/material'
import { BookingContainer, LoginBookingButton } from './Booking.styles'
import NextLink from 'next/link'

const BookingLogin = () => {
  return (
    <BookingContainer data-testid='booking-container' variant='outlined'>
      <Typography textAlign={'center'} margin={2}>
        Please login to calculate the total amount with fees and add to booking
      </Typography>

      <NextLink href='/Login' passHref>
        <LoginBookingButton
          variant='contained'
          color='primary'
          disableElevation
          data-testid='login-button'
        >
          Log in
        </LoginBookingButton>
      </NextLink>
    </BookingContainer>
  )
}

export default BookingLogin
