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

  border: 0.05em outset #ccc;
  border-radius: 0.125em;

  background-color: ${WHITE.toString()};

  display: flex;
  position: relative;

`

/******************************************************************************/
// Exports
/******************************************************************************/

export default Panel
