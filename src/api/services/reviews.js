import fetch from 'isomorphic-fetch'

/******************************************************************************/
// Main
/******************************************************************************/

class Reviews {

  constructor (options, name, server) {
    this.options = options
    this.server = server
  }

  async find ({ query = { } }) {

    const quini = this.server.get('quini')

    const queryString = query.wineId ? `?wine_id=${query.wineId}` : ''

    const res = await fetch(`${quini.site}/reviews.json${queryString}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${quini.token}`
      }
    })

    const reviews = await res.json()
    return reviews
  }

}

/******************************************************************************/
// Exports
/******************************************************************************/

export default Reviews
