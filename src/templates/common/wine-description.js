import React from 'react'
import styled from 'styled-components'

import { get } from '@benzed/immutable'

import { BLACK } from '../../constants'

import Flower from './flower'

/******************************************************************************/
// Sub Components
/******************************************************************************/

const WineDescriptionBase = styled.div`
  color: ${BLACK.toString()};
  padding: 1em;

  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;

  width: 14.5em;
`

const Label = styled.label.attrs({
  style: props => Object({
    color: BLACK.fade(props.fade || 0).toString(),
    fontSize: `${props.size || 1}em`
  })
})`
  font-weight: bold;
  font-family: inherit;
`

const ThinLabel = Label.extend`
  margin: 0.25em 0 0.25em 0;
  font-weight: normal;
`

const Data = ({ fields, path, Component = Label, ...props }) => {

  const data = get(fields, path)
  if (!data)
    return null

  return <Component {...props}>{data}</Component>
}

const Origin = ({ fields }) => {

  const origin = [
    get(fields, 'winery'),
    get(fields, 'area'),
    get(fields, 'country')
  ]
    .filter(a => a)
    .join(', ')

  return <Label fade={0.5} size={0.9} >
    {origin}
  </Label>
}

// Name
// Vintage
// Varietal
// Winery
// Location
// Description

/******************************************************************************/
// Main Component
/******************************************************************************/

const WineDescription = ({ children, fields, ...props }) =>
  <WineDescriptionBase {...props}>
    <Flower wineId={fields.wineId}/>
    <Data fields={fields}
      path='name'
    />
    <Data fields={fields}
      path='vintage'
      Component={ThinLabel}
      fade={0.25}
      size={1.8}
    />
    <Data fields={fields}
      path='varietal'
      fade={0.5}
      size={0.9}
    />
    <Data fields={fields}
      path='winery'
      Component={ThinLabel}
      fade={0.5}
      size={0.9}
    />

    <Origin fields={fields}/>

    <ThinLabel fade={0.7} size={0.8}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
      faucibus augue nec elementum. Mauris in dolor tincidunt, cursus magna vel,
      ornare odio. Aliquam tempus nisi vitae sem volutpat, id dictum purus lacinia.
    </ThinLabel>

    { children }
  </WineDescriptionBase>

/******************************************************************************/
// Exports
/******************************************************************************/

export default WineDescription
