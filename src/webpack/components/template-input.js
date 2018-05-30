import React from 'react'
import styled from 'styled-components'

import { RED, YELLOW, PURPLE, BLUE } from '../../constants'
import Flower from '../../templates/common/flower'

/******************************************************************************/
// Data
/******************************************************************************/

const NUMERICAL = Array.from({ length: 9 }, (v, i) => i + 1)

/******************************************************************************/
// Styled
/******************************************************************************/

const Layout = styled.div`

  padding: 0.25em;
  width: 15em;
  margin-right: 1em;

  label {
    color: ${BLUE.toString()};
    font-weight: bold;
  }
`

const ColorButton = styled.button.attrs({
  children: props => props['data-option'],
  'data-field': 'color'
})`
  border: 1px solid ${props => props.color.toString()};
  background-color: ${props => props['data-option'] === props.current
    ? props.color.toString()
    : 'transparent'};

  text-transform: capitalize;
  flex-grow: 1;
  outline: none;
  color: ${props => props['data-option'] !== props.current
    ? props.color.toString()
    : 'white'};

  padding: 0.25em;
  margin: 0.125em;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

const ButtonRow = styled.div`
  display: flex;
  margin-top: 0.125em;
`

const WineListItem = styled.li`
  box-sizing: border-box;

  list-style-type: none;
  margin: 0;
  padding: 0.5em;
  font-size: 0.5em;

  height: 8em;

  background-color: ${props => props.striped ? 'rgba(0, 0, 0, 0.1)' : ''};

  color: ${props => (props.selected ? BLUE.fade(0.75) : BLUE).toString()};

  &:hover {
    background-color: ${BLUE.fade(0.5).toString()};
  }

  cursor: pointer;

  display: flex;
  flex-shrink: 0;
`

const WineList = styled(({ wines, selectedWineId, selectWine, ...props }) => {

  return <ul {...props}>
    { wines.map((wine, i) =>
      <WineListItem
        key={wine._id}
        striped={i % 2 !== 0}
        data-wine-id={wine._id}
        selected={selectedWineId && selectedWineId === wine._id}
        onClick={selectWine}>
        <Flower wineId={wine._id} />
        <ShortDescription wine={wine} />
      </WineListItem>
    )}
  </ul>
})`

  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 250ms;

  padding: 0.25em;

  width: 100%;
  height: 25em;
  overflow: auto;

  display: flex;
  flex-direction: column;
`

const ShortDescription = ({ wine }) =>
  <div style={{
    flexGrow: 0,
    display: 'flex',
    flexDirection: 'column',
    width: '18em',
    marginLeft: 'auto',
    pointerEvents: 'none'
  }}>

    <label style={{ fontSize: '1.25em' }}>{wine.Name}</label>
    <span style={{ marginTop: '0.75em' }}>{wine.Winery}</span>
    <span>{wine.Area}</span>

    <span style={{ marginTop: 'auto' }}>
      <b>{wine.Vintage === 'nv' ? '' : wine.Vintage}</b>{` ${wine.Varietal || ''}`}
    </span>

  </div>

/******************************************************************************/
// Main Components
/******************************************************************************/

const Input = styled(({ multiline, children, ...props }) =>
  React.createElement(
    multiline ? 'textarea' : 'input',
    props,
    null
  )
)`
  box-sizing: border-box;

  border: none;
  border-bottom: 1px solid ${BLUE.toString()};

  outline: none;

  color: ${BLUE.toString()};
  ::placeholder {
    color: ${BLUE.fade(0.5).toString()};
    font-style: italic;
  }
  padding: 0.25em 0.25em 0.125em 0.25em;
  margin-top: 0.25em;

  resize: none;
  height: ${props => props.multiline ? '10em' : 'auto'};

  width: calc(100%);
