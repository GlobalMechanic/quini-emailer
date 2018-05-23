import React from 'react'
import { Switch, Route } from 'react-router'
import Emailer from './emailer'
import TEMPLATES from '../templates'

/******************************************************************************/
// TEMP
/******************************************************************************/

const TemplateView = ({ fields, template }) => {

  const Template = TEMPLATES[template]
  if (!Template || !fields)
    return <ErrorView error={{ message: 'Missing Template' }}/>

  return <Template fields={fields} />
}

const ErrorView = ({ error, location }) => {

  if (!error)
    error = {
      name: 'NotFound',
      message: location.pathname + ' not found'
    }

  return `ERROR ${error.message}`
}
/******************************************************************************/
// Main Component
/******************************************************************************/

const Routes = ({ children, client, error, ...serverProps }) =>
  error
    ? <ErrorView error={error} />
    : <Switch>

      <Route key='home' path='/' exact render={routeProps =>
        <Emailer client={client} {...routeProps} {...serverProps} />
      }/>

      <Route key='view' path='/view/:viewId' render={routeProps =>
        <TemplateView {...routeProps} {...serverProps} />
      }/>

      <Route key='error' component={ErrorView} />
    </Switch>

/******************************************************************************/
// Exports
/******************************************************************************/

export default Routes
