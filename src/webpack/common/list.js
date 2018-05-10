import styled, { css } from 'styled-components'
import { WHITE } from '../../constants'

/******************************************************************************/
// Main
/******************************************************************************/

const Item = styled.li`

  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 250ms;

  ${props => props.selected
    ? css`
    background-color: ${props.color.fade(0.25).toString()};
    color: ${WHITE.toString()};
    `

    : css`
    &:hover {
        background-color: ${props => props.color.fade(0.75).toString()};
    }
    `}

  padding: 0.25em;
  width: 100%;
  display: flex;
`

const List = styled.ul`
  box-sizing: border-box;

  list-style-type: none;
  margin: 0;
  padding: 0.5em;

  height: 100%;

`

List.Item = Item

/******************************************************************************/
// Exports
/******************************************************************************/

export default List
