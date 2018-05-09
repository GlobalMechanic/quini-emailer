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

class Emailer extends React.Component {

  state = {
    wine: null,
    template: null
  }

  render () {

    const { children, client, ...props } = this.props

    const { wine, template } = this.state

    return <PageStyle {...props}>
      <Inspector>
        <WineList client={client} />
      </Inspector>
      <View>
        <TemplatePicker />
        <AddressInput client={client} />
      </View>
    </PageStyle>
  }
}

/******************************************************************************/
// Exports
/******************************************************************************/

export default Emailer
