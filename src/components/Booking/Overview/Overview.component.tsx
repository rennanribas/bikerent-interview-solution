import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import { OverviewContainer, PriceRow, InfoIcon } from './Overview.styles'
import { useBooking } from '../hooks/useBooking'

const Overview: React.FC = () => {
  const { rentAmount, totalAmount, servicesFee } = useBooking()

  return (
    <OverviewContainer data-testid='overview-container'>
      <Typography variant='h2' fontSize={16} marginBottom={1.25} marginTop={'22px'}>
        Booking Overview
      </Typography>

      <Divider />

      <PriceRow marginTop={1.75} data-testid='rent-overview-single-price'>
        <Box display='flex' alignItems='center'>
          <Typography marginRight={1}>Subtotal</Typography>
          <InfoIcon fontSize='small' />
        </Box>
        <Typography>{rentAmount} €</Typography>
      </PriceRow>

      <PriceRow marginTop={1} data-testid='rent-overview-single-price'>
        <Box display='flex' alignItems='center'>
          <Typography marginRight={1}>Service Fee</Typography>
          <InfoIcon fontSize='small' />
        </Box>
        <Typography>{servicesFee} €</Typography>
      </PriceRow>

      <PriceRow marginTop={1.75} data-testid='rent-overview-total'>
        <Typography fontWeight={800} fontSize={16}>
          Total
        </Typography>
        <Typography variant='h2' fontSize={24} letterSpacing={1}>
          {totalAmount} €
        </Typography>
      </PriceRow>
    </OverviewContainer>
  )
}

export default Overview
