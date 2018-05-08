import styled from 'styled-components'

import { PURPLE } from '../../constants'

/******************************************************************************/
// Main Components
/******************************************************************************/

const Scrollable = styled.div`

  height: 100%;
  width: 100%;

  overflow-y: ${props => props.y || 'hidden'};
  overflow-x: ${props => props.x || 'hidden'};

  ::-webkit-scrollbar-thumb {
    background-color: ${PURPLE.toString()};
    outline: none;
  }
`

/******************************************************************************/
// Exports
/******************************************************************************/

export default Scrollable
