import { InputAdornment, Typography } from '@mui/material'
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
        <Title color='primary' variant='h1' data-testid='title-login'>
          Welcome Back
        </Title>
        <Typography variant='subtitle1' align='center' data-testid='subtitle-login'>
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
            placeholder='Email'
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
            placeholder='Password'
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

          <NextLink href='#' passHref>
            <Typography align='right' color='primary'>
              Forgot Password?
            </Typography>
          </NextLink>

          <SubmitButton
            data-testid='login-button'
            type='submit'
            variant='contained'
            disableElevation
            fullWidth
          >
            Submit
          </SubmitButton>
        </Form>
        <Typography variant='body2' align='center'>
          Do not have an account?{' '}
          <NextLink href='/Signup' passHref>
            <Typography color='primary'>Sign up</Typography>
          </NextLink>
        </Typography>
      </LoginCard>
    </Container>
  )
}

export default Login
