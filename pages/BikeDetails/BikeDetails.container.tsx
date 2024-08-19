import BikeDetails from './BikeDetails.component'
import { useBike } from 'context/BikeContext'

const BikeDetailsContainer = () => {
  const { bike } = useBike()

  return <BikeDetails bike={bike} />
}

export default BikeDetailsContainer
