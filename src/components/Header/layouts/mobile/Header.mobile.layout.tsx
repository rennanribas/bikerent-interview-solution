import { Box, Dialog, IconButton, Typography } from '@mui/material'
import { useState } from 'react'
import NextLink from 'next/link'
import {
  Actions,
  Container,
  LocationIcon,
  LoginButton,
  MenuIcon,
  MenuModal,
  SignUpButton,
  Title,
} from './Header.mobile.styles'

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleIsMenuOpen = () => {
    setIsMenuOpen((currentValue) => !currentValue)
  }

  return (
    <>
      <Container data-testid='header'>
        <Actions>
          <IconButton onClick={handleToggleIsMenuOpen}>
            <MenuIcon />
          </IconButton>

          <Box display='flex' alignItems='center' data-testid='location-label'>
            <Typography color='white' marginRight={0.75}>
              Manhattan
            </Typography>

            <LocationIcon fontSize='small' />
          </Box>
        </Actions>

        <Title data-testid='app-name'>Bike Rental</Title>
      </Container>

      <Dialog open={isMenuOpen} onClose={handleToggleIsMenuOpen}>
        <MenuModal>
          <NextLink href='/login' passHref>
            <LoginButton data-testid='login-button'>Log in</LoginButton>
          </NextLink>

          <NextLink href='/sign-up' passHref>
            <SignUpButton
              variant='contained'
              color='secondary'
              disableElevation
              data-testid='signup-button'
            >
              Sign up
            </SignUpButton>
          </NextLink>
        </MenuModal>
      </Dialog>
    </>
  )
}

export default MobileHeader
