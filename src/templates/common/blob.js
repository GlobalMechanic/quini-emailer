import styled from 'styled-components'
import React from 'react'
import { WHITE } from '../../constants'

/******************************************************************************/
// SVG
/******************************************************************************/

const BlobSvg = ({ children, ...props }) =>
  [
    <svg key='svg' version='1.1' viewBox='0 0 459.2 378.7' {...props} >
      <g>
        <path d='M10.4,109.7c25-82,169.9-129.2,288-102c100,23,169,86.8,160,167c-11,98-79,204-213,204C88.4,378.7-37.9,268.2,10.4,109.7z'/>
      </g>
    </svg>,
    children
      ? children.map((value, i) => <label key={i}>{value}</label>)
      : null
  ]

const FACTOR = 378.7 / 459.2

/******************************************************************************/
// Main Components
/******************************************************************************/

const Blob = styled.div.attrs({
  children: ({ text }) => <BlobSvg>{text}</BlobSvg>,
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
    font-size: 1.5em;
    padding: 0.25em;
    text-align: center;
  }
`

/******************************************************************************/
// Exports
/******************************************************************************/

export default Blob
