import styled from 'styled-components'

import { PURPLE } from '../../constants'

/******************************************************************************/
// Style
/******************************************************************************/

const Scrollable = styled.div.attrs({
  style: ({ width, height }) => Object({ width, height })
})`

  overflow-y: ${props => props.y || 'hidden'};
  overflow-x: ${props => props.x || 'hidden'};

  box-sizing: border-box;

  ::-webkit-scrollbar-thumb {
    background-color: ${PURPLE.toString()};
    outline: none;
  }
`

/******************************************************************************/
// Exports
/******************************************************************************/

export default Scrollable
