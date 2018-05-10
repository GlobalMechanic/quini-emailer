import React from 'react'
import styled from 'styled-components'

import { BLACK, BLUE, PURPLE, RED, CYAN, YELLOW } from '../../constants'
/******************************************************************************/
// Sub Components
/******************************************************************************/

const DetailFlex = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-around;
  align-items: center;
  padding: 2em;
`

const Blob = styled.div`
  width: 3em;
  height: 3em;
  border-radius: 50%;
  margin-right: 1.5em;
`

const Note = styled.span`
  color: ${BLACK.toString()};
  font-weight: normal;
  margin-left: 0.5em;
  font-size: 0.8em;
`

const DetailItemBase = styled.div`
  color: ${props => props.color.toString()};
  width: 18em;

  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 0.8em;

  ${Blob} {
    background-color: ${props => props.color.toString()};
  }
`

const DetailItem = ({ children, note, ...props }) =>
  <DetailItemBase {...props}>
    <Blob/>{children}<Note>{note}</Note>
  </DetailItemBase>

/******************************************************************************/
// Main Component
/******************************************************************************/

const WineDetail = ({ children, ...props }) =>
  <DetailFlex {...props}>

    <DetailItem color={BLUE} note='Deep Color'>
      Eye 27/30
    </DetailItem>

    <DetailItem color={PURPLE} note='Full/Medium Body'>
      Nose 28/30
    </DetailItem>

    <DetailItem color={RED} note='Full/Medium Body'>
      Mouth 27/30
    </DetailItem>

    <DetailItem color={CYAN} note='Simple/Subtle'>
      Finish 11/15
    </DetailItem>

    <DetailItem color={YELLOW} note='Good/Excellent'>
      Opinion 8/10
    </DetailItem>

    { children }
  </DetailFlex>

/******************************************************************************/
// Exports
/******************************************************************************/

export default WineDetail
