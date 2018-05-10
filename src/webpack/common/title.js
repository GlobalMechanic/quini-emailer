import styled from 'styled-components'

import { WHITE } from '../../constants'

/******************************************************************************/
// Main Components
/******************************************************************************/

const Title = styled.h2`
  margin: 0.125em 0 0.125em 0;
  background-color: ${props => String(props.color)};
  padding: 0.25em;
  color: ${WHITE.toString()};

  text-transform: uppercase;
`

/******************************************************************************/
// Exports
/******************************************************************************/

export default Title
