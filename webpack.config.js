require('./util/link-benzed.temp.js')

const path = require('path')
const { WebpackConfig } = require('@benzed/dev')

/******************************************************************************/
// Config
/******************************************************************************/

module.exports = new WebpackConfig({
  output: path.resolve(__dirname, './dist/public'),
  port: 6200
})
