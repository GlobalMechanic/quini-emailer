import fetch from 'isomorphic-fetch'

/******************************************************************************/
// Main
/******************************************************************************/

class Aggregates {

  constructor (options, name, server) {
    this.options = options
    this.server = server
  }

  async get (wineId) {

    const quini = this.server.get('quini')

    const queryString = `?wine_id=${wineId}`

    const res = await fetch(`${quini.site}/aggregates.json${queryString}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${quini.token}`
      }
    })

    const aggregates = await res.json()
    return aggregates && aggregates[0]
  }

}

/******************************************************************************/
// Exports
/******************************************************************************/

export default Aggregates
