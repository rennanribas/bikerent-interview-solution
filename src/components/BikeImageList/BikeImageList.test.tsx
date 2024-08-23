import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { mockedImageUrls } from 'mocks/Bike'
import BikeImageList from '.'

const renderBikeImageList = () => {
  render(
    <BikeImageList
      imageUrls={mockedImageUrls}
      selectedImageUrl={mockedImageUrls[0]}
      handleSelectImage={jest.fn()}
      selectedImageIndex={0}
    />,
  )
}

describe('BikeImageList component', () => {
  beforeEach(() => {
    renderBikeImageList()
  })

  it('should render all bike images', () => {
    const imageElements = screen.getAllByTestId('image-to-select')
    expect(imageElements).toHaveLength(mockedImageUrls.length)
  })
})
