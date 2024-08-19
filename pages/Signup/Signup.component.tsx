import { Typography, TextField, Button, Box, Alert } from '@mui/material'
import { useEffect, useState } from 'react'
import { Container, PaperStyled } from './Signup.styles'
import { useRouter } from 'next/router'
import { useAuth } from 'context/AuthContext'

const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const { login, isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/Home')
    }
  }, [isAuthenticated, router])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault() // Prevent default form submission

    const { name, email, password } = formState

    if (!name || !email || !password) {
      setError('All fields are required')
      return
    }

    try {
      const response = await fetch(
        `/api/services/signup?email=${email}&password=${password}&name=${name}`,
      )

      if (response.ok) {
        const { user, token } = await response.json()
        await login(user, token)
        router.push('/Home')
      } else {
        const { error: errorMessage } = await response.json()
        setError(errorMessage || 'An unknown error occurred')
      }
    } catch (error) {
      console.error('Signup error:', error)
      setError('An unexpected error occurred')
    }
  }

  return (
    <Container data-testid='signup-page'>
      <PaperStyled>
        <Typography variant='h1'>Create Account</Typography>
        {error && (
          <Alert severity='error' sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}{' '}
        {/* Display error message */}
        <Box component='form' noValidate autoComplete='off' onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label='Name'
            variant='outlined'
            margin='normal'
            name='name'
            value={formState.name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label='Email'
            variant='outlined'
            margin='normal'
            name='email'
            type='email'
            value={formState.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label='Password'
            type='password'
            variant='outlined'
            margin='normal'
            name='password'
            value={formState.password}
            onChange={handleChange}
            required
          />
          <Button fullWidth variant='contained' color='primary' type='submit' sx={{ mt: 2 }}>
            Register
          </Button>
        </Box>
      </PaperStyled>
    </Container>
  )
}

export default Signup
