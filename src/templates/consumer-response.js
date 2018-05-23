import React from 'react'

import BaseWine from './base-wine'

import { WineRating } from './common'

/******************************************************************************/
// Main Component
/******************************************************************************/

const ConsumerResponse = ({ children, fields, ...props }) =>

  <BaseWine
    {...props}
    title='Consumer Response To This Wine'
    panelMargin='1em 0em 0em 5em'
    fields={fields}>

    <WineRating
      expectation={fields.expectation}
      ratingName='Actual Rating'
      ratingValue={fields.rating}
    />

  </BaseWine>

/******************************************************************************/
// Exports
/******************************************************************************/

export default ConsumerResponse
