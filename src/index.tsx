import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './components/App.tsx'
import "./index.css"
import './main.css'

createRoot(window.document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
