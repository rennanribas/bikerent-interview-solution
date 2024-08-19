import { Typography, TextField, Button, Box } from '@mui/material'
import { useState } from 'react'
import { Container, PaperStyled } from './Login.styles'
import { useRouter } from 'next/router'
import { useAuth } from 'context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const { login } = useAuth()

  const handleLogin = async () => {
    const response = await fetch('/api/services/login?email=' + email + '&password=' + password)
    const { user, token } = await response.json()
    console.log(user, token)
    await login(user, token)
    router.push('/Home')
  }

  return (
    <Container data-testid='login-page'>
      <PaperStyled>
        <Typography variant='h1'>Login</Typography>
        <Box component='form' noValidate autoComplete='off' sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label='Email'
            variant='outlined'
            margin='normal'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label='Password'
            type='password'
            variant='outlined'
            margin='normal'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant='contained'
            color='primary'
            onClick={handleLogin}
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </Box>
      </PaperStyled>
    </Container>
  )
}

export default Login
