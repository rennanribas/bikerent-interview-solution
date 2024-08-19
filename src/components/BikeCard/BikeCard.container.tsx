// src/components/BikeCard.container.tsx
import Bike from '../../models/Bike' // Adjusted import path
import { useState } from 'react'
import { useRouter } from 'next/router'
import BikeCard from './BikeCard.component'

interface BikeCardProps {
  bike: Bike
}

const BikeCardContainer = ({ bike }: BikeCardProps) => {
  const router = useRouter()

  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const handleOpenBikeDetails = () => {
    router.push({
      pathname: '/BikeDetails/[id]',
      query: { id: bike.id },
    })
  }

  const handleIsImageLoaded = (isLoading: boolean) => {
    setIsImageLoaded(isLoading)
  }

  return (
    <BikeCard
      id={bike.id}
      isImageLoaded={isImageLoaded}
      handleIsImageLoaded={handleIsImageLoaded}
      handleOpenBikeDetails={handleOpenBikeDetails}
      name={bike.name}
      type={bike.type}
      bodySize={bike.bodySize}
      description={bike.description}
      imageUrls={bike.imageUrls}
      cardImage={bike.imageUrls[0] || ''}
      rate={bike.rate}
    />
  )
}

export default BikeCardContainer
