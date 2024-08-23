import { Box, styled, Typography, TypographyProps } from '@mui/material'

export const BikeName = styled(Typography)({
  fontWeight: 600,
})

export const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  width: '100%',
  maxWidth: 400,
}))

export const ImageContainer = styled(Box)(() => ({
  width: '40%',
  marginRight: 16,
}))

export const BikeImage = styled('img')({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
})

export const PriceText = styled(Typography)<TypographyProps & { component: string }>(() => ({
  fontWeight: 800,
}))
