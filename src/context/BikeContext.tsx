import { createContext, useContext, ReactNode, useState } from 'react'
import Bike from '../models/Bike'

interface BikeContextType {
  bike?: Bike
  setBike: (bike?: Bike) => void
}

const BikeContext = createContext<BikeContextType | undefined>(undefined)

export const BikeProvider = ({ children }: { children: ReactNode }) => {
  const [bike, setBike] = useState<Bike | undefined>()

  return <BikeContext.Provider value={{ bike, setBike }}>{children}</BikeContext.Provider>
}

export const useBike = () => {
  const context = useContext(BikeContext)
  if (context === undefined) {
    throw new Error('useBike must be used within a BikeProvider')
  }
  return context
}
