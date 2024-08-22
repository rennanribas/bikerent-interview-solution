import { Box, styled, Typography, TypographyProps } from '@mui/material'
import LocationOnOutlined from '@mui/icons-material/LocationOnOutlined'
import Menu from '@mui/icons-material/Menu'

export const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  width: '100%',
  position: 'relative',
  height: 250,
  left: 0,
  top: 0,
  padding: '24px 8vw',
  borderBottomLeftRadius: theme.shape.borderRadius,
  borderBottomRightRadius: theme.shape.borderRadius,
  marginBottom: -180,
}))

export const LocationIcon = styled(LocationOnOutlined)(({ theme }) => ({
  color: theme.palette.common.white,
}))

export const Actions = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 34,
}))

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.common.white,
  textTransform: 'none',
  fontSize: 34,
  fontWeight: 800,
}))
