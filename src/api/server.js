import App from '@benzed/app'
import { NotAuthenticated } from '@feathersjs/errors'

import fetch from 'isomorphic-fetch'
import { wines, aggregates, reviews } from './services'
import ip from 'public-ip'
/******************************************************************************/
// Data
/******************************************************************************/

const QUINI_SITE = `https://quiniwine.com`

/******************************************************************************/
// App
/******************************************************************************/

class QuiniEmailerServer extends App {

  services = {
    wines,
    aggregates,
    reviews
  }

  // LifeCycle

  async onInitialize () {
    const site = this.get(['quini', 'site'])
    if (!site)
      this.set(['quini', 'site'], QUINI_SITE)

    const token = await this.fetchQuiniToken()
    if (!token)
      throw new Error('Could not fetch quini token')

    this.log`fetched quini token`

    const address = await ip.v4()

    this.set('host', address)
  }

  onSerializeClient (req, res) {
    const token = this.get(['quini', 'token'])
    const host = this.get('host')
    const port = this.get('port')

    return !token
      ? { err: new NotAuthenticated('Not connected to the quini api') }
      : { host: `http://${host}:${port}` }
  }

  // Main

  async fetchQuiniToken () {

    const { email, password, site } = this.get('quini')

    const res = await fetch(`${site}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const { token } = await res.json()

    this.set(['quini', 'token'], token)

    return token
  }

}

/******************************************************************************/
// Exports
/******************************************************************************/

export default QuiniEmailerServer
