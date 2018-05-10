import React from 'react'

import { Bottle, Container, Title, Panel, WineDescription, QuiniTag } from './common'
import { RED } from '../constants'

/******************************************************************************/
// Main Component
/******************************************************************************/

const BaseWine = ({
  wine,
  aggregate,
  title,
  titleAlign,
  subTitle,
  panelMargin,
  children,
  ...props
}) =>

  <Container {...props}>

    <Bottle
      color={RED}
      width={13}
      left={1}
      top={-8}
    />

    <Title sub={subTitle} align={titleAlign}>
      {title}
    </Title>

    <Panel margin={panelMargin}>
      <WineDescription wine={wine} aggregate={aggregate}/>
      { children }
    </Panel>

    <QuiniTag/>

  </Container>

/******************************************************************************/
// Exports
/******************************************************************************/

export default BaseWine
