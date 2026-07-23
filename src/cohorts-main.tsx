import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './fonts'
import './index.css'
import GuideStubPage from './GuideStubPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GuideStubPage
      title="Build cohorts with filters"
      intro="Use the cohort explorer to filter the harmonised data and assemble your study set."
    />
  </StrictMode>,
)
