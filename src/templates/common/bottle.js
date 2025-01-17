import styled from 'styled-components'
import React from 'react'
import { WHITE } from '../../constants'

/******************************************************************************/
// SVG
/******************************************************************************/

const BottleSvg = ({ children, ...props }) =>
  [
    <svg key='svg' version='1.1' viewBox='0 0 139.9 468.7' {...props} >
      <g>
        <path d='M79.8,1.5L48.4,0c0,0,2.4,106.5-1.2,141.5c-3.6,35-45.6,92.8-46.5,146.9C0.2,317.7,0,468.7,0,468.7l137.9-4.6c0,0,4.7-105-0.2-165.9c-4.8-60.9-43.4-137-49.4-165.9C82.3,103.5,79.8,1.5,79.8,1.5'/>
      </g>
    </svg>,
    children
      ? <label key='title'>{children}</label>
      : null
  ]

const FACTOR = 468.7 / 139.9

/******************************************************************************/
// Main Components
/******************************************************************************/

const Bottle = styled.div.attrs({
  children: ({ title }) => <BottleSvg>{title}</BottleSvg>,
  style: props => Object({
    top: `${props.top || 0}em`,
    left: `${props.left || 0}em`,
    width: `${props.width || 10}em`,
    height: `${props.width * FACTOR || 10}em`
  })
})`
  fill: ${props => String(props.color)};
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }

  label {
    color: ${WHITE.toString()};
    position: relative;
    width: 4em;
    top: 1.5em;
    opacity: 0.35;
    font-size: 2.5em;
    text-align: center;
    text-transform: uppercase;
  }
`

/******************************************************************************/
// Exports
/******************************************************************************/

export default Bottle
