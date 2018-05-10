import React from 'react'
import styled from 'styled-components'

import { WHITE, BLACK } from '../../constants'

/******************************************************************************/
// Sub Components
/******************************************************************************/

const Banner = styled.div`
  box-sizing: border-box;
  background-color: ${WHITE.fade(0.25).toString()};

  margin: 2em 2em 0 2em;
  padding: 0.5em;

  width: 100%;

  display: flex;
  flex-direction: column;

  position: relative;
`

const Align = styled.div`
  align-self: ${props => props.align || 'center'};
`

const H1 = styled.h1`
  margin: 0;
  color: ${BLACK.toString()};
  text-transform: uppercase;
  font-weight: normal;
  font-size: 2.75em;
`

const H2 = styled.h2`
  margin: 0.2em 0 0 0;
  color: ${BLACK.fade(0.5).toString()};
  font-weight: normal;
`

/******************************************************************************/
// Main Component
/******************************************************************************/

const Title = ({ sub, align, children, ...props }) =>
  <Banner {...props}>
    <Align align={align}>
      <H1>{children}</H1>
      { sub
        ? <H2>{sub}</H2>
        : null
      }
    </Align>
  </Banner>

/******************************************************************************/
// Exports
/******************************************************************************/

export default Title
