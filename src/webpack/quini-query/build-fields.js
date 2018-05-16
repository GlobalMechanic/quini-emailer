
/******************************************************************************/
// Main
/******************************************************************************/

async function buildFields (wine, template) {

  const fields = {}

  if (!wine || !template)
    return fields

  fields.wineId = wine._id
  fields.name = wine.Name
  fields.vintage = wine.Vintage
  fields.varietal = wine.Varietal
  fields.winery = wine.Winery
  fields.area = wine.Area

  // TODO fetch this from wherever
  fields.expectation = 'HIGH'
  fields.rating = '80'
  fields.eye = {
    note: 'Looks alright',
    score: 16
  }
  fields.nose = {
    note: 'Smells good',
    score: 21
  }
  fields.mouth = {
    note: 'Tastes good',
    score: 28
  }
  fields.finish = {
    note: '1st Place',
    score: 15
  }
  fields.opinion = {
    note: 'I like Wine',
    score: 9
  }

  return fields
}

/******************************************************************************/
// Exports
/******************************************************************************/

export default buildFields
