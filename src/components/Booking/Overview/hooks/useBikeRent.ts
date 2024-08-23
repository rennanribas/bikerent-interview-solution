import { useMemo, useState } from 'react'
import { useMediaQuery } from '@mui/material'
import theme from 'styles/theme'
import { Period } from 'components/DateRangePicker/DateRangePicker.types'
import { abreviatedMonths } from 'components/DateRangePicker/DateRangePicker.utils'
import { apiServer } from '../../../../pages/api/[...path]'
import { useAuth } from 'context/AuthContext'
import { useBike } from 'context/BikeContext'
import { AxiosError } from 'axios'

export const useOverview = () => {
  const { bike } = useBike()
  const { user } = useAuth()
  const rateByDay = bike?.rate || 0
  const rateByWeek = rateByDay * 7

  const [selectedPeriod, setSelectedPeriod] = useState<Partial<Period>>({})
  const [openMobileDrawer, setOpenMobileDrawer] = useState(false)
  const [booked, setBooked] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [openBookedModal, setOpenBookedModal] = useState<boolean>(false)
  const [rentAmount, setRentAmount] = useState<number>(0)
  const [totalAmount, setTotalAmount] = useState<number>(0)
  const [servicesFee, setServicesFee] = useState<number>(0)

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
      setRentAmount(data.rentAmount)
      setTotalAmount(data.totalAmount)
      setServicesFee(data.fee)
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

      if (!user) return Error('You must sign up to rent a bike')
      if (!bike) return Error('You must select a bike to rent')
      if (!selectedPeriod.startDate || !selectedPeriod.endDate)
        return Error('You must select a period to rent a bike')

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
        return Error(error.response?.data?.message || 'Error renting bike')
      Error('Error renting bike')
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
    booked,
    isLoading,
    handleBooking,
  }
}
