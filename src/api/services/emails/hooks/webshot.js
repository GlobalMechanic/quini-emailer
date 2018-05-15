import { Schema, string, required } from '@benzed/schema'
import { Hook } from '@benzed/app'
import webshot from 'webshot'

import fs from 'fs'
import path from 'path'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'

import TEMPLATES from '../../../../templates'

/******************************************************************************/
// Validation
/******************************************************************************/

const isDir = value =>
  typeof value !== 'string' || (fs.existsSync(value) && fs.statSync(value).isDirectory())
    ? value
    : new Error('webshot hook saveUrl argument must be a url that points toward an existing directory')

const toObject = value =>
  Object({ saveUrl: value })

/******************************************************************************/
// Data
/******************************************************************************/

const BINARY = 'binary'

const WEBSHOT_OPTIONS = {
  siteType: 'html',
  // windowSize: {
  //   width: 800,
  //   height: 600
  // }
}

/******************************************************************************/
// Rendering
/******************************************************************************/

function createHtmlTemplate (app) {

  const { public: pub } = app.get('rest')

  const indexHtml = path.join(pub, 'index.html')
  let [ bodyOpen, bodyClose ] = fs
    .readFileSync(indexHtml)
    .toString()
    .split('<main id=\'quini-emailer\'/>')

  bodyOpen = bodyOpen + '<main id=\'quini-email\'>'
  bodyClose = '</main>' + bodyClose

  const head = bodyOpen.split('</head>')
  const headOpen = head[0]

  bodyOpen = bodyOpen[1]
  const headClose = '</head>'

  return (wine, template) => {

    const Template = TEMPLATES[template]
    const sheet = new ServerStyleSheet()
    const reacted = renderToString(
      sheet.collectStyles(<Template wine={wine}/>)
    )

    const styles = sheet.getStyleTags()

    return headOpen +
      styles +
      headClose +

      bodyOpen +
      reacted +
      bodyClose

  }

}

/******************************************************************************/
// Webshot Hook
/******************************************************************************/

const setup = new Schema(
  string(
    required('webshot hook requires saveUrl argument.'),
    isDir,
    toObject
  )
)

function exec (ctx) {

  this.checkContext(ctx)

  const { result, app } = ctx
  const { _id, wine, template } = result

  const { saveUrl } = this.options

  if (!this.createHtml)
    this.createHtml = createHtmlTemplate(app)

  const html = this.createHtml(wine, template)
  const render = webshot(html, WEBSHOT_OPTIONS)

  const file = fs.createWriteStream(
    path.join(saveUrl, `${_id}.png`),
    { encoding: BINARY }
  )

  return new Promise((resolve, reject) => {
    render.on('data', data => file.write(data.toString(BINARY)), BINARY)
    render.on('end', resolve)
    render.on('error', reject)
  })

}

/******************************************************************************/
// Exports
/******************************************************************************/

export default new Hook({

  name: 'webshot',
  types: 'after',
  methods: 'create',
  setup,
  exec

})
