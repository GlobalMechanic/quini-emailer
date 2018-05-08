import React from 'react'
import { Email, Image, Box, Item, Span } from 'react-html-email'
import { RED, CYAN, WHITE, BLACK, URL } from '../../constants'

/******************************************************************************/
// Main Component
/******************************************************************************/

const MostPopularFlavours = ({ children, ...props }) =>
  <Email {...props} style={{ backgroundColor: CYAN }}>

    <Item style={{ padding: '2em 0 0 0' }} />

    <Item style={{ backgroundColor: WHITE.fade(0.25), padding: '0.75em 0 0.5em 1em' }}>

      <Span>
        <h1 style={{ textTransform: 'uppercase', margin: '0.25em 0 0.35em 0' }}>Most Popular Flavours</h1>
      </Span>

      <Span style={{ color: BLACK.fade(0.5) }}>
        Men 35-45 years old
      </Span>

    </Item>

    <Box>
      <tr>
        <td>

          <div
            style={{
              backgroundImage: `url(${URL.BottleYellow})`,
              width: 314 * 0.5,
              height: 1080 * 0.5,
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              textAlign: 'center'
            }}>
            <Span style={{ color: WHITE, fontFamily: 'Arial', fontWeight: 'normal' }}>
              <h1 style={{ padding: '340px 0 0 0' }} >
                WHITE
              </h1>
              <h1>
                WINE
              </h1>
            </Span>
          </div>
          {/* <Image
            width={314 * 0.5}
            height={1080 * 0.5}
            src={URL.BottleYellow}
            alt='wine-bottle'
          /> */}
        </td>
        <td style={{ margin: '0 0 0 -2em' }}>
          <Image
            width={463 * 0.325}
            height={378 * 0.325}
            src={URL.BlobYellow}
            alt='wine-bottle'
          />
        </td>
        <td>
          <Image
            width={463 * 0.5}
            height={378 * 0.5}
            src={URL.BlobYellow}
            alt='wine-bottle'
          />
        </td>
        <td>
          <Image
            width={463 * 0.7}
            height={378 * 0.7}
            src={URL.BlobYellow}
            alt='wine-bottle'
          />
        </td>
      </tr>
    </Box>

    <Item>
      <Span>
        <h1 style={{ float: 'right', display: 'inline', margin: '0.75em' }}>QUINI</h1>
      </Span>
    </Item>
  </Email>

/******************************************************************************/
// Exports
/******************************************************************************/

export default MostPopularFlavours
