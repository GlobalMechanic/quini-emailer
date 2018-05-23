import React from 'react'
import styled from 'styled-components'

import { Input, Panel, Row } from '../common'
import { BLUE, PURPLE, YELLOW, RED } from '../../constants'

/******************************************************************************/
// Helper
/******************************************************************************/

const NUMERICAL = Array.from({ length: 9 }, (v, i) => i + 1)

/******************************************************************************/
// Styled
/******************************************************************************/

const ColorButton = styled.button.attrs({
  children: props => props['data-option'],
  'data-field': 'color'
})`
  border: 1px solid ${props => props.color.toString()};
  background-color: ${props => props['data-option'] === props.current
    ? props.color.toString()
    : 'transparent'};

  text-transform: capitalize;
  flex-grow: 1;
  outline: none;
  color: ${props => props['data-option'] !== props.current
    ? props.color.toString()
    : 'white'};

  padding: 0.25em;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

/******************************************************************************/
// Helper
/******************************************************************************/

/******************************************************************************/
// Main
/******************************************************************************/

const ManualFields = ({ setManualFields, manualFields }) => {

  const { color = 'red' } = manualFields

  return <Panel color={BLUE} title='Fields' style={{width: '10em'}}>
    <Input
      placeholder='Header'
      data-field='header'
      value={manualFields.header}
      onChange={setManualFields}
    />
    <Input
      placeholder='Sub Header'
      data-field='sub-header'
      value={manualFields['sub-header']}
      onChange={setManualFields}
    />
    {
      NUMERICAL.map(num =>
        <Input
          key={num}
          data-field={num}
          placeholder={`Field ${num}`}
          value={manualFields[num]}
          onChange={setManualFields}
        />
      )
    }
    <Row>
      <ColorButton
        color={RED}
        current={color}
        data-option='red'
        onClick={setManualFields}
      />
      <ColorButton
        color={YELLOW}
        current={color}
        data-option='white'
        onClick={setManualFields}
      />
      <ColorButton
        color={PURPLE}
        current={color}
        data-option='rose'
        onClick={setManualFields}
      />
    </Row>

  </Panel>
}

/******************************************************************************/
// Exports
/******************************************************************************/

export default ManualFields
