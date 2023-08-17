// index.js
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './router'
import App from './pages/App/App'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter } from 'react-router-dom'

const root = createRoot(document.getElementById('app'))
root.render(
  <StrictMode>
    <BrowserRouter>
    
    <App />
    </BrowserRouter>
  </StrictMode>
)
