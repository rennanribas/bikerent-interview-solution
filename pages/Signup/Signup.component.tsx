import { InputAdornment, Typography, Link } from '@mui/material'
import {
  Container,
  ErrorMessage,
  Form,
  HomeButton,
  Input,
  SignupCard,
  SubmitButton,
  Title,
} from './Signup.styles'
import { AccountCircle, PasswordOutlined, PersonOutline } from '@mui/icons-material'
import { useSignup } from './hooks/useSignup'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'
import HomeOutlined from '@mui/icons-material/HomeOutlined'

const Signup = () => {
  const { errors, register, onSubmit } = useSignup()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <Container data-testid='signup-page'>
      <NextLink href='/' passHref>
        <HomeButton data-testid='home-button'>
          <HomeOutlined />
        </HomeButton>
      </NextLink>
      <SignupCard>
        <Title color='primary' variant='h1'>
          Create Account
        </Title>
        <Typography variant='subtitle1' align='center'>
          Sign up to start renting bikes
        </Typography>
        <Form data-testid='form-container' onSubmit={onSubmit}>
          <Input
            required
            data-testid='name-input'
            {...register('name')}
            error={!!errors.name?.message}
            label='Name'
            type='text'
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <PersonOutline color='primary' />
                </InputAdornment>
              ),
            }}
          />
          {errors.name?.message && <ErrorMessage>{errors.name?.message}</ErrorMessage>}
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

          <SubmitButton
            data-testid='signup-button'
            type='submit'
            variant='contained'
            disableElevation
            fullWidth
          >
            Sign Up
          </SubmitButton>
        </Form>
        <Typography variant='body2' align='center'>
          Already have an account?{' '}
          <NextLink href='/Login' passHref>
            <Link color='primary'>Log in</Link>
          </NextLink>
        </Typography>
      </SignupCard>
    </Container>
  )
}

export default Signup
