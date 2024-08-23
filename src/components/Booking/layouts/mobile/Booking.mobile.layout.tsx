import { Alert, Box, Typography } from '@mui/material'
import Overview from 'components/Overview'
import {
  MobileDatePicker,
  MobileSelectDateButton,
  StyledDrawer,
  Puller,
  TransparentSwipeableDrawer,
  BookingContainer,
  BookingButton,
  BookedModal,
  HeaderActions,
  LocationIcon,
  BackButton,
  StyledArrowBackIos,
  ButtonWrapper,
  ContentWrapper,
} from './Booking.mobile.styles'
import DateRangePicker from 'components/DateRangePicker'
import { useBooking } from '../../hooks/useBooking'
import Booked from 'components/Booked'
import MobileMenu from 'components/MobileMenu/Menu.component'
import Link from 'next/link'
import BikeCardMini from 'components/BikeCardMini'
import { useBike } from 'context/BikeContext'
import { CalendarMonth } from '@mui/icons-material'

const MobileBooking = () => {
  const {
    onChangePeriod,
    toggleMobileDrawer,
    selectedPeriod,
    mobileDataLabel,
    openMobileDrawer,
    handleBooking,
    isBooked,
    error,
  } = useBooking()
  const { setBike } = useBike()

  return (
    <BookingContainer data-testid='booking-container'>
      <ContentWrapper>
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
        {error && (
          <Alert color='error' sx={{ mt: 2 }}>
            Error: {error}
          </Alert>
        )}

        <BikeCardMini />

        <Box width='100%' display='block' marginY={4}>
          <Typography
            variant='h2'
            fontSize={24}
            fontWeight={'700'}
            textAlign='left'
            marginBottom={1}
          >
            Select date and time
          </Typography>

          <MobileDatePicker onClick={toggleMobileDrawer}>
            <CalendarMonth color='primary' />
            {mobileDataLabel}
          </MobileDatePicker>
        </Box>

        <Overview />
      </ContentWrapper>
      <ButtonWrapper>
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
      </ButtonWrapper>

      <TransparentSwipeableDrawer
        swipeAreaWidth={56}
        onOpen={toggleMobileDrawer}
        onClose={toggleMobileDrawer}
        open={openMobileDrawer}
        anchor='bottom'
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledDrawer>
          <Puller />
          <DateRangePicker defaultPeriod={selectedPeriod} onChangePeriod={onChangePeriod} />
          <MobileSelectDateButton type='button' onClick={toggleMobileDrawer}>
            Select
          </MobileSelectDateButton>
        </StyledDrawer>
      </TransparentSwipeableDrawer>

      <BookedModal open={true} onClose={() => setBike()}>
        <Booked />
      </BookedModal>
    </BookingContainer>
  )
}

export default MobileBooking
