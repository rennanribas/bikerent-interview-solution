import { ArrowBackIos } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import Overview from 'components/Booking/Overview'
import { useRouter } from 'next/router'
import {
  MobileDatePicker,
  MobileSelectDateButton,
  StyledDrawer,
  Puller,
  TransparentSwipeableDrawer,
  BookingContainer,
  BookingButton,
  BookedModal,
} from './Booking.mobile.styles'
import DateRangePicker from 'components/DateRangePicker'
import { CalendarIcon } from 'assets/icons/Calendar'
import { useBooking } from '../../hooks/useBooking'
import Booked from 'components/Booking/Booked'

const MobileBooking = () => {
  const router = useRouter()

  const {
    onChangePeriod,
    toggleMobileDrawer,
    selectedPeriod,
    mobileDataLabel,
    openMobileDrawer,
    handleBooking,
    isBooked,
  } = useBooking()

  const handleBackClick = () => {
    router.push('/BikeDetails')
  }
  return (
    <BookingContainer data-testid='booking-container' variant='outlined'>
      <Box display='flex' alignItems='center' marginBottom={2}>
        <Button onClick={handleBackClick} sx={{ marginRight: 1 }}>
          <ArrowBackIos />
        </Button>
        <Typography variant='h2' fontSize={20} fontWeight={700}>
          Booking
        </Typography>
      </Box>

      <Box width='90%' display='block' marginY={1}>
        <Typography variant='h2' fontSize={24} fontWeight={'800'} textAlign='left'>
          Select date and time
        </Typography>
      </Box>
      <MobileDatePicker onClick={toggleMobileDrawer}>
        <CalendarIcon />
        {mobileDataLabel}
      </MobileDatePicker>

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

      <Overview />

      <BookingButton
        fullWidth
        disableElevation
        variant='contained'
        data-testid='rent-booking-button'
        onClick={handleBooking}
      >
        Add to booking
      </BookingButton>
      <BookedModal open={isBooked}>
        <Booked />
      </BookedModal>
    </BookingContainer>
  )
}

export default MobileBooking