`

/******************************************************************************/
// Helper
/******************************************************************************/

const averageAppeal = ({ TastingRounds }) => {

  if (!TastingRounds || TastingRounds.length === 0)
    return 0

  if (TastingRounds.length === 1)
    return TastingRounds[0].Overall.Appeal

  return TastingRounds
    .reduce((appeal, round) => appeal + round.Overall.Appeal, 0) / TastingRounds.length
}

const highestOneLine = ({ TastingRounds }) => {

  if (!TastingRounds || TastingRounds.length === 0)
    return null

  let score = -Infinity
  let review = null
  for (const { Overall } of TastingRounds)
    if (Overall.OneLineReview && Overall.Appeal > score) {
      score = Overall.Appeal
      review = Overall.OneLineReview
    }

  return review
}

const highestExpectation = (exp) => {

  let hKey = ''
  let hValue = -Infinity
  for (const key in exp) {
    const value = exp[key]
    if (value > hValue) {
      hValue = value
      hKey = key
    }
  }

  return hKey

}

const parseReviews = reviews => {

  const parsed = {
    review: '',
    expectation: ''
  }

  if (reviews.length === 0)
    return parsed

  let highest = null
  let score = -Infinity
  const expectations = {}

  for (const review of reviews) {
    const overall = averageAppeal(review)
    if (overall >= score) {
      score = overall
      highest = review
    }

    const ekey = review.Expectation
    if (ekey in expectations === false)
      expectations[ekey] = 0

    expectations[ekey]++
  }

  parsed.expectation = highestExpectation(expectations)

  parsed.review = highestOneLine(highest)

  return parsed
}

const parseScores = aggregate => {

  const parsed = {
    eye: { score: '-' },
    nose: { score: '-' },
    mouth: { score: '-' },
    finish: { score: '-' },
    opinion: { score: '-' }
  }

  if (!aggregate || !aggregate.scoreAvg || aggregate.scoreAvg.length < 5)
    return parsed

  const { scoreAvg } = aggregate

  parsed.eye = {
    score: Math.floor((scoreAvg[0] / 100) * 15)
  }
  parsed.nose = {
    score: Math.floor((scoreAvg[1] / 100) * 30)
  }
  parsed.mouth = {
    score: Math.floor((scoreAvg[2] / 100) * 30)
  }
  parsed.finish = {
    score: Math.floor((scoreAvg[3] / 100) * 15)
  }
  parsed.opinion = {
    score: Math.floor((scoreAvg[4] / 100) * 10)
  }

  return parsed
}

/******************************************************************************/
// Main Component
/******************************************************************************/

class TemplateInput extends React.Component {

  state = {
    wines: [],
    selectedWineId: null,
    filter: ''
  }

  componentDidMount () {
    const wineFilter = window.localStorage.getItem('wine-filter')
    const selectedWineId = window.localStorage.getItem('wine-selected')

    this.setWineFilter(wineFilter)
    this.searchWines(wineFilter)
      .then(() => this.selectWine(selectedWineId))

  }

  setWineFilter = filter => {

    // In case it's an event
    if (filter !== null && typeof filter === 'object')
      filter = filter.target.value

    if (typeof filter !== 'string')
      filter = ''

    this.setState({ filter })
    window
      .localStorage
      .setItem('wine-filter', filter)
  }

  searchWines = async e => {

    if (e !== null && typeof e === 'object')
      e.preventDefault()

    const filter = typeof e === 'string'
      ? e
      : this.state.filter

    const { client } = this.props

    let wines = []

    if (filter)
      wines = await client.wines.find({ query: { filter } })

    this.setState({ wines })
  }

  selectWine = async e => {

    const wineId = typeof e === 'object' && e !== null
      ? e.target.dataset.wineId
      : e

    this.setState({ selectedWineId: wineId })
    window
      .localStorage
      .setItem('wine-selected', wineId)

    const { setFields, client } = this.props

    const [ wine ] = this.state.wines.filter(w => w._id === wineId)
    if (!wine)
      return

    const reviews = await client.reviews.find({ query: { wineId } })

    const aggregate = await client.aggregates.get(wineId)

    setFields({
      wineId: wine._id,
      name: wine.Name,
      vintage: wine.Vintage,
      varietal: wine.Varietal,
      winery: wine.Winery,
      area: wine.Area,
      color: wine.Type.toLowerCase(),
      rating: aggregate ? Math.round(aggregate.rating) : 0,
      ...parseReviews(reviews),
      ...parseScores(aggregate)
    })
  }

  render () {

    const { template, fields, setFields } = this.props
    if (!template)
      return null

    const { color = 'red' } = fields
    const { filter, wines, selectedWineId } = this.state
    const { setWineFilter, searchWines, selectWine } = this

    const isMostPopularTemplate = template === 'most-popular'

    return <Layout>

      { isMostPopularTemplate
        ? [ <Input
          key='header'
          placeholder='Header'
          data-field='header'
          value={fields.header}
          onChange={setFields}
        />,

        <Input
          key='sub-header'
          placeholder='Sub Header'
          data-field='sub-header'
          value={fields['sub-header']}
          onChange={setFields}
        />,

        ...NUMERICAL.map(num =>
          <Input
            key={num}
            data-field={num}
            placeholder={`Field ${num}`}
            value={fields[num]}
            onChange={setFields}
          />
        ),

        <ButtonRow key='color-buttons'>
          <ColorButton
            color={RED}
            current={color}
            data-option='red'
            onClick={setFields}
          />
          <ColorButton
            color={YELLOW}
            current={color}
            data-option='white'
            onClick={setFields}
          />
          <ColorButton
            color={PURPLE}
            current={color}
            data-option='rose'
            onClick={setFields}
          />
        </ButtonRow>]
        : null
      }

      { !isMostPopularTemplate
        ? <Input
          key='expectation'
          placeholder='Expectation'
          data-field='expectation'
          value={fields.expectation}
          onChange={setFields}
        />
        : null
      }

      { !isMostPopularTemplate && template !== 'wine-review'
        ? <Input
          key='rating'
          placeholder='Rating'
          data-field='rating'
          value={fields.rating}
          onChange={setFields}
        />
        : null
      }

      { !isMostPopularTemplate
        ? [ <Input
          multiline
          key='review'
          placeholder='Review'
          data-field='review'
          value={fields.review}
          onChange={setFields}
        />,
        <form key='wine-filter' onSubmit={searchWines}>
          <Input
            placeholder='Search'
            value={filter}
            onChange={setWineFilter}
          />
        </form> ]
        : null
      }

      {
        !isMostPopularTemplate
          ? <WineList
            wines={wines}
            selectWine={selectWine}
            selectedWineId={selectedWineId}
          />
          : null
      }

    </Layout>
  }

}

/******************************************************************************/
// Exports
/******************************************************************************/

export default TemplateInput
