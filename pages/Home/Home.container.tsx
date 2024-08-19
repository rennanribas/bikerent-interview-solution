import Bike from 'models/Bike'
import { useEffect, useState } from 'react'
import Home from './Home.component'
import { BOILERPLATE_CANDIDATE_TOKEN } from 'config'

const HomeContainer = () => {
  const [bikes, setBikes] = useState<Bike[]>([])

  useEffect(() => {
    const getAllBikes = async () => {
      const response = await fetch('/api/bikes')
      setBikes(await response.json())
    }

    getAllBikes()
  }, [])

  return <Home appIsNotConfigured={!BOILERPLATE_CANDIDATE_TOKEN} bikes={bikes} />
}

export default HomeContainer
