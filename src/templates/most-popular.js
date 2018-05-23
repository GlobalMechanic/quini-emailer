import React from 'react'

import { Bottle, Container, Title, Blob, QuiniTag } from './common'
import { CYAN, RED, YELLOW, PURPLE } from '../constants'

/******************************************************************************/
// Main
/******************************************************************************/

const MostPopular = ({ fields, ...props }) => {

  const color = fields.color === 'rose'
    ? PURPLE
    : fields.color === 'white'
      ? YELLOW
      : RED

  const fields1to3 = [1, 2, 3].map(key => fields[key])
  const fields4to6 = [4, 5, 6].map(key => fields[key])
  const fields7to9 = [7, 8, 9].map(key => fields[key])

  return <Container color={CYAN}>

    <Bottle
      color={color}
      width={11}
      left={2}
      top={0.5}
      title={`${fields.color || 'red'} wine`}
    />

    <Title sub={fields['sub-header'] } align='left'>
      {'Most Popular ' + (fields['header'] || '')}
    </Title>

    <Blob color={color} left={12.5} top={25} width={10} text={fields1to3} />
    <Blob color={color} left={20} top={18} width={16} text={fields4to6} />
    <Blob color={color} left={29} top={7} width={21} text={fields7to9} />

    <QuiniTag/>

  </Container>

}

/******************************************************************************/
// Exports
/******************************************************************************/

export default MostPopular
