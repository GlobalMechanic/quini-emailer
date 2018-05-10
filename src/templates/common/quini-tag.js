import styled from 'styled-components'

import { BLACK } from '../../constants'

/******************************************************************************/
// Sub Components
/******************************************************************************/

const QuiniTag = styled.div.attrs({
  children: 'QUINI'
})`
  color: ${BLACK.toString()};

  position: absolute;
  bottom: 0.125em;
  right: 0.5em;

  font-size: 2.4em;
  font-weight: bold;
`

/******************************************************************************/
// Exports
/******************************************************************************/

export default QuiniTag
