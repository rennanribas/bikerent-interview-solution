import { Box, Dialog, IconButton, Typography } from '@mui/material'
import { useState } from 'react'
import NextLink from 'next/link'
import {
  LoginButton,
  LogOutButton,
  MenuIcon,
  MenuModal,
  SignUpButton,
} from './Menu.component.style'
import { useAuth } from 'context/AuthContext'
import theme from 'styles/theme'
import { useBike } from 'context/BikeContext'

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()
  const { bike } = useBike()

  const handleToggleIsMenuOpen = () => {
    setIsMenuOpen((currentValue) => !currentValue)
  }

  return (
    <>
      <IconButton onClick={handleToggleIsMenuOpen} data-testid='mobile-menu-button'>
        <MenuIcon
          sx={bike ? { color: theme.palette.common.black } : { color: theme.palette.common.white }}
        />
      </IconButton>
      <Dialog open={isMenuOpen} onClose={handleToggleIsMenuOpen}>
        <MenuModal>
          {isAuthenticated ? (
            <Box display='flex' alignItems='center'>
              <Typography marginX={2}>Welcome, {user?.name || 'User'}!</Typography>
              <LogOutButton
                variant='contained'
                color='primary'
                disableElevation
                data-testid='logout-button'
                onClick={logout}
              >
                Log out
              </LogOutButton>
            </Box>
          ) : (
            <>
              <NextLink href='/Login' passHref>
                <LoginButton data-testid='login-button'>Log in</LoginButton>
              </NextLink>

              <NextLink href='/Signup' passHref>
                <SignUpButton
                  variant='contained'
                  color='secondary'
                  disableElevation
                  data-testid='signup-button'
                >
                  Sign up
                </SignUpButton>
              </NextLink>
            </>
          )}
        </MenuModal>
      </Dialog>
    </>
  )
}

export default MobileMenu
