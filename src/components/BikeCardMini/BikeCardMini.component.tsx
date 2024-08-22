import React from 'react'
import { Box, Typography } from '@mui/material'
import { BikeImage, BikeName, CardContainer, ImageContainer, PriceText } from './BikeCardMini.style'
import { useBike } from 'context/BikeContext'
import BikeType from 'components/BikeType'

const BikeCardMini = () => {
  const { bike } = useBike()
  if (!bike) return null
  const { name, type, rate, imageUrls } = bike

  return (
    <CardContainer>
      <ImageContainer>
        <BikeImage alt='Bike Image' data-testid='bike-image' src={imageUrls[0]} />
      </ImageContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <BikeName>{name}</BikeName>
        <Box display='inline-block'>
          <BikeType type={type} />
        </Box>
        <Typography marginTop={1} letterSpacing={1} data-testid='bike-price-day'>
          <PriceText component={'span'}>{rate} €/</PriceText>
          Day
        </Typography>
      </Box>
    </CardContainer>
  )
}

export default BikeCardMini
