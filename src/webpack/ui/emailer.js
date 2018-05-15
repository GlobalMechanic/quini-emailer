import React from 'react'
import styled from 'styled-components'

import TemplatePicker from './template-picker'
import TemplateDisplay from './template-display'
import AddressInput from './address-input'
import WineList from './wine-list'

import { Column, Row } from '../common'

import { PURPLE, BLACK, WHITE, BLUE } from '../../constants'

/******************************************************************************/
// Styles
/******************************************************************************/

const PageStyle = Column.extend`
  background-color: ${WHITE.toString()};
  color: ${BLUE.toString()};
  font-family: Helvetica;
  height: inherit;
  width: inherit;

  padding: 1em;

  display: flex;
`

const View = Row.extend`
  flex-grow: 1;
`

const Title = styled.h1.attrs({
  children: 'QUINI EMAIL COMPOSER'
})`
  width: 100%;
  margin: 0 0 0.25em 0;
  color: ${BLACK.toString()}
`

/******************************************************************************/
// Create Email
/******************************************************************************/

const CreateButton = styled.button.attrs({
  children: 'Send'
})`
  background-color: ${PURPLE.toString()};
  color: ${WHITE.toString()};

  width: 6em;
  height: 2em;
  margin-top: 0.25em;

  border: none;
  outline: none;

  cursor: pointer;

  &:hover {
    background-color: ${PURPLE.fade(0.5).toString()}
  }
`

/******************************************************************************/
// Main Component
/******************************************************************************/

class Emailer extends React.Component {

  state = {
    wine: null,
    template: null,
    addresses: []
  }

  // State

  setWine = wine => {
    this.setState({ wine })
    window.localStorage.setItem('wine', JSON.stringify(wine))
  }

  setTemplate = e => {
    const template = typeof e === 'string'
      ? e
      : e.target.dataset.template

    this.setState({ template })
    window.localStorage.setItem('template', template)
  }

  setAddresses = e => {

    const addressId = e.target.dataset.addressId

    let { addresses } = this.state

    if (addresses.includes(addressId))
      addresses = addresses.filter(a => a !== addressId)
    else
      addresses = [ ...addresses, addressId ]

    this.setState({ addresses })
    window.localStorage.setItem('addresses', JSON.stringify(addresses))
  }

  // Network

  createEmail = async e => {
    const { wine, template, addresses } = this.state
    const { client } = this.props

    const created = await client.emails.create({ wine, template, addresses })

    console.log(created)
  }

  // Life Cycle

  componentDidMount () {

    let wine = window.localStorage.getItem('wine')
    if (wine) {
      wine = JSON.parse(wine)
      this.setWine(wine)
    }

    const template = window.localStorage.getItem('template')
    if (template)
      this.setTemplate(template)

    let addresses = window.localStorage.getItem('addresses')
    if (addresses) {
      addresses = JSON.parse(addresses)
      this.setState({ addresses })
    }

    this.props.client.emails.find({}).then(::console.log)

  }

  render () {

    const { children, client, ...props } = this.props

    const { wine, template, addresses } = this.state

    return <PageStyle {...props}>

      <Title/>

      <View>

        <TemplatePicker
          template={template}
          setTemplate={this.setTemplate}
        />

        <WineList
          client={client}
          wine={wine}
          setWine={this.setWine}
        />

        <AddressInput
          client={client}
          selected={addresses}
          setSelected={this.setAddresses}
        />

        <Column>
          <TemplateDisplay
            wine={wine}
            template={template}
          />

          <CreateButton onClick={this.createEmail} />
        </Column>

      </View>

    </PageStyle>
  }
}

/******************************************************************************/
// Exports
/******************************************************************************/

export default Emailer
