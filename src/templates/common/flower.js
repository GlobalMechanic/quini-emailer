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
  height: ${DIM - 1}em;
`

const FlowerImg = styled.img.attrs({
  src: ({ wine }) => wine && `${HOST}?wine_id=${wine._id}&review=false`
})`
  width: ${DIM}em;
  height: ${DIM}em;
  border: none;
`

/******************************************************************************/
// Main Component
/******************************************************************************/

const Flower = ({ wine }) =>
  <FlowerReviewCrop>
    <FlowerImg wine={wine} />
  </FlowerReviewCrop>

/******************************************************************************/
// Exports
/******************************************************************************/

export default Flower
