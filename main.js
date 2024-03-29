import { setupCounter } from './counter.js'
import navbar from './src/navbar.js'

function init() {
  document.querySelector('#app').innerHTML = `
      ${navbar}
  `
}

init();