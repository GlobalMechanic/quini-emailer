// import { observe } from 'mobx'
import feathers from '@feathersjs/client'
import io from 'socket.io-client'

/******************************************************************************/
// Host
/******************************************************************************/

const HOST = `http://localhost:7100`

/******************************************************************************/
// Main
/******************************************************************************/

class Client {

  constructor (host = HOST) {

    const socket = io(host)
    this.feathers = feathers()
      .configure(feathers.socketio(socket))
  }

  get wines () {
    return this.feathers.service('wines')
  }

  get aggregates () {
    return this.feathers.service('aggregates')
  }

  get reviews () {
    return this.feathers.service('reviews')
  }

  untilConnected () {
    return new Promise(resolve => {
      if (this.feathers.io.connected)
        resolve()

      this.feathers.io.once('connect', resolve)
    })
  }

}

/******************************************************************************/
// Exports
/******************************************************************************/

export default Client
