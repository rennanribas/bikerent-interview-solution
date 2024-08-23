import { Box, styled, Button } from '@mui/material'
import theme from 'styles/theme'

export const Container = styled(Box)(() => ({
  height: '423px',
  width: '100%',
  maxWidth: '397px',
  borderRadius: '30px',
  backgroundColor: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '24px',

  [theme.breakpoints.down('lg')]: {
    height: '427px',
    maxWidth: '327px',
    borderRadius: '20px',
  },
}))

export const BikeDetailContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
}))

export const BikeImage = styled('img')(() => ({
  height: '105px',
  width: '185px',
  objectFit: 'cover',
}))

export const BikeNameContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}))

export const ButtonWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
}))

export const ButtonHome = styled(Button)(({ theme }) => ({
  borderRadius: '20px',
  backgroundColor: theme.palette.primary.main,
  fontSize: '20px',
  fontWeight: 700,
  color: theme.palette.common.white,
  textTransform: 'none',
  transition: 'all 0.3s ease-in-out',

  ':active': {
    backgroundColor: theme.palette.secondary.main,
    opacity: 0.8,
  },

  ':hover': {
    backgroundColor: theme.palette.secondary.main,
    opacity: 0.8,
  },
}))
