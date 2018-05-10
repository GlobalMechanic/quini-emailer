import React from 'react'

import { WineRating } from './common'

import BaseWine from './base-wine'

/******************************************************************************/
// Main Component
/******************************************************************************/

const ConsumerOpinion = ({ children, wine, aggregate, ...props }) =>

  <BaseWine
    title='Consumer Opinion On This Wine'
    wine={wine}
    aggregate={aggregate}
    panelMargin='1em 0em 0em 5em'
  >
    <WineRating
      expectation='high'
      ratingName='Opinion'
      ratingValue='UNDERPRICED'
    />
  </BaseWine>

/******************************************************************************/
// Exports
/******************************************************************************/

export default ConsumerOpinion
