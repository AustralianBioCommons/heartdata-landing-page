import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './fonts'
import './index.css'
import ApplyPage from './ApplyPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApplyPage />
  </StrictMode>,
)
