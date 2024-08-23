import { apiServer } from '../pages/api/[...path]'
import Bike from 'models/Bike'

export const bikeService = {
  getAllBikes: async (): Promise<Bike[]> => {
    const response = await apiServer.get('/api/bikes')
    return response.data
  },

  getAvailableBikes: async (): Promise<Bike[]> => {
    const response = await apiServer.get('/api/bikes/available')
    return response.data
  },
}
