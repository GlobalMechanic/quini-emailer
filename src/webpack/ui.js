import React from 'react'
import styled from 'styled-components'

import TemplatePicker from './components/template-picker'
import TemplateInput from './components/template-input'
import TemplateDisplay from './components/template-display'

/******************************************************************************/
// Helper
/******************************************************************************/

const Row = styled.div`
  display: flex;
`

const ErrorLayout = styled.div`

  padding: 0.5em;

  background-color: rgb(0, 0, 0, 0.75);

  > h1 {
    color: red;
  }

  > h2 {
    color: rgb(255, 150, 165);
    margin-top: 0.25em;
  }

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;

`

const Error = ({ children }) =>
  children
    ? <ErrorLayout>
      <h1>{children.name}</h1>
      <h2>{children.message}</h2>
    </ErrorLayout>

    : null

const Layout = styled.div`
  font-family: Helvetica;

  > h1 { margin: 0 0 0.5em 0; }

  padding: 1em;
`

/******************************************************************************/
// Main Component
/******************************************************************************/

class QuiniEmailer extends React.Component {

  state = {
    template: null,
    fields: {}
  }

  componentDidMount () {

    if (this.props.hydrated)
      return

    const storedState = window
      .localStorage
      .getItem('quini-emailer-state')

    if (!storedState)
      return

    this.setState(JSON.parse(storedState))
  }

  componentDidUpdate () {

    const { template, fields } = this.state
    const stateToStore = { template, fields }

    window
      .localStorage
      .setItem('quini-emailer-state', JSON.stringify(stateToStore))
  }

  setTemplate = e => {

    const { template } = e.target.dataset

    this.setState({ template })
  }

  setFields = e => {

    const dataset = e.target && e.target.dataset

    let fields

    if (dataset) {

      const { field, option } = dataset
      const value = field === 'color'
        ? option
        : e.target.value

      fields = {
        [field]: value
      }

    } else
      fields = e

    this.setState({
      fields: { ...this.state.fields, ...fields }
    })
  }

  render () {

    const { client, hydrated, err } = this.props

    const { setTemplate, setFields } = this
    const { template, fields } = this.state

    return <Layout>

      <Error>{err}</Error>

      <h1>Quini Email Builder</h1>

      <Row>

        <TemplatePicker
          hydrated={hydrated}
          template={template}
          setTemplate={setTemplate}
        />

        <TemplateInput
          hydrated={hydrated}
          client={client}
          template={template}
          fields={fields}
          setFields={setFields}
        />

        <TemplateDisplay
          template={template}
          fields={fields}
        />

      </Row>

    </Layout>
  }

}

/******************************************************************************/
// Exports
/******************************************************************************/

export default QuiniEmailer
