import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useBike } from 'context/BikeContext'
import { useMediaQuery } from '@mui/material'
import theme from 'styles/theme'
import BikeDetailsMobile from './layouts/mobile/BikeDetails.mobile'
import BikeDetailsDesktop from './layouts/desktop/BikeDetails.desktop'

const BikeDetailsContainer = () => {
  const { bike } = useBike()
  const router = useRouter()
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    if (!bike) {
      router.push('/Home')
    }
  }, [bike, router])

  return isMobileScreen ? <BikeDetailsMobile /> : <BikeDetailsDesktop />
}

export default BikeDetailsContainer
