import './style.css'
// Import the theme switcher script so it gets bundled with the application
import './minimal-theme-switcher.js'

import './console-message.js'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1><span class="handwave">👋</span>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
