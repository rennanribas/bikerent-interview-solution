import Bike from 'models/Bike'
import BikeDetails from './BikeDetails.component'

interface BikeDetailsContainerProps {
  bike: Bike
}

const BikeDetailsContainer = ({ bike }: BikeDetailsContainerProps) => {
  return <BikeDetails bike={bike} />
}

export default BikeDetailsContainer
