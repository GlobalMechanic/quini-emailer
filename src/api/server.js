import App from '@benzed/app'

import { emails } from './services'
import Routes from '../webpack/routes'

/******************************************************************************/
// App
/******************************************************************************/

class QuiniEmailerServer extends App {

  services = {
    emails
  }

  getClientComponent () {
    return Routes
  }

  async onSerializeClient (req) {

    if (!req.originalUrl.includes('/view/'))
      return null

    const viewId = req.originalUrl.replace('/view/', '')
    const email = await this.emails.get(viewId).catch(() => null)

    return {
      fields: email && email.fields,
      template: email && email.template
    }
  }
}

/******************************************************************************/
// Exports
/******************************************************************************/

export default QuiniEmailerServer
