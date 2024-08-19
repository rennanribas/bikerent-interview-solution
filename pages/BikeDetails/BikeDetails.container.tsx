import { useEffect } from 'react'
import { useRouter } from 'next/router'
import BikeDetails from './BikeDetails.component'
import { useBike } from 'context/BikeContext'

const BikeDetailsContainer = () => {
  const { bike } = useBike()
  const router = useRouter()

  useEffect(() => {
    if (!bike) {
      router.push('/Home')
    }
  }, [bike, router])

  if (!bike) {
    return null
  }

  return <BikeDetails bike={bike} />
}

export default BikeDetailsContainer
