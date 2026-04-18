import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Klarence from './Klarence.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Klarence/>
  </StrictMode>,
)

