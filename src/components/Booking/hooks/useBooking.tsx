import React, { createContext, useContext, useMemo, useState } from 'react'
import { useMediaQuery } from '@mui/material'
import theme from 'styles/theme'
import { Period } from 'components/DateRangePicker/DateRangePicker.types'
import { abreviatedMonths } from 'components/DateRangePicker/DateRangePicker.utils'
import { apiServer } from '../../../../pages/api/[...path]'
import { useAuth } from 'context/AuthContext'
import { useBike } from 'context/BikeContext'
import { AxiosError } from 'axios'

type BookingContextType = ReturnType<typeof useBookingState>

const BookingContext = createContext<BookingContextType | undefined>(undefined)

const useBookingState = () => {
  const { bike } = useBike()
  const { user } = useAuth()
  const rateByDay = bike?.rate || 0
  const rateByWeek = rateByDay * 7

  const [selectedPeriod, setSelectedPeriod] = useState<Partial<Period>>({})
  const [openMobileDrawer, setOpenMobileDrawer] = useState(false)
  const [isBooked, setBooked] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [openBookedModal, setOpenBookedModal] = useState<boolean>(false)
  const [rentAmount, setRentAmount] = useState<number>(0)
  const [totalAmount, setTotalAmount] = useState<number>(0)
  const [servicesFee, setServicesFee] = useState<number>(0)
  const [isRenting, setIsRenting] = useState<boolean>(false)

  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const toggleBookedModal = () => setOpenBookedModal((state) => !state)
  const toggleBooked = () => setBooked((state) => !state)
  const toggleMobileDrawer = () => setOpenMobileDrawer((state) => !state)

  const onChangePeriod = async (period: Partial<Period>) => {
    if (period.startDate && period.endDate) {
      const response = await apiServer.post('/api/bikes/amount', {
        bikeId: bike?.id,
        dateFrom: period.startDate.format('YYYY-MM-DD'),
        dateTo: period.endDate.format('YYYY-MM-DD'),
        userId: user?.id,
      })
      const data = response.data
      setRentAmount(data.rentAmount.toFixed(2))
      setTotalAmount(data.totalAmount.toFixed(2))
      setServicesFee(data.fee.toFixed(2))
    }
    setSelectedPeriod(period)
  }
  const mobileDataLabel = useMemo(() => {
    return `From ${
      selectedPeriod.startDate ? abreviatedMonths[selectedPeriod.startDate.month()] : '--'
    }/${selectedPeriod.startDate ? selectedPeriod.startDate.date() : '--'} to ${
      selectedPeriod.endDate ? abreviatedMonths[selectedPeriod.endDate.month()] : '--'
    }/${selectedPeriod.endDate ? selectedPeriod.endDate.date() : '--'}`
  }, [selectedPeriod])

  const handleBooking = async () => {
    try {
      setIsLoading(true)

      if (!user) throw new Error('You must sign up to rent a bike')
      if (!bike) throw new Error('You must select a bike to rent')
      if (!selectedPeriod.startDate || !selectedPeriod.endDate)
        throw new Error('You must select a period to rent a bike')

      await apiServer.post('/api/bikes/rent', {
        bikeId: bike.id,
        userId: user.id,
        dateFrom: selectedPeriod?.startDate.format('YYYY-MM-DD'),
        dateTo: selectedPeriod?.endDate.format('YYYY-MM-DD'),
      })

      if (isMobileScreen) {
        toggleBookedModal()
      } else {
        toggleBooked()
      }
    } catch (error) {
      if (error instanceof AxiosError)
        throw new Error(error.response?.data?.message || 'Error renting bike')
      throw new Error('Error renting bike')
    } finally {
      setIsLoading(false)
    }
  }
  return {
    openBookedModal,
    toggleBookedModal,
    openMobileDrawer,
    mobileDataLabel,
    selectedPeriod,
    onChangePeriod,
    toggleMobileDrawer,
    rateByDay,
    rateByWeek,
    servicesFee,
    rentAmount,
    totalAmount,
    isBooked,
    isLoading,
    handleBooking,
    isRenting,
    setIsRenting,
  }
}
export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const bookingState = useBookingState()

  return <BookingContext.Provider value={bookingState}>{children}</BookingContext.Provider>
}

export const useBooking = () => {
  const context = useContext(BookingContext)
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider')
  }
  return context
}
