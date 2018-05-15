import { expect } from 'chai'
import webshot from './webshot'
import App from '@benzed/app'

import { copy } from '@benzed/immutable'
import { runHook } from 'feathers-hooks-common'

import path from 'path'
import fs from 'fs-extra'

/******************************************************************************/
// TEMP
/******************************************************************************/

const WINE = {
  '_id': '54f786a41a35d8030000006a',
  'aggregate': '54f786a41a35d8030000006a',
  'nameClean': 'Andeluna 1300 Malbec Andeluna  Malbec',
  'Winery': 'Andeluna ',
  'Varietal': 'Malbec ',
  'Type': 'Red',
  'Area': 'Mendoza ',
  'vintage': '2013',
  'Name': 'Andeluna 1300 Malbec',
  'Country': 'Argentina ',
  'PeopleId': '5360f25cd3fb380200000007',
  'Style': '',
  'creationDate': '2015-03-04T22:26:44.338Z',
  'UserSubmitted': true,
  'Modifiers': [ ],
  '__v': 0
}

const WEBSHOT_SAVE_URL = path.join(process.cwd(), 'test', 'test-shots')

fs.ensureDirSync(WEBSHOT_SAVE_URL)

/******************************************************************************/
// CreateEmail
/******************************************************************************/

function createEmail (
  wine = WINE::copy(),
  template = 'wine-review'
) {
  const app = this
  return runHook({

    app,
    type: 'after',
    method: 'create',
    result: {
      _id: Date.now(),
      wine,
      template,
      addresses: []
    }

  })(webshot(WEBSHOT_SAVE_URL))()
}

/******************************************************************************/
// Test
/******************************************************************************/

// eslint-disable-next-line no-unused-vars
/* global describe it before after beforeEach afterEach */

describe('webshot hook', () => {

  let app
  before(() => {
    app = new App({
      port: 1200,
      socketio: true,
      rest: {
        public: path.join(process.cwd(), 'dist/public')
      }
    })

    return app.initialize()
  })

  describe('needs to be setup with a url', () => {
    it('url is the location where images are saved', () => {
      expect(() => webshot(WEBSHOT_SAVE_URL)).to.not.throw(Error)
    })
    it('is required', () => {
      expect(() => webshot()).to.throw('requires saveUrl')
    })
    it('must be a string', () => {
      expect(() => webshot(Symbol('whatever'))).to.throw('Must be of type: String')
    })
    it('must point toward an existing directory', () => {
      expect(() => webshot(path.join(__dirname, 'non-exist'))).to.throw('saveUrl argument must be a url')
    })
  })

  it('can only be run on \'before\' \'create\' hooks.')

  it('generates a html and creates an image out of it', async () => {
    const data = await app::createEmail()
  })

})
