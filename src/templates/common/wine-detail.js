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

const WineDetail = ({ children, fields, ...props }) => {

  const { eye, nose, mouth, finish, opinion } = fields

  return <DetailFlex {...props}>

    <DetailItem color={BLUE} note={eye && eye.note}>
      Eye {eye && eye.score}/30
    </DetailItem>

    <DetailItem color={PURPLE} note={nose && nose.note}>
      Nose {nose && nose.score}/30
    </DetailItem>

    <DetailItem color={RED} note={mouth && mouth.note}>
      Mouth {mouth && mouth.score}/30
    </DetailItem>

    <DetailItem color={CYAN} note={finish && finish.note}>
      Finish {finish && finish.score}/15
    </DetailItem>

    <DetailItem color={YELLOW} note={opinion && opinion.note}>
      Opinion {opinion && opinion.score}/10
    </DetailItem>

    { children }
  </DetailFlex>
}

/******************************************************************************/
// Exports
/******************************************************************************/

export default WineDetail
