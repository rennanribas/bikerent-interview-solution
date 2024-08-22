import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Card,
  CardProps,
  Modal,
  styled,
  SwipeableDrawer,
} from '@mui/material'
import InfoOutlined from '@mui/icons-material/InfoOutlined'

export const BookingContainer = styled(Card)<CardProps>(({ theme }) => ({
  borderColor: theme.palette.grey[500],
  padding: '30px 10px',
  width: '100%',
  maxWidth: '447px',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
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

export const InfoIcon = styled(InfoOutlined)(({ theme }) => ({
  color: theme.palette.grey[500],
}))

export const MobileDatePicker = styled('button')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '0 15px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: theme.palette.grey[100],
  borderRadius: '30px',
  height: '56px',
  backgroundColor: 'transparent',
  fontWeight: 600,
  fontSize: '16px',
  color: theme.palette.common.black,
}))

export const MobileSelectDateButton = styled(Button)<ButtonProps>(({ theme }) => ({
  marginTop: '66px',
  width: '100%',
  borderRadius: '20px',
  backgroundColor: theme.palette.secondary.main,
  padding: '18px 0',
  fontSize: '16px',
  fontWeight: 800,
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

export const BookedModal = styled(Modal)(() => ({
  width: '100%',
  height: '100%',
}))

export const StyledDrawer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  top: -56,
  borderTopLeftRadius: '30px',
  borderTopRightRadius: '30px',
  visibility: 'visible',
  right: 0,
  left: 0,
  padding: '60px 24px 15px 24px',
}))

export const Puller = styled(Box)(({ theme }) => ({
  width: 49,
  height: 5,
  backgroundColor: theme.palette.grey[300],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
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
