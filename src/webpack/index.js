import addEventListener from 'add-event-listener'
import 'normalize.css'
import './assets/quini-emailer.css'
/******************************************************************************/
// Dynamic Dependencies
/******************************************************************************/

const dependencies = Promise.all([
  import('react'),
  import('react-dom'),
  import('./ui'),
  import('./client')
])

/******************************************************************************/
// Execute
/******************************************************************************/

addEventListener(window, 'load', async () => {

  const [
    React,
    { render },
    { default: EmailPicker },
    { default: Client }
  ] = await dependencies

  const mainTag = document.getElementById('quini-emailer')

  const client = new Client()

  render(<EmailPicker client={client} />, mainTag)

  await client.untilConnected()

})
