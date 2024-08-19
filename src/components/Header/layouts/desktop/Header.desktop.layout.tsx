import { Box, Typography, Button } from '@mui/material'
import NextLink from 'next/link'
import { Actions, Container, Icon, LoginButton, SignUpButton, Title } from './Header.desktop.styles'
import { useAuth } from 'context/AuthContext'

const DesktopHeader = () => {
  const { isAuthenticated, user, logout } = useAuth()

  return (
    <Container data-testid='header'>
      <Title data-testid='app-name'>Bike Rental</Title>

      <Actions>
        <Box display='flex' alignItems='center' data-testid='location-label'>
          <Typography color='white' marginRight={0.75}>
            Manhattan
          </Typography>
          <Icon fontSize='small' />
        </Box>

        {isAuthenticated ? (
          <Box display='flex' alignItems='center'>
            <Typography color='white' marginX={2}>
              Welcome, {user?.name || 'User'}
            </Typography>
            <LoginButton color='inherit' onClick={logout}>
              Log out
            </LoginButton>
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
      </Actions>
    </Container>
  )
}

export default DesktopHeader
