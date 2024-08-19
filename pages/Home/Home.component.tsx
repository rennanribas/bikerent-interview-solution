import Header from 'components/Header'
import BikeList from 'components/BikeList'
import Bike from 'models/Bike'
import { Content } from './Home.styles'

interface HomeProps {
  bikes: Bike[]
}

const Home = ({ bikes }: HomeProps) => {
  return (
    <div data-testid='home-page'>
      <Header />

      <Content>
        {bikes.length > 0 ? <BikeList bikes={bikes} /> : <p>No bikes available at the moment.</p>}
      </Content>
    </div>
  )
}

export default Home
