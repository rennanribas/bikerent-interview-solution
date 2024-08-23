import { Box, BoxProps, styled } from '@mui/material'
import InfoOutlined from '@mui/icons-material/InfoOutlined'

export const OverviewContainer = styled(Box)<BoxProps>(() => ({
  width: '100%',
}))

export const PriceRow = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

export const InfoIcon = styled(InfoOutlined)(({ theme }) => ({
  color: theme.palette.grey[500],
}))
