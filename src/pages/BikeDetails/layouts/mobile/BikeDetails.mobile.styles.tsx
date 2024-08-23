import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Card,
  CardProps,
  IconButton,
  IconButtonProps,
  styled,
  SwipeableDrawer,
} from '@mui/material'
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined'
import InfoOutlined from '@mui/icons-material/InfoOutlined'

export const Content = styled(Box)<BoxProps>(({ theme }) => ({
  padding: '0 100px 44px',
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-start',
  gap: 24,

  [theme.breakpoints.down('lg')]: {
    padding: '0 20px 44px',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

export const ImageContainer = styled(Card)<CardProps>(({ theme }) => ({
  padding: '10%',
  border: 0,
  boxShadow: 'none',

  backgroundColor: theme.palette.common.white,
}))

export const DetailsContainer = styled(Card)<CardProps>(({ theme }) => ({
  borderColor: theme.palette.grey[500],
  padding: '7%',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflow: 'auto',
  paddingBottom: '15vh',
}))

export const TopDrawer = styled(Box)(({ theme }) => ({
  borderTopRightRadius: '30px',
  borderTopLeftRadius: '30px',
  visibility: 'visible',
  right: 0,
  left: 0,
  marginTop: '20%',
  backgroundColor: theme.palette.common.white,
  border: '0',
  zIndex: 0,
  marginBottom: '-6%',
}))

export const BottomDrawer = styled(Box)(({ theme }) => ({
  borderRadius: '30px',
  visibility: 'visible',
  border: 0,
  backgroundColor: theme.palette.primary.main,
  marginTop: '-10%',
  paddingTop: '10%',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}))

export const LikeButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  border: `1px solid ${theme.palette.common.white}`,
  borderRadius: 20,
  width: 70,
  height: 70,
}))

export const FavoriteIcon = styled(FavoriteBorderOutlined)(({ theme }) => ({
  color: theme.palette.common.white,
}))

export const InfoIcon = styled(InfoOutlined)(({ theme }) => ({
  color: theme.palette.grey[500],
}))

export const OverviewContainer = styled(Card)<CardProps>(({ theme }) => ({
  borderColor: theme.palette.grey[500],
  padding: 34,
  maxHeight: 295,
}))

export const BookingButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: 20,
  padding: '18px 0',
  marginTop: 30,
  textTransform: 'none',
  color: theme.palette.common.white,
  fontWeight: 800,
}))

export const PriceRow = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

export const Puller = styled(Box)(({ theme }) => ({
  width: 49,
  height: 5,
  backgroundColor: theme.palette.grey[300],
  borderRadius: 3,
  position: 'relative',
  marginBottom: 10,
  left: 'calc(50% - 15px)',
}))

export const DateRangePickerContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '26px 18px',
  borderRadius: '28px',
  backgroundColor: theme.palette.primary.main,
}))

export const TransparentSwipeableDrawer = styled(SwipeableDrawer)(() => ({
  '& .MuiDrawer-paper': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
}))

export const RentButton = styled(Button)<ButtonProps>(({ theme }) => ({
  width: '80%',
  borderRadius: '20px',
  backgroundColor: theme.palette.secondary.main,
  padding: '12px 0',
  fontSize: '24px',
  fontWeight: 700,
  color: theme.palette.common.black,
  textTransform: 'none',
  transition: 'all 0.3s ease-in-out',

  ':active': {
    backgroundColor: theme.palette.secondary.main,
    opacity: 0.8,
  },

  ':hover': {
    backgroundColor: theme.palette.secondary.main,
    opacity: 0.8,
  },
}))

export const Footer = styled(Box)({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  width: '100%',
  padding: '5%',
  backgroundColor: 'inherit',
  zIndex: 1000,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})
