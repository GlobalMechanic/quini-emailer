import React from 'react'

import styled from 'styled-components'
import { object } from 'prop-types'

import { Column, Scrollable } from '../common'

import { BLUE, PURPLE, WHITE } from '../../constants'

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

class WineList extends React.Component {

  static propTypes = {
    client: object.isRequired
  }

  state = {
    wines: [],
    filter: ''
  }

  // State Setters

  async getWines () {

    const { client } = this.props

    await client.untilConnected()

    // get the wines however how
  }

  setFilter = filter => {

    // In case it's an event
    if (filter !== null && typeof filter === 'object')
      filter = filter.target.value

    if (typeof filter !== 'string')
      filter = ''

    this.setState({ filter })
    window.localStorage.setItem('wine-filter', filter)
  }

  // LifeCycle

  componentDidMount () {
    this.getWines()

    const wineFilter = window.localStorage.getItem('wine-filter')

    this.setFilter(wineFilter)
  }

  render () {

    const { wines, filter } = this.state

    return <WineColumn>
      <Filter value={filter} onChange={this.setFilter}/>
      <Scrollable y='auto'>
        <ListStyle id='wine-list'>
          {wines.map((wine, i) => <Wine key={i} data={wine} />)}
        </ListStyle>
      </Scrollable>
    </WineColumn>
  }

}

/******************************************************************************/
// Exports
/******************************************************************************/

export default WineList
