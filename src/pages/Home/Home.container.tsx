import Bike from 'models/Bike'
import { useEffect, useState } from 'react'
import Home from './Home.component'
import { useBike } from 'context/BikeContext'

const HomeContainer = () => {
  const [bikes, setBikes] = useState<Bike[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { setBike } = useBike()

  useEffect(() => {
    const getAllBikes = async () => {
      try {
        const response = await fetch('/api/bikes')
        const data = await response.json()
        setBikes(data)
      } catch (error) {
        console.error('Error fetching bikes:', error)
      } finally {
        setIsLoading(false)
      }
    }
    setBike()

    getAllBikes()
  }, [])

  if (isLoading) {
    return <div>Loading Bike List...</div>
  }

  return <Home bikes={bikes} />
}

export default HomeContainer
