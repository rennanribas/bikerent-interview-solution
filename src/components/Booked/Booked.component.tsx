import {
  BikeImage,
  BikeDetailContainer,
  Container,
  BikeNameContainer,
  ButtonHome,
  ButtonWrapper,
} from './Booked.styles'
import { Typography, useMediaQuery } from '@mui/material'
import theme from 'styles/theme'
import BikeType from 'components/BikeType'
import { useBike } from 'context/BikeContext'
import Link from 'next/link'

export const Booked = () => {
  const { bike } = useBike()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
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
      {isMobile && (
        <Link href='/'>
          <ButtonHome
            variant='contained'
            color='primary'
            disableElevation
            data-testid='rent-button'
          >
            <ButtonWrapper>Go to Home Page</ButtonWrapper>
          </ButtonHome>
        </Link>
      )}
    </Container>
  )
}
