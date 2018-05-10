import React from 'react'
import styled, { css } from 'styled-components'

import { oneOf } from 'prop-types'

import { RED, WHITE } from '../../constants'
import { Panel, Column, Scrollable } from '../common'

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
  src: props => ICONS[props['data-template']]
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

  height: ${9 * 1.25}em;
  width: ${16 * 1.25}em;

  transition: opacity 250ms;

  background-color: ${RED.toString()}
`

Template.propTypes = {
  template: oneOf(TEMPLATE_NAMES).isRequired
}

/******************************************************************************/
// Main Component
/******************************************************************************/

class TemplatePicker extends React.Component {

  render () {

    const { template, setTemplate } = this.props

    return <Panel color={RED} title='Template'>
      <Scrollable y='auto' height='calc(100vh - 8em)'>
        <Column>
          {TEMPLATE_NAMES.map(name =>
            <Template
              key={name}
              selected={template === name}
              data-template={name}
              onClick={setTemplate}
            />
          )}
        </Column>
      </Scrollable>
    </Panel>
  }

}

/******************************************************************************/
// Exports
/******************************************************************************/

export default TemplatePicker
