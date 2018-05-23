import styled from 'styled-components'

import { WHITE } from '../../constants'
/******************************************************************************/
// Main Components
/******************************************************************************/

const Panel = styled.div.attrs({
  style: ({ margin }) => Object({
    margin: `${margin}`
  })
})`

  border: 1px outset #ccc;
  border-radius: 0.125em;

  background-color: ${WHITE.toString()};

  display: flex;
  position: relative;

  overflow: hidden;

`

/******************************************************************************/
// Exports
/******************************************************************************/

export default Panel
