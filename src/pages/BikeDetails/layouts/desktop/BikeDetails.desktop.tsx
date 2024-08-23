import { Box, Breadcrumbs, Divider, Typography } from '@mui/material'
import BikeImageSelector from 'components/BikeImageSelector'
import BikeSpecs from 'components/BikeSpecs'
import BikeType from 'components/BikeType'
import BookingAddressMap from 'components/BookingAddressMap'
import Header from 'components/Header'
import {
  BreadcrumbContainer,
  BreadcrumbHome,
  BreadcrumbSeparator,
  Content,
  DetailsContainer,
  FavoriteIcon,
  LikeButton,
  PriceRow,
} from './BikeDetails.desktop.styles'
import Booking from 'components/Booking'
import { useBike } from 'context/BikeContext'
import NextLink from 'next/link'

const BikeDetailsDesktop = () => {
  const { bike } = useBike()
  const rateByDay = bike?.rate || 0
  const rateByWeek = rateByDay * 7

  return (
    <div data-testid='bike-details-page'>
      <Header />
      <BreadcrumbContainer data-testid='bike-details-breadcrumbs'>
        <Breadcrumbs separator={<BreadcrumbSeparator />}>
          <NextLink href='/' passHref>
            <Typography
              component='span'
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              <BreadcrumbHome />
            </Typography>
          </NextLink>

          <Typography fontWeight={800} letterSpacing={1} color='white'>
            {bike?.name}
          </Typography>
        </Breadcrumbs>
      </BreadcrumbContainer>

      <Content>
        <DetailsContainer variant='outlined' data-testid='bike-details-container'>
          {!!bike?.imageUrls && <BikeImageSelector imageUrls={bike.imageUrls} />}

          <BikeSpecs bodySize={bike?.bodySize} maxLoad={bike?.maxLoad} ratings={bike?.ratings} />

          <Divider />

          <Box marginY={2.25}>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
              <div>
                <Typography
                  variant='h1'
                  fontSize={38}
                  fontWeight={800}
                  marginBottom={0.5}
                  data-testid='bike-name-details'
                >
                  {bike?.name}
                </Typography>

                <BikeType type={bike?.type} />
              </div>

              <LikeButton>
                <FavoriteIcon />
              </LikeButton>
            </Box>

            <Typography marginTop={1.5} fontSize={14}>
              {bike?.description}
            </Typography>
          </Box>

          <Divider />

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

          <Divider />

          <Box marginTop={3.25}>
            <Typography variant='h1' fontSize={24} fontWeight={800}>
              Full adress after booking
            </Typography>

            <BookingAddressMap />
          </Box>
        </DetailsContainer>
        <Booking />
      </Content>
    </div>
  )
}

export default BikeDetailsDesktop
