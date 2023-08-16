// index.js
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './router'
import App from './pages/App/App'
const root = createRoot(document.getElementById('app'))
root.render(
  <StrictMode>
    <App />
    
  </StrictMode>
)
