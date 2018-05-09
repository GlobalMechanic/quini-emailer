import React from 'react'
import styled from 'styled-components'

import { object } from 'prop-types'

import { WHITE, BLUE } from '../../constants'

/******************************************************************************/
// Styled
/******************************************************************************/

const Container = styled.div`
  box-sizing: border-box;


  margin: 0.25em;
  margin-top: auto;

  border: 1px solid ${BLUE.toString()};
  height: 20em;
`

const Title = styled.h2.attrs({ children: 'ADDRESS INPUT' })`
  background-color: ${BLUE.toString()};
  margin: 0;
  padding: 0.25em;
  color: white;
`

const Addresses = styled.div`
  padding: 0.25em;
  margin-top: 0.25em;
  box-sizing: border-box;

  width: 100%;
  height: calc(100% - 3em);

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;

  overflow: auto;
`

const Address = styled.span`

  background-color: ${BLUE.toString()};
  color: ${WHITE.toString()};

  padding: 0.5em;
  border: none;
  border-radius: 0.75em;
  flex-grow: 0;
  flex-shrink: 0;
  height: 1em;

  margin: 0.125em;

`

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${WHITE.toString()};
  background-color: transparent;
  outline: none;
  width: auto;
  color: inherit;
`

const RemoveButton = styled.button.attrs({
  children: 'x'
})`

  border: none;
  background-color: transparent;
  color: rgba(255,255,255, 0.5);
  outline: none;
  cursor: pointer;

  transition: color 250ms;

  &:hover {
    color: rgba(255,255,255, 1)
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
    newClientEmail: '',
    clients: []
  }

  // State Setters

  getClients = async () => {

    const { client } = this.props

    await client.untilConnected()

    const clients = await client.clients.find({})

    this.setState({ clients })

  }

  addNewClient = async e => {

    e.preventDefault()

    const { client } = this.props

    const { clients, newClientEmail } = this.state

    const data = { email: newClientEmail }

    this.setState({ clients: [ ...clients, data ], newClientEmail: '' })

    await client.clients.create(data)

    await this.getClients()

  }

  removeClient = async e => {

    const id = e.target.dataset.clientId
    if (typeof id !== 'string')
      return

    const { client } = this.props

    // Optimistic prediction
    const { clients } = this.state
    this.setState({ clients: clients.filter(c => c.id !== id) })

    await client.clients.remove(id)

    return this.getClients()
  }

  setNewClientEmail = (e) =>
    this.setState({ newClientEmail: e.target.value })

  // LifeCycle

  componentDidMount () {
    this.getClients()
  }

  render () {

    const { clients, newClientEmail } = this.state

    return <Container id='address-input'>
      <Title/>
      <Addresses>
        {[clients.map((obj, i) =>
          <Address key={i} >{obj.email}
            <RemoveButton onClick={this.removeClient} data-client-id={obj._id} />
          </Address>
        )]}
        <Address>
          <form onSubmit={this.addNewClient}>
            <Input value={newClientEmail} onChange={this.setNewClientEmail}/>
          </form>
        </Address>
      </Addresses>
    </Container>
  }
}

/******************************************************************************/
// Exports
/******************************************************************************/

export default AddressInput
