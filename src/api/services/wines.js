import fetch from 'isomorphic-fetch'

/******************************************************************************/
// Main
/******************************************************************************/

class Wines {

  constructor (options, name, server) {
    this.options = options
    this.server = server
  }

  async find ({ query = {} }) {

    const quini = this.server.get('quini')

    const queryString = query.filter
      ? `?lookup=${query.filter}`
      : ''

    const res = await fetch(`${quini.site}/wines.json${queryString}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${quini.token}`
      }
    })

    const wines = await res.json()
    return wines
  }

}

/******************************************************************************/
// Exports
/******************************************************************************/

export default Wines
