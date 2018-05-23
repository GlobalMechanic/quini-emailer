import React from 'react'
import styled from 'styled-components'

import Title from './title'
/******************************************************************************/
// Helper
/******************************************************************************/

const PanelBody = styled.div`
  box-sizing: border-box;

  margin-right: 0.25em;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`

const PanelContent = styled.div`

  box-sizing: border-box;
  border: 1px solid ${props => String(props.color)};

  flex-grow: 1;
`

/******************************************************************************/
// Main Component
/******************************************************************************/

const Panel = ({ children, color, title, ...props }) =>
  <PanelBody {...props}>
    { title && <Title color={color}>{title}</Title>}
    <PanelContent color={color}>
      { children }
    </PanelContent>
  </PanelBody>

/******************************************************************************/
// Exports
/******************************************************************************/

export default Panel
