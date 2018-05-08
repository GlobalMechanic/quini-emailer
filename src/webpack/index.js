import addEventListener from 'add-event-listener'
import 'normalize.css'
import './assets/quini-emailer.css'
/******************************************************************************/
// Dynamic Dependencies
/******************************************************************************/

const dependencies = Promise.all([
  import('react'),
  import('react-dom'),
  import('./ui')
])

/******************************************************************************/
// Execute
/******************************************************************************/

addEventListener(window, 'load', async () => {

  const [
    React,
    { render },
    { default: Emails }
  ] = await dependencies

  const mainTag = document.getElementById('quini-emailer')

  render(<Emails />, mainTag)

})
