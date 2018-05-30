import React from 'react'

import TEMPLATES from '../../templates'

/******************************************************************************/
// Main Component
/******************************************************************************/

const TemplateDisplay = ({ template, fields, ...props }) => {

  const Template = TEMPLATES[template]
  if (!Template || !fields)
    return null

  return <Template fields={fields} {...props} />
}

/******************************************************************************/
// Exports
/******************************************************************************/

export default TemplateDisplay
