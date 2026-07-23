import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GuidePage from './GuidePage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GuidePage />
  </StrictMode>,
)
