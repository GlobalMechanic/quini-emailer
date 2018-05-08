import React from 'react'
import styled from 'styled-components'

import { Column, Scrollable } from '../common'

import { BLUE, PURPLE, WHITE } from '../../constants'

/******************************************************************************/
// TEMP dummy data
/******************************************************************************/

let wines = [
  'Bivongi',
  'Cirò',
  'Donnici',
  'Greco di Bianco',
  'Lamezia',
  'Melissa',
  'Pollino',
  'Sant\'Anna di Isola Capo Rizzuto',
  'San Vito di Luzzi',
  'Savuto',
  'Verbicaro',
  'Aglianico del Taburno',
  'Aversa Asprinio',
  'Campi Flegrei',
  'Capri',
  'Castel San Lorenzo',
  'Cilento',
  'Costa d\'Amalfi'
]

wines = wines.concat(...Array(20).fill(wines))

/******************************************************************************/
// Styles
/******************************************************************************/

const Filter = styled.input.attrs({
  placeholder: '...Filter'
})`
  box-sizing: border-box;
  background-color: ${BLUE.toString()};
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

const Wine = styled.li.attrs({
  children: props => props.data
})`
  cursor: pointer;
  &:hover {
    background-color: ${PURPLE.fade(0.75).toString()};
  }

  padding: 0.25em;
  transition: background-color 250ms;

  width: 100%;


`

const ListStyle = styled.ul`
  box-sizing: border-box;
  list-style-type: none;
  margin: 0;
  padding: 0.5em;

  border-right: 1px solid ${BLUE.toString()};
`

const WineColumn = Column.extend`
  height: 100%;
`

/******************************************************************************/
// Main Component
/******************************************************************************/

const WineList = ({ children, ...props }) =>
  <WineColumn {...props}>
    <Filter />
    <Scrollable y='auto'>
      <ListStyle id='wine-list'>
        {wines.map((wine, i) => <Wine key={i} data={wine} />)}
      </ListStyle>
    </Scrollable>
  </WineColumn>

/******************************************************************************/
// Exports
/******************************************************************************/

export default WineList
