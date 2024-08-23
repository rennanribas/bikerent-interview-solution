import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useAuth } from 'context/AuthContext'

interface SignupForm {
  name: string
  email: string
  password: string
}

export const useSignup = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignupForm>()
  const router = useRouter()
  const { login } = useAuth()

  const onSubmit = handleSubmit(async (data: SignupForm) => {
    try {
      const response = await fetch('/api/services/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        const { user, token } = await response.json()
        await login(user, token)
        router.push('/Home')
      } else {
        const { error: errorMessage } = await response.json()
        setError('email', { type: 'manual', message: errorMessage || 'An unknown error occurred' })
      }
    } catch (error) {
      console.error('Signup error:', error)
      setError('email', { type: 'manual', message: 'An unexpected error occurred' })
    }
  })

  return { errors, register, onSubmit }
}
