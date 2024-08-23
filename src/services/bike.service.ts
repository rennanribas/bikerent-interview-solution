import { apiServer } from '../pages/api/[...path]'
import Bike from 'models/Bike'

export interface RentAmountResponse {
  rentAmount: number
  totalAmount: number
  fee: number
}

export interface RentAmountRequest {
  bikeId: number
  dateFrom: string
  dateTo: string
  userId: number
}

export const bikeService = {
  getAllBikes: async (): Promise<Bike[]> => {
    const response = await apiServer.get('/api/bikes')
    return response.data
  },

  getAvailableBikes: async (): Promise<Bike[]> => {
    const response = await apiServer.get('/api/bikes/available')
    return response.data
  },

  getRentAmount: async (data: RentAmountRequest): Promise<RentAmountResponse> => {
    try {
      const response = await apiServer.post('/api/bikes/amount', data)
      return response.data
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        throw new Error(error.response.data.message)
      }
      throw new Error('An unexpected error occurred')
    }
  },
}
