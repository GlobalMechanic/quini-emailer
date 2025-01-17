import addEventListener from 'add-event-listener'
import 'normalize.css'
import './assets/quini-emailer.css'

/******************************************************************************/
// Dynamic Dependencies
/******************************************************************************/

const dependencies = Promise.all([
  import('react'),
  import('react-dom'),
  import('react-router-dom'),
  import('./ui'),
  import('./client')
])

/******************************************************************************/
// Helper
/******************************************************************************/

function getServerProps () {

  let props
  try {

    const serverPropsTag = document.getElementById('quini-emailer-server-props')

    props = JSON.parse(serverPropsTag.textContent)

    serverPropsTag.textContent = ''

  } catch (err) {
    // it could be that the server sent bad data, but generally any failure
    // will simply mean no data has been sent
  }

  // make double sure we're sending back an object
  return props !== null && typeof props === 'object'
    ? props
    : {}

}

function getMainTag () {
  return document.getElementById('quini-emailer')
}

/******************************************************************************/
// Execute
/******************************************************************************/

addEventListener(window, 'load', async () => {

  const [
    React,
    { render },
    { BrowserRouter },
    { default: Ui },
    { default: Client }
  ] = await dependencies

  const { host, ...props } = getServerProps()

  const client = new Client(host)
  const main = getMainTag()

  const element = <BrowserRouter>
    <Ui client={client} {...props} />
  </BrowserRouter>

  render(element, main)

  await client.untilConnected()

})
