import React from 'react'
import { Email } from 'react-html-email'

/******************************************************************************/
// Main Component
/******************************************************************************/

const MostPopularAromas = ({ children, ...props }) =>
  <Email {...props}>
    {children}
  </Email>

/******************************************************************************/
// Exports
/******************************************************************************/

export default MostPopularAromas
