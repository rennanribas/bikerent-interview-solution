import Menu from '@mui/icons-material/Menu'
import { Button, ButtonProps, DialogContent, styled } from '@mui/material'

export const MenuIcon = styled(Menu)(({ theme }) => ({
  color: theme.palette.common.white,
}))

export const MenuModal = styled(DialogContent)(() => ({
  padding: 24,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const LoginButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.common.black,
  borderRadius: 16,
  textTransform: 'none',
  fontSize: 16,
  margin: '0 30px 8px',

  '&:hover': {
    color: theme.palette.primary.light,
  },
}))

export const SignUpButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.common.black,
  borderRadius: 16,
  textTransform: 'none',
  fontSize: 16,
  padding: '14px 20px',

  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}))

export const LogOutButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.common.white,
  borderRadius: 16,
  textTransform: 'none',
  fontSize: 16,
  padding: '14px 20px',

  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}))
