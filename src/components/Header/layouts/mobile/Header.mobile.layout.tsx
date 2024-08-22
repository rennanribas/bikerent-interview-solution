import { Box, Typography } from '@mui/material'
import { Actions, Container, LocationIcon, Title } from './Header.mobile.styles'
import MobileMenu from 'components/MobileMenu/Menu.component'

const MobileHeader = () => {
  return (
    <Container data-testid='header'>
      <Actions>
        <MobileMenu />
        <Box display='flex' alignItems='center' data-testid='location-label'>
          <Typography color='white' marginRight={0.75}>
            Manhattan
          </Typography>

          <LocationIcon fontSize='small' />
        </Box>
      </Actions>

      <Title data-testid='app-name'>Bike Rental</Title>
    </Container>
  )
}

export default MobileHeader
