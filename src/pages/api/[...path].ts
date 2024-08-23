import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export const apiServer = axios.create({
  baseURL: process.env.API_DOMAIN,
  headers: {
    Authorization: `${process.env.BOILERPLATE_CANDIDATE_TOKEN}`,
  },
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method, url } = req

    const path = url?.startsWith('/api') ? url.replace('/api', '') : url
    const apiUrl = path || '/'

    const options = {
      method,
      data: req.body,
    }

    const response = await apiServer(apiUrl, options)

    res.status(response.status).json(response.data)
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).json({ error: 'Error fetching data' })
  }
}
