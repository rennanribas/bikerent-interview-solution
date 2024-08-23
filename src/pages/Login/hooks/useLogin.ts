import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useAuth } from 'context/AuthContext'
import { useBike } from 'context/BikeContext'   

interface LoginForm {
  email: string
  password: string
}

export const useLogin = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginForm>()
  const router = useRouter()
  const { login } = useAuth()
  const { bike } = useBike()

  const onSubmit = handleSubmit(async (data: LoginForm) => {
    try {
      const response = await fetch(
        '/api/services/login?email=' + data.email + '&password=' + data.password,
      )
      if (response.ok) {
        const { user, token } = await response.json()
        await login(user, token)
        if (bike) router.push('/BikeDetails')
        else router.push('/Home')
      } else {
        const { error: errorMessage } = await response.json()
        setError('email', { type: 'manual', message: errorMessage || 'An unknown error occurred' })
      }
    } catch (error) {
      console.error('Login error:', error)
      setError('email', { type: 'manual', message: 'An unexpected error occurred' })
    }
  })

  return { errors, register, onSubmit }
}
