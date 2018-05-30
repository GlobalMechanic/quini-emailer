import React from 'react'

import { Bottle, Container, Title, Panel, WineDescription, QuiniTag } from './common'
import { RED, YELLOW, PURPLE } from '../constants'

/******************************************************************************/
// Helper
/******************************************************************************/

function getColor (color) {
  if (color === 'white')
    return YELLOW

  if (color === 'rose')
    return PURPLE

  return RED
}

/******************************************************************************/
// Main Component
/******************************************************************************/

const BaseWine = ({
  fields,
  title,
  titleAlign,
  subTitle,
  panelMargin,
  children,
  ...props
}) =>

  <Container {...props}>

    <Bottle
      color={getColor(fields.color).toString()}
      width={13}
      left={1}
      top={-8}
    />

    <Title sub={subTitle} align={titleAlign}>
      {title}
    </Title>

    <Panel margin={panelMargin}>
      <WineDescription fields={fields} />
      { children }
    </Panel>

    <QuiniTag/>

  </Container>

/******************************************************************************/
// Exports
/******************************************************************************/

export default BaseWine

export { getColor }
