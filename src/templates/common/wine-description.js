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

const Data = ({ wine, path, Component = Label, ...props }) => {

  const data = get(wine, path)
  if (!data)
    return null

  return <Component {...props}>{data}</Component>
}

const Origin = ({ wine }) => {

  const origin = [
    get(wine, 'Winery'),
    get(wine, 'Area'),
    get(wine, 'Country')
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

const WineDescription = ({ children, wine, aggregate, ...props }) =>
  <WineDescriptionBase {...props}>
    <Flower wine={wine}/>
    <Data wine={wine} path='Name' />
    <Data wine={wine}
      path='vintage'
      Component={ThinLabel}
      fade={0.25}
      size={1.8}
    />
    <Data wine={wine}
      path='Varietal'
      fade={0.5}
      size={0.9}
    />
    <Data wine={wine}
      path='Winery'
      Component={ThinLabel}
      fade={0.5}
      size={0.9}
    />

    <Origin wine={wine}/>

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
