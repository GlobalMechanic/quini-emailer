// import { observe } from 'mobx'
import feathers from '@feathersjs/client'
import io from 'socket.io-client'

/******************************************************************************/
// TODO
/******************************************************************************/

const HOST = 'http://localhost:5400'

/******************************************************************************/
// Main
/******************************************************************************/

class Client {

  constructor () {
    const socket = io(HOST)
    this.feathers = feathers()
      .configure(feathers.socketio(socket))
  }

  get emails () {
    return this.feathers.service('emails')
  }

  get users () {
    return this.feathers.service('users')
  }

  get addresses () {
    return this.feathers.service('addresses')
  }

  untilConnected () {
    return new Promise(resolve => {
      if (this.feathers.io.connected)
        resolve()

      this.feathers.io.once('connect', () => resolve())
    })
  }

}

/******************************************************************************/
// Exports
/******************************************************************************/

export default Client
