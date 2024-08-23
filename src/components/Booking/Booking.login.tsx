import { Box, Typography, useMediaQuery } from '@mui/material'
import { BookingContainer, LoginBookingButton } from './Booking.styles'
import theme from 'styles/theme'
import {
  BackButton,
  ContentWrapper,
  HeaderActions,
  LocationIcon,
  StyledArrowBackIos,
} from './layouts/mobile/Booking.mobile.styles'
import MobileMenu from 'components/MobileMenu/Menu.component'
import Link from 'next/link'

const BookingLogin = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <>
      {isMobile && (
        <ContentWrapper data-testid='header-booking-container' padding={2}>
          <Box data-testid='header'>
            <HeaderActions>
              <MobileMenu />
              <Box display='flex' alignItems='center' data-testid='location-label'>
                <Typography color='black' marginRight={0.75}>
                  Manhattan
                </Typography>
                <LocationIcon fontSize='small' />
              </Box>
            </HeaderActions>
          </Box>

          <Box display='flex' alignItems='center' width='100%' marginBottom={2} position='relative'>
            <Link href='/' passHref>
              <BackButton data-testid='back-button'>
                <StyledArrowBackIos />
              </BackButton>
            </Link>
            <Typography variant='h3' fontWeight={700} width='100%' textAlign='center'>
              Booking
            </Typography>
          </Box>
        </ContentWrapper>
      )}

      <BookingContainer data-testid='booking-container' variant='outlined'>
        <Typography textAlign={'center'} margin={2}>
          Please login to calculate the total amount with fees and add to booking
        </Typography>

        <Link href='/Login' passHref>
          <LoginBookingButton
            variant='contained'
            color='primary'
            disableElevation
            data-testid='login-button'
          >
            Log in
          </LoginBookingButton>
        </Link>
      </BookingContainer>
    </>
  )
}

export default BookingLogin
