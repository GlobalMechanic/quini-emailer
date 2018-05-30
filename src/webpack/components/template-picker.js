import React from 'react'
import styled, { css } from 'styled-components'

import { TEMPLATE_NAMES, RED } from '../../constants'

/******************************************************************************/
// Icons
/******************************************************************************/

let icons

const buildIcons = () => TEMPLATE_NAMES
  .reduce((obj, name) => {
    obj[name] = require(`../assets/${name}.jpg`)
    return obj
  }, {})

/******************************************************************************/
// Helper
/******************************************************************************/

const Template = styled.img.attrs({
  src: props => {

    if (props.hydrated)
      return null

    if (!icons)
      icons = buildIcons()

    return icons[props['data-template']]
  }
})`
  padding: 0.25em;
  margin: 0.25em;

  cursor: pointer;

  ${props => !props.selected
    ? css`
      opacity: 0.50;
      &:hover {
        opacity: 0.75;
      }`

    : css`
      opacity: 1;
      pointer-events: none;
    `}

  height: 9em;
  width: 16em;

  transition: opacity 250ms;

  background-color: ${RED.toString()}
`

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  width: 17em;

`

/******************************************************************************/
// Main Component
/******************************************************************************/

const TemplatePicker = ({ children, template, hydrated, setTemplate, ...props }) =>
  <Layout {...props}>

    {TEMPLATE_NAMES.map(name =>
      <Template
        key={name}
        hydrated={hydrated}
        data-template={name}
        onClick={setTemplate}
        selected={template === name}
      />
    )}
  </Layout>

/******************************************************************************/
// Exports
/******************************************************************************/

export default TemplatePicker
