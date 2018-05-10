import React from 'react'
import styled from 'styled-components'

import { object } from 'prop-types'

import { WHITE, BLUE, PURPLE } from '../../constants'

import { Scrollable, Panel, Input, List } from '../common'

/******************************************************************************/
// Styled
/******************************************************************************/

const RemoveButton = styled.button.attrs({
  children: 'x'
})`

  border: none;
  background-color: transparent;
  color: ${PURPLE.fade(0.5).toString()};
  outline: none;
  cursor: pointer;

  margin-left: auto;
  padding: 0 0 0 0.3em;

  transition: color 250ms;

  &:hover {
    color: ${PURPLE.toString()};
  }
`

/******************************************************************************/
// Main Component
/******************************************************************************/

class AddressInput extends React.Component {

  static propTypes = {
    client: object.isRequired
  }

  state = {
    newAddress: '',
    addresses: []
  }

  // State Setters

  getAddresses = async () => {

    const { client } = this.props

    await client.untilConnected()

    const addresses = await client.addresses.find({})

    this.setState({ addresses })

  }

  addNewAddress = async e => {

    e.preventDefault()

    const { client } = this.props

    const { addresses, newAddress } = this.state

    if (newAddress.includes(' ') || !newAddress.includes('@'))
      return

    if (addresses.some(a => a._id === newAddress))
      return

    const data = { _id: newAddress }

    this.setState({
      // optimistic caching
      addresses: [ ...addresses, data ],
      newAddress: ''
    })

    await client.addresses.create(data)
    await this.getAddresses()

  }

  removeAddress = async e => {

    e.stopPropagation()

    const id = e.target.dataset.addressId
    if (typeof id !== 'string')
      return

    const { client } = this.props

    // Optimistic prediction
    const { addresses } = this.state
    this.setState({ clients: addresses.filter(c => c.id !== id) })

    await client.addresses.remove(id)

    return this.getAddresses()
  }

  setNewAddress = (e) =>
    this.setState({ newAddress: e.target.value })

  // LifeCycle

  componentDidMount () {
    this.getAddresses()
    // this.props.client.addresses.remove(null)
  }

  render () {

    const { selected, setSelected } = this.props
    const { addresses, newAddress } = this.state

    return <Panel title='Addresses' color={PURPLE}>

      <form onSubmit={this.addNewAddress}>
        <Input
          placeholder='...New Address'
          color={PURPLE}
          value={newAddress}
          onChange={this.setNewAddress}
        />
      </form>

      <Scrollable y='auto' height='calc(100vh - 10em)'>

        <List id='wine-list'>
          {addresses.map((address, i) =>
            <List.Item
              key={address._id}
              color={PURPLE}
              data-address-id={address._id}
              selected={selected.includes(address._id)}
              onClick={setSelected}
            >

              {address._id}

              { !selected.includes(address._id)
                ? <RemoveButton
                  data-address-id={address._id}
                  onClick={this.removeAddress}
                />
                : null
              }
            </List.Item>
          )}
        </List>

      </Scrollable>

    </Panel>

  }
}

/******************************************************************************/
// Exports
/******************************************************************************/

export default AddressInput
