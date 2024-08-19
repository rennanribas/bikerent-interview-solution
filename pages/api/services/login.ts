import jwt from 'jsonwebtoken'
import User from 'models/User'
import { NextApiRequest, NextApiResponse } from 'next'
import { apiServer } from '../[...path]'

export const getAllUsers = async (): Promise<User[]> => {
  try {
    const response = await apiServer.get('/users')
    if (!response.data) {
      throw new Error('Failed to fetch users')
    }
    const data = await response.data
    if (!Array.isArray(data)) {
      throw new Error('Invalid data received')
    }
    return data as User[]
  } catch (error) {
    console.error('Error fetching users:', error)
    throw error
  }
}

export default async function loginApi(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await getAllUsers()
    const { email, password } = req.query
    const cadidateId = parseInt(process.env.BOILERPLATE_CANDIDATE_ID as string)
    if (!users) {
      throw new Error('Failed to fetch users')
    }
    console.log('users', users)
    const foundUser = users.find(
      (user: User) =>
        user.email === email && user.password === password && user.candidateId === cadidateId,
    )
    if (!foundUser) {
      throw new Error('Invalid email or password')
    }

    const token = jwt.sign(
      {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
      },
      process.env.BOILERPLATE_CANDIDATE_TOKEN as string,
    )
    console.log(foundUser, token)

    res.status(200).json({ user: foundUser, token })
  } catch (error) {
    throw new Error('Login failed: ' + error)
  }
}
