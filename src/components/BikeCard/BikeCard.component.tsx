import { Divider, IconButton, Typography } from '@mui/material'
import BikeType from 'components/BikeType'
import BikePlaceholder from 'assets/bike-placeholder.png'
import Bike from 'models/Bike'
import {
  Container,
  Header,
  Footer,
  Name,
  PriceText,
  ImageContainer,
  FavoriteIcon,
  BikeImage,
} from './BikeCard.styles'

type JustDisplayedBikeData = Omit<Bike, 'candidateId' | 'maxLoad' | 'ratings'>

interface BikeCardComponentProps extends JustDisplayedBikeData {
  isImageLoaded: boolean
  cardImage: string
  isAvailable: boolean
  handleOpenBikeDetails: () => void
  handleIsImageLoaded: (isLoading: boolean) => void
}

const BikeCard = ({
  isImageLoaded,
  name,
  cardImage,
  type,
  rate,
  handleOpenBikeDetails,
  handleIsImageLoaded,
  isAvailable,
}: BikeCardComponentProps) => {
  const LikeButton = (
    <IconButton>
      <FavoriteIcon />
    </IconButton>
  )

  const notAvailableTypography = (
    <Typography fontSize={24} fontWeight={700}>
      Rented
    </Typography>
  )

  return (
    <Container variant='outlined' data-testid='bike-card'>
      <Header action={isAvailable ? LikeButton : notAvailableTypography} />

      <div
        onClick={handleOpenBikeDetails}
        style={{ cursor: isAvailable ? 'pointer' : 'default', opacity: isAvailable ? 1 : 0.5 }}
      >
        <ImageContainer>
          {!isImageLoaded && (
            <img
              src={BikePlaceholder}
              width='100%'
              alt='Bike Placeholder Image'
              placeholder={BikePlaceholder}
            />
          )}

          <BikeImage
            src={cardImage}
            isLoaded={isImageLoaded}
            width='100%'
            alt='Bike Image'
            data-testid='bike-image'
            onLoadStart={() => handleIsImageLoaded(false)}
            onLoad={() => handleIsImageLoaded(true)}
          />
        </ImageContainer>

        <Name data-testid='bike-name'>{name}</Name>

        <Divider />

        <Footer
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          data-testid='card-footer'
        >
          <BikeType type={type} />

          <Typography letterSpacing={1} data-testid='bike-price-day'>
            <PriceText component={'span'}>{rate} €/</PriceText>
            Day
          </Typography>
        </Footer>
      </div>
    </Container>
  )
}

export default BikeCard
