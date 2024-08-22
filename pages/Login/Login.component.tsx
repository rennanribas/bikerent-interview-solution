import { Typography, TextField, Button, Box, Alert } from '@mui/material'
import { useState } from 'react'
import { Container, PaperStyled } from './Login.styles'
import { useRouter } from 'next/router'
import { useAuth } from 'context/AuthContext'
import { useBike } from 'context/BikeContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const { login } = useAuth()
  const { bike } = useBike()

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const response = await fetch('/api/services/login?email=' + email + '&password=' + password)
      if (response.ok) {
        const { user, token } = await response.json()
        await login(user, token)
        if (bike) router.push('/BikeDetails')
        else router.push('/Home')
      } else {
        const { error: errorMessage } = await response.json()
        setError(errorMessage || 'An unknown error occurred')
      }
    } catch (error) {
      console.error('Login error:', error)
      setError('An unexpected error occurred')
    }
  }

  return (
    <Container data-testid='login-page'>
      <PaperStyled>
        <Typography variant='h1'>Login</Typography>
        {error && (
          <Alert severity='error' sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <Box component='form' noValidate autoComplete='off' onSubmit={handleLogin} sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label='Email'
            variant='outlined'
            margin='normal'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label='Password'
            type='password'
            variant='outlined'
            margin='normal'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button fullWidth variant='contained' color='primary' type='submit' sx={{ mt: 2 }}>
            Login
          </Button>
        </Box>
      </PaperStyled>
    </Container>
  )
}

export default Login
