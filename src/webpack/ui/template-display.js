import React from 'react'

import TEMPLATES from '../../templates'

/******************************************************************************/
// Main Component
/******************************************************************************/

const TemplateDisplay = ({ template, fields }) => {

  const Template = TEMPLATES[template]
  if (!Template || !fields)
    return null

  return <Template fields={fields} />
}

/******************************************************************************/
// Exports
/******************************************************************************/

export default TemplateDisplay
