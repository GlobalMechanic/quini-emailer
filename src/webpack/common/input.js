import styled from 'styled-components'

import { WHITE } from '../../constants'

/******************************************************************************/
// Main Components
/******************************************************************************/

const Input = styled.input`
  box-sizing: border-box;
  background-color: ${props => props.color.toString()};
  border: none;
  outline: none;
  color: ${WHITE.toString()};
  ::placeholder {
    color: ${WHITE.toString()};
    opacity: 0.5;
  }
  padding: 0.25em;

  width: calc(100%);
`

/******************************************************************************/
// Exports
/******************************************************************************/

export default Input
