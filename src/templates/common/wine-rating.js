import styled from 'styled-components'
import React from 'react'

import { WHITE } from '../../constants'

import { getColor } from '../base-wine'

/******************************************************************************/
//
/******************************************************************************/

const WineRatingBase = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  background-color: ${props => getColor(props.color).toString()};
  color: ${WHITE.toString()};

  padding: 1.5em;

`

const Row = styled.div`

  letter-spacing: 0.125em;

  h1, h2 {
    margin: 0;
    font-weight: normal;
    text-transform: uppercase;
  }

  h1 {
    font-size: 4em;
  }

  &:first-child {
    h1 { font-size: 7em; }
  }

  h2 {
    font-size: 2em;
  }

  &:not(:first-child) {
    margin-top: auto;
  }
`

const WineRating = ({ wine, color, expectation, expectationOverride, ratingName, ratingValue }) => {

  return <WineRatingBase color={color}>
    <Row>
      <h2>Expectations</h2>
      <h1>{expectation}</h1>
    </Row>
    <Row>
      <h2>{ratingName}</h2>
      <h1>{ratingValue}</h1>
    </Row>
  </WineRatingBase>
}

/******************************************************************************/
//
/******************************************************************************/

export default WineRating
