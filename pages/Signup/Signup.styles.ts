import { Box, Button, IconButton, TextField, Typography, styled } from '@mui/material'
import theme from 'styles/theme'

export const Container = styled(Box)(() => ({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,

  [theme.breakpoints.down('md')]: {
    padding: '0 4vw',
  },
}))

export const SignupCard = styled(Box)(() => ({
  maxWidth: '500px',
  padding: '32px',
  width: '100%',
  boxShadow: '0px 10px 70px 0px rgba(0, 0, 0, 0.1)',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  background: theme.palette.common.white,
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
}))

export const Title = styled(Typography)(() => ({
  fontSize: '32px',
  fontWeight: 700,
  color: theme.palette.primary.main,
  textAlign: 'center',
}))

export const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
}))

export const Input = styled(TextField)(() => ({
  '& .MuiInputBase-root': {
    borderRadius: '12px',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.grey[300],
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}))

export const SubmitButton = styled(Button)(() => ({
  borderRadius: 30,
  padding: '16px 0',
  marginTop: 24,
  textTransform: 'none',
  color: theme.palette.common.white,
  fontWeight: 600,
  fontSize: '18px',
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
  },
}))

export const ErrorMessage = styled(Typography)(() => ({
  fontSize: '14px',
  color: theme.palette.error.main,
  marginTop: '-8px',
}))

export const HomeButton = styled(IconButton)(() => ({
  position: 'absolute',
  top: '20px',
  left: '20px',
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}))
