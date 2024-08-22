import { BikeImage, BikeDetailContainer, Container, BikeNameContainer } from './Booked.styles'
import { Typography } from '@mui/material'
import theme from 'styles/theme'
import BikeType from 'components/BikeType'
import { useBike } from 'context/BikeContext'

const Booked = () => {
  const { bike } = useBike()
  return (
    <Container>
      <Typography fontSize={24} fontWeight={'bold'} color={theme.palette.common.black}>
        Thank you!
      </Typography>
      <Typography fontWeight={'regular'}>Your bike is booked.</Typography>
      <BikeDetailContainer>
        <BikeImage src={bike?.imageUrls[0]} />
        <BikeNameContainer>
          <Typography fontSize={18} fontWeight={'600'} color={theme.palette.common.black}>
            {bike?.name}
          </Typography>
          <BikeType type={bike?.type} />
        </BikeNameContainer>
      </BikeDetailContainer>
    </Container>
  )
}

export default Booked
