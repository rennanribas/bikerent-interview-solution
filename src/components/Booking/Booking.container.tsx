import { useAuth } from 'context/AuthContext'
import BookingLogin from './Booking.login'
import { BookingProvider } from './hooks/useBooking'
import MobileBooking from './layouts/mobile/Booking.mobile.layout'
import DesktopBooking from './layouts/desktop/Booking.desktop.layout'
import { useMediaQuery } from '@mui/material'
import theme from 'styles/theme'

const Booking = () => {
  const { user } = useAuth()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  if (user)
    return <BookingProvider>{isMobile ? <MobileBooking /> : <DesktopBooking />}</BookingProvider>
  else return <BookingLogin />
}

export default Booking
