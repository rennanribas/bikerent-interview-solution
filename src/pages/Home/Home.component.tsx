import Header from 'components/Header'
import BikeList from 'components/BikeList'
import { Content } from './Home.styles'
import { useEffect } from 'react'
import { useBike } from 'context/BikeContext'

const Home = () => {
  const { setBike } = useBike()

  useEffect(() => {
    setBike()
  }, [])

  return (
    <div data-testid='home-page'>
      <Header />

      <Content>
        <BikeList />
      </Content>
    </div>
  )
}

export default Home
