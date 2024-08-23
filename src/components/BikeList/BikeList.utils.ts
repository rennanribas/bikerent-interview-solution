export const getQuantityLabel = (bikeQuantity: number): string => {
  if (bikeQuantity === 0) {
    return 'No bikes available at the moment..'
  }
  const properBikePlural = bikeQuantity > 1 ? 'bikes' : 'bike'
  return `${bikeQuantity} ${properBikePlural} to rent`
}
