import { Box, Divider, Typography } from '@mui/material'
import BikeImageSelector from 'components/BikeImageSelector'
import BikeSpecs from 'components/BikeSpecs'
import BikeType from 'components/BikeType'
import BookingAddressMap from 'components/BookingAddressMap'
import Booking from 'components/Booking'
import {
  BottomDrawer,
  Footer,
  DetailsContainer,
  FavoriteIcon,
  ImageContainer,
  LikeButton,
  PriceRow,
  Puller,
  RentButton,
  TopDrawer,
  TransparentSwipeableDrawer,
} from './BikeDetails.mobile.styles'
import { useBike } from 'context/BikeContext'
import { useState } from 'react'

const BikeDetailsMobile = () => {
  const { bike } = useBike()
  const rateByDay = bike?.rate || 0
  const rateByWeek = rateByDay * 7
  const [isRenting, setIsRenting] = useState(false)

  const toggleMobileDrawer = () => {
    setIsRenting(!isRenting)
  }

  return (
    <div data-testid='bike-details-page'>
      <Booking />
      <TransparentSwipeableDrawer
        swipeAreaWidth={56}
        onOpen={toggleMobileDrawer}
        onClose={toggleMobileDrawer}
        open={!isRenting}
        anchor='bottom'
        ModalProps={{
          keepMounted: true,
        }}
      >
        <TopDrawer data-testid='bike-top-drawer'>
          <ImageContainer data-testid='bike-top-container'>
            <Puller />
            {!!bike?.imageUrls && <BikeImageSelector imageUrls={bike.imageUrls} />}
          </ImageContainer>
        </TopDrawer>
        <Box width='90%' zIndex={2} alignSelf={'center'} marginTop='-30px' marginBottom='-30px'>
          <BikeSpecs bodySize={bike?.bodySize} maxLoad={bike?.maxLoad} ratings={bike?.ratings} />
        </Box>

        <BottomDrawer>
          <DetailsContainer data-testid='bike-details-container'>
            <Box marginY={2.25}>
              <Box display='flex' alignItems='center' justifyContent='space-between'>
                <Typography
                  variant='h1'
                  fontSize={38}
                  fontWeight={800}
                  marginBottom={0.5}
                  data-testid='bike-name-details'
                >
                  {bike?.name}
                </Typography>
              </Box>
              <BikeType type={bike?.type} />

              <Typography marginTop={1.5} fontSize={14}>
                {bike?.description}
              </Typography>
            </Box>

            <Divider sx={{ backgroundColor: 'white' }} />

            <Box marginY={2.25} data-testid='bike-prices-details'>
              <PriceRow>
                <Typography>Day</Typography>
                <Typography fontWeight={800} fontSize={24} letterSpacing={1}>
                  {rateByDay} €
                </Typography>
              </PriceRow>

              <PriceRow>
                <Typography>Week</Typography>
                <Typography fontWeight={800} fontSize={24} letterSpacing={1}>
                  {rateByWeek} €
                </Typography>
              </PriceRow>
            </Box>

            <Divider sx={{ backgroundColor: 'white' }} />

            <Box marginTop={3.25}>
              <Typography variant='h1' fontSize={24} fontWeight={800}>
                Full adress after booking
              </Typography>

              <BookingAddressMap />
            </Box>
            <Footer>
              <LikeButton>
                <FavoriteIcon />
              </LikeButton>
              <RentButton
                variant='contained'
                color='secondary'
                disableElevation
                data-testid='rent-button'
                onClick={toggleMobileDrawer}
              >
                Rent Bike
              </RentButton>
            </Footer>
          </DetailsContainer>
        </BottomDrawer>
      </TransparentSwipeableDrawer>
    </div>
  )
}

export default BikeDetailsMobile
