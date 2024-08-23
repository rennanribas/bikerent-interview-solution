import { useMediaQuery } from '@mui/material'
import { DesktopHeader, MobileHeader } from './layouts'
import theme from 'styles/theme'

const HeaderContainer = () => {
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('md'))

  return isMobileScreen ? <MobileHeader /> : <DesktopHeader />
}

export default HeaderContainer
