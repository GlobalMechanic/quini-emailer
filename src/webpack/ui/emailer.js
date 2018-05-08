import React from 'react'
import styled from 'styled-components'

import TemplatePicker from './template-picker'
import AddressInput from './address-input'
import WineList from './wine-list'

import { Column, Row } from '../common'

import { WHITE, PURPLE } from '../../constants'

/******************************************************************************/
// Styles
/******************************************************************************/

const PageStyle = Row.extend`
  background-color: ${WHITE.toString()};
  color: ${PURPLE.toString()};
  font-family: Helvetica;
  height: inherit;
  width: inherit;

  display: flex;
`

const Inspector = styled.div`
  width: 15em;
  height: inherit;
`

const View = Column.extend`
  width: calc(100% - 15em);
`

/******************************************************************************/
// Main Component
/******************************************************************************/

const Emailer = ({ children, ...props }) =>
  <PageStyle {...props}>
    <Inspector>
      <WineList />
    </Inspector>
    <View>
      <TemplatePicker />
      <AddressInput />
    </View>
  </PageStyle>

/******************************************************************************/
// Exports
/******************************************************************************/

export default Emailer
