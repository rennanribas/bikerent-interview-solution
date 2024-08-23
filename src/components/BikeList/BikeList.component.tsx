import { useEffect, useState } from 'react'
import Bike from 'models/Bike'
import { getQuantityLabel } from './BikeList.utils'
import BikeCard from 'components/BikeCard'
import { Container, ListContainer, QuantityContainer } from './BikeList.styles'
import { Typography } from '@mui/material'
import { bikeService } from 'services/bike.service'

const BikeList = () => {
  const [allBikes, setAllBikes] = useState<Bike[]>([])
  const [availableBikes, setAvailableBikes] = useState<Bike[]>([])

  useEffect(() => {
    const fetchBikes = async () => {
      const [all, available] = await Promise.all([
        bikeService.getAllBikes(),
        bikeService.getAvailableBikes(),
      ])
      setAllBikes(all)
      setAvailableBikes(available)
    }
    fetchBikes()
  }, [])

  const quantityLabel = getQuantityLabel(availableBikes.length)

  return (
    <Container data-testid='bikes-list'>
      <QuantityContainer className='list-quantity-container'>
        <Typography color='primary.light' data-testid='list-quantity'>
          {quantityLabel}
        </Typography>
      </QuantityContainer>

      <ListContainer>
        {allBikes.map((bike) => (
          <BikeCard
            key={bike.id}
            bike={bike}
            isAvailable={availableBikes.some((availableBike) => availableBike.id === bike.id)}
          />
        ))}
      </ListContainer>
    </Container>
  )
}

export default BikeList
