import { styled } from '@mui/material/styles'
import { Container as MuiContainer, Paper as MuiPaper } from '@mui/material'

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: theme.palette.grey[100], // Background color from theme
}))

export const PaperStyled = styled(MuiPaper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 400,
  width: '100%',
  textAlign: 'center',
  boxShadow: theme.shadows[5], // Shadow from theme
}))
