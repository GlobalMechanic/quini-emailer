import React from 'react'

import { WineRating } from './common'

import BaseWine from './base-wine'

/******************************************************************************/
// Main Component
/******************************************************************************/

const ConsumerOpinion = ({ children, fields, ...props }) =>

  <BaseWine
    {...props}
    title='Consumer Opinion On This Wine'
    fields={fields}
    panelMargin='1em 0em 0em 5em'
  >
    <WineRating
      expectation={fields.expectation}
      expectationOverride={fields['expectation-override']}
      ratingName='Price'
      ratingValue={fields.rating}
      color={fields.color}
    />
  </BaseWine>

/******************************************************************************/
// Exports
/******************************************************************************/

export default ConsumerOpinion
