import React from 'react'

import { object } from 'prop-types'
import { Input, List, Panel, Scrollable } from '../common'

import { BLUE } from '../../constants'
import DUMMY_WINE from '../assets/dummy-data/wine-object'

/******************************************************************************/
// Data
/******************************************************************************/

const DUMMY_WINES = Array(1).fill(DUMMY_WINE)

/******************************************************************************/
// Main Component
/******************************************************************************/

class WineList extends React.Component {

  static propTypes = {
    client: object.isRequired
  }

  state = {
    wines: DUMMY_WINES,
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

    const { wine: selectedWine, setWine } = this.props

    return <Panel color={BLUE} title='Wine'>
      <Input
        placeholder='...Filter'
        color={BLUE}
        value={filter}
        onChange={this.setFilter}
      />
      <Scrollable y='auto' height='calc(100vh - 10em)'>
        <List id='wine-list'>
          {wines.map((wine, i) =>
            <List.Item
              key={wine._id}
              color={BLUE}
              data-wine-id={wine._id}
              selected={selectedWine && selectedWine._id === wine._id}
              onClick={() => setWine(wine)}
            >
              {wine.Name}
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

export default WineList
