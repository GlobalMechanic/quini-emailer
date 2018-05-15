import React from 'react'

import BaseWine from './base-wine'

import { WineRating } from './common'

/******************************************************************************/
// Main Component
/******************************************************************************/

const ConsumerResponse = ({ children, wine, aggregate, ...props }) =>

  <BaseWine
    title='Consumer Response To This Wine'
    wine={wine}
    aggregate={aggregate}
    panelMargin='1em 0em 0em 5em'
  >
    <WineRating
      expectation='high'
      ratingName='Actual Rating'
      ratingValue='80'
    />
  </BaseWine>

/******************************************************************************/
// Exports
/******************************************************************************/

export default ConsumerResponse
