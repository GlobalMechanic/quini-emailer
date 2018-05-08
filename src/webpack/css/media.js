import { css } from 'styled-components'

/******************************************************************************/
// Data
/******************************************************************************/

export const DESKTOP = 1920
export const TABLET = 1280
export const PHONE = 600
export const MINI = 400

/******************************************************************************/
// Main
/******************************************************************************/

const media = size => {
  return {
    css: (...args) => css`
      @media (max-width: ${size}px) {
        ${css(...args)}
      }
    `
  }
}

media.desktop = media(DESKTOP)

media.tablet = media(TABLET)

media.phone = media(PHONE)

media.mini = media(MINI)

/******************************************************************************/
// Exports
/******************************************************************************/

export default media
