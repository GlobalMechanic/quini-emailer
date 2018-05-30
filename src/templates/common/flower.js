import React from 'react'
import styled from 'styled-components'

/******************************************************************************/
// DATA
/******************************************************************************/

const HOST = 'http://quiniwine.com/api/pub/wineBloom'

const DIM = 8
/******************************************************************************/
// Sub Components
/******************************************************************************/

const FlowerReviewCrop = styled.div`
  overflow: hidden;
  height: ${props => props.cropped ? `${DIM - 1}em` : '100%'};
`

const FlowerImg = styled.img.attrs({
  src: ({ wineId }) => wineId && `${HOST}?wine_id=${wineId}&review=false`
})`
  height: ${props => props.cropped ? `${DIM}em` : '100%'};
  ${props => props.cropped ? `width: ${DIM}em;` : ''}
  border: none;
`

/******************************************************************************/
// Main Component
/******************************************************************************/

const Flower = ({ wineId, cropped }) =>
  <FlowerReviewCrop cropped={cropped} >
    <FlowerImg wineId={wineId} cropped={cropped} />
  </FlowerReviewCrop>

/******************************************************************************/
// Exports
/******************************************************************************/

export default Flower
