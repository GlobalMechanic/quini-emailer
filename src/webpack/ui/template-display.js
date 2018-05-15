import React from 'react'

import TEMPLATES from '../../templates'

import DUMMY_AGGREGATE from '../assets/dummy-data/aggregate-object'

/******************************************************************************/
// Main Component
/******************************************************************************/

class TemplateDisplay extends React.Component {

  state = {
    aggregate: null
  }

  async getAggregate (wineId) {

    // TODO actually get it
    const aggregate = await Promise.resolve(DUMMY_AGGREGATE)

    this.setState({ aggregate })
  }

  componentWillReceiveProps (nProps) {
    const { aggregate } = this.state
    const { wine } = nProps

    if (wine && (!aggregate || aggregate.value.wine !== wine._id))
      this.getAggregate(wine._id)

  }

  render () {

    const { template, wine } = this.props
    const { aggregate } = this.state

    const Template = TEMPLATES[template]
    if (!Template || !wine || !aggregate)
      return null

    return <Template wine={wine} aggregate={aggregate} />

  }

}

/******************************************************************************/
// Exports
/******************************************************************************/

export default TemplateDisplay
