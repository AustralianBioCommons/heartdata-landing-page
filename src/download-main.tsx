import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './fonts'
import './index.css'
import DownloadGuidePage from './DownloadGuidePage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DownloadGuidePage />
  </StrictMode>,
)
