import React from 'react'

import BaseWine from './base-wine'

import { WineDetail } from './common'

/******************************************************************************/
// Main Component
/******************************************************************************/

const WineReview = ({ children, fields, ...props }) =>

  <BaseWine
    title='Detailed Wine Review'
    subTitle={`Expectations: ${fields.expectation}`}
    titleAlign='flex-start'
    fields={fields}
    panelMargin='0em 9em 0em 5em'
  >
    <WineDetail fields={fields} />
  </BaseWine>

/******************************************************************************/
// Exports
/******************************************************************************/

export default WineReview
