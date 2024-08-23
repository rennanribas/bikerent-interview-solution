import React, { createContext, useContext, useMemo, useState } from 'react'
import { Period } from 'components/DateRangePicker/DateRangePicker.types'
import { abreviatedMonths } from 'components/DateRangePicker/DateRangePicker.utils'
import { apiServer } from '../../../pages/api/[...path]'
import { useAuth } from 'context/AuthContext'
import { useBike } from 'context/BikeContext'
import { AxiosError } from 'axios'
import { bikeService } from 'services/bike.service'

type BookingContextType = ReturnType<typeof useBookingState>

const BookingContext = createContext<BookingContextType | undefined>(undefined)

const useBookingState = () => {
  const { bike } = useBike()
  const { user } = useAuth()
  const rateByDay = bike?.rate || 0
  const rateByWeek = rateByDay * 7

  const [selectedPeriod, setSelectedPeriod] = useState<Partial<Period>>({})
  const [openMobileDrawer, setOpenMobileDrawer] = useState(false)
  const [isBooked, setIsBooked] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [openBookedModal, setOpenBookedModal] = useState<boolean>(false)
  const [rentAmount, setRentAmount] = useState<string>('0')
  const [totalAmount, setTotalAmount] = useState<string>('0')
  const [servicesFee, setServicesFee] = useState<string>('0')
  const [isRenting, setIsRenting] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const toggleBookedModal = () => setOpenBookedModal((state) => !state)
  const toggleBooked = () => setIsBooked((state) => !state)
  const toggleMobileDrawer = () => setOpenMobileDrawer((state) => !state)

  const onChangePeriod = async (period: Partial<Period>) => {
    if (!period.startDate || !period.endDate) {
      setRentAmount('0')
      setTotalAmount('0')
      setServicesFee('0')
      setError(null)
      return
    }
    if (period.startDate && period.endDate && bike && user) {
      try {
        setIsLoading(true)
        const response = await bikeService.getRentAmount({
          bikeId: bike.id,
          dateFrom: period.startDate.format('YYYY-MM-DD'),
          dateTo: period.endDate.format('YYYY-MM-DD'),
          userId: user.id,
        })
        setRentAmount(response.rentAmount.toFixed(2))
        setTotalAmount(response.totalAmount.toFixed(2))
        setServicesFee(response.fee.toFixed(2))
        setError(null)
      } catch (error: any) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
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

      toggleBooked()
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
    error,
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
