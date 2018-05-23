import styled from 'styled-components'

import { WHITE, FONT } from '../../constants'

/******************************************************************************/
// Main Components
/******************************************************************************/

const Container = styled.div`
  width: 875px;
  height: 550px;
  border: 1px solid black;
  background-color: ${props => (props.color || WHITE).toString()};

  box-sizing: border-box;

  font-family: ${FONT};

  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`

/******************************************************************************/
// Exports
/******************************************************************************/

export default Container
