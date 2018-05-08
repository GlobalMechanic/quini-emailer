import React from 'react'
import styled from 'styled-components'

import { WHITE, BLUE } from '../../constants'

/******************************************************************************/
// Data
/******************************************************************************/

const ADDYS = [
  'ben@globalmechanic.com',
  'bruce@globalmechanic.com',
  'brodie@globalmech,anic.com',
  'pierre@quini.com',
  'ben@globalmechanic.com',
  'bruce@globalmechanic.com',
  'brodie@globalmech,anic.com',
  'pierre@quini.com',
  'ben@globalmechanic.com',
  'bruce@globalmechanic.com',
  'brodie@globalmech,anic.com',
  'pierre@quini.com',
  'ben@globalmechanic.com',
  'bruce@globalmechanic.com',
  'brodie@globalmech,anic.com',
  'pierre@quini.com',
  'ben@globalmechanic.com',
  'bruce@globalmechanic.com',
  'brodie@globalmech,anic.com',
  'pierre@quini.com'
]

/******************************************************************************/
// Styled
/******************************************************************************/

const Container = styled.div`
  box-sizing: border-box;


  margin: 0.25em;
  margin-top: auto;

  border: 1px solid ${BLUE.toString()};
  height: 20em;
`

const Title = styled.h2.attrs({ children: 'ADDRESS INPUT' })`
  background-color: ${BLUE.toString()};
  margin: 0;
  padding: 0.25em;
  color: white;
`

const Addresses = styled.div`
  padding: 0.25em;
  margin-top: 0.25em;
  box-sizing: border-box;

  width: 100%;
  height: calc(100% - 3em);

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;

  overflow: auto;
`

const Address = styled.span`

  background-color: ${BLUE.toString()};
  color: ${WHITE.toString()};

  padding: 0.5em;
  border: none;
  border-radius: 0.75em;
  flex-grow: 0;
  flex-shrink: 0;
  height: 1em;

  margin: 0.125em;

`

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${WHITE.toString()};
  background-color: transparent;
  outline: none;
  width: auto;
  color: inherit;
`

/******************************************************************************/
// Main Component
/******************************************************************************/

const AddressInput = ({ children, ...props }) =>
  <Container {...props} id='address-input'>
    <Title/>
    <Addresses>
      {[ADDYS.map((addy, i) => <Address key={i} >{addy}</Address>)]}
      <Address>
        <Input/>
      </Address>
    </Addresses>
  </Container>

/******************************************************************************/
// Exports
/******************************************************************************/

export default AddressInput
