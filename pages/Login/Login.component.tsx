import { InputAdornment, Typography, Link } from '@mui/material'
import {
  Container,
  ErrorMessage,
  Form,
  HomeButton,
  Input,
  LoginCard,
  SubmitButton,
  Title,
} from './Login.styles'
import { AccountCircle, PasswordOutlined } from '@mui/icons-material'
import { useLogin } from './hooks/useLogin'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'
import HomeOutlined from '@mui/icons-material/HomeOutlined'

const Login = () => {
  const { errors, register, onSubmit } = useLogin()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <Container data-testid='login-page'>
      <NextLink href='/' passHref>
        <HomeButton data-testid='home-button'>
          <HomeOutlined />
        </HomeButton>
      </NextLink>
      <LoginCard>
        <Title color='primary' variant='h1'>
          Welcome Back
        </Title>
        <Typography variant='subtitle1' align='center'>
          Enter your credentials to access your account
        </Typography>
        <Form data-testid='form-container' onSubmit={onSubmit}>
          <Input
            required
            data-testid='email-input'
            {...register('email')}
            error={!!errors.email?.message}
            label='Email'
            type='email'
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <AccountCircle color='primary' />
                </InputAdornment>
              ),
            }}
          />
          {errors.email?.message && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
          <Input
            required
            data-testid='password-input'
            error={!!errors.password?.message}
            {...register('password')}
            label='Password'
            type='password'
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <PasswordOutlined color='primary' />
                </InputAdornment>
              ),
            }}
          />
          {errors.password?.message && <ErrorMessage>{errors.password?.message}</ErrorMessage>}

          <Link href='#' variant='body2' align='right'>
            Forgot Password?
          </Link>

          <SubmitButton
            data-testid='login-button'
            type='submit'
            variant='contained'
            disableElevation
            fullWidth
          >
            Login
          </SubmitButton>
        </Form>
        <Typography variant='body2' align='center'>
          Do not have an account?{' '}
          <NextLink href='/Signup' passHref>
            <Link color='primary'>Sign up</Link>
          </NextLink>
        </Typography>
      </LoginCard>
    </Container>
  )
}

export default Login
