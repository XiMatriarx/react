import React, {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import App from './app'

document.body.innerHTML = '<div id="root"></div>'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
