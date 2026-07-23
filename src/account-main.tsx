import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './fonts'
import './index.css'
import GuideStubPage from './GuideStubPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GuideStubPage
      title="Set up an account"
      intro="Create your ACDC Data Commons account and sign in."
    />
  </StrictMode>,
)
