import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { apiServer } from '../[...path]'

export default async function signupApi(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, password } = req.query

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Fields cannot be empty' })
  }

  try {
    const response = await apiServer.post('/users', { name, email, password })
    const user = response.data

    if (!user) {
      return res.status(500).json({ error: 'Failed to create user' })
    }

    const token = jwt.sign(user, process.env.BOILERPLATE_CANDIDATE_TOKEN as string)
    return res.status(200).json({ user, token })
  } catch (error) {
    console.log('aoskasokasoaskaos', error)
    if (axios.isAxiosError(error)) {
      const status = error.response?.status || 500
      const message = error.response?.data?.message || 'Error with signup'

      // You can customize the message based on specific error types if needed
      if (status === 400 && error.response?.data?.errorType === 'ExistingUserError') {
        return res.status(400).json({ error: message })
      }

      return res.status(status).json({ error: message })
    } else {
      // Handle unexpected errors
      console.error('Unexpected error:', error)
      return res.status(500).json({ error: 'Error with signup' })
    }
  }
}
