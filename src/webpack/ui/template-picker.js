import React from 'react'
import styled from 'styled-components'

import { oneOf } from 'prop-types'

import { RED, WHITE } from '../../constants'
import { Row } from '../common'

/******************************************************************************/
// Data
/******************************************************************************/

const TEMPLATE_NAMES = [
  'consumer-opinion',
  'consumer-response',
  'most-popular-aromas',
  'most-popular-flavours',
  'wine-review'
]

const ICONS = TEMPLATE_NAMES.reduce((obj, name) => {
  obj[name] = require(`../assets/${name}.jpg`)
  return obj
}, {})

/******************************************************************************/
//
/******************************************************************************/

const Template = styled.img.attrs({
  src: props => ICONS[props.template]
})`
  padding: 0.25em;
  margin: 0.25em;

  opacity: 0.75;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  transition: opacity 250ms;

  background-color: ${RED.toString()}
`

Template.propTypes = {
  template: oneOf(TEMPLATE_NAMES).isRequired
}

const TemplateHolder = Row.extend`
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  overflow-y: auto;
`

const Title = styled.h1.attrs({ children: 'TEMPLATES' })`
  margin: 0 0.125em 0 0.125em;
  background-color: ${RED.toString()};
  padding: 0.25em;
  color: ${WHITE.toString()};
`

/******************************************************************************/
// Main Component
/******************************************************************************/

const TemplatePicker = ({ children, ...props }) => [
  <Title key='title'/>,
  <TemplateHolder key='templates' {...props} id='template-picker'>
    {TEMPLATE_NAMES.map(name =>
      <Template key={name} template={name} />
    )}
  </TemplateHolder>
]

/******************************************************************************/
// Exports
/******************************************************************************/

export default TemplatePicker
