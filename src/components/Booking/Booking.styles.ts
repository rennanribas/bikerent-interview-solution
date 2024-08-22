import { Button, ButtonProps, Card, CardProps, styled } from '@mui/material'

export const BookingContainer = styled(Card)<CardProps>(({ theme }) => ({
  borderColor: theme.palette.grey[500],
  padding: '30px 10px',
  width: '100%',
  maxWidth: '447px',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}))

export const LoginBookingButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.common.white,
  borderRadius: 16,
  textTransform: 'none',
  fontSize: 16,
  padding: '14px 20px',

  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}))
