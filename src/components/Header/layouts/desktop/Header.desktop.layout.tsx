import { Box, Typography } from '@mui/material'
import NextLink from 'next/link'
import { Actions, Container, Icon, LoginButton, SignUpButton, Title } from './Header.desktop.styles'

const DesktopHeader = () => {
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
      </Actions>
    </Container>
  )
}

export default DesktopHeader
