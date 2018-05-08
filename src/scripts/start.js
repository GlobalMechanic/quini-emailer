import '../../util/link-benzed.temp.js'

import QuiniEmailerApi from '../api/server'
import { run } from '@benzed/app'
import path from 'path'

/******************************************************************************/
// Setup
/******************************************************************************/

const CONFIG_URL = path.resolve(__dirname, '../../config')

/******************************************************************************/
// Execute
/******************************************************************************/

QuiniEmailerApi::run(CONFIG_URL)
