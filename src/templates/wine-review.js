import React from 'react'

import BaseWine from './base-wine'

import { WineDetail } from './common'

/******************************************************************************/
// Main Component
/******************************************************************************/

const WineReview = ({ children, wine, aggregate, ...props }) =>

  <BaseWine
    title='Detailed Wine Review'
    subTitle='Expectations: HIGH'
    titleAlign='flex-start'
    wine={wine}
    aggregate={aggregate}
    panelMargin='0em 9em 0em 5em'
  >
    <WineDetail wine={wine} aggregate={aggregate} />
  </BaseWine>

/******************************************************************************/
// Exports
/******************************************************************************/

export default WineReview
