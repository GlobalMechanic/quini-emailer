import { Service } from '@benzed/app'
import { webshot } from './hooks'

/******************************************************************************/
// Main
/******************************************************************************/

class EmailService extends Service {

  addHooks (config, app) {

    const saveUrl = config['save-url']

    this.after({
      create: [ webshot(saveUrl) ]
    })

  }

}

/******************************************************************************/
// Exports
/******************************************************************************/

export default EmailService
