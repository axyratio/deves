import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { MobileLayout } from './Layout/MobileLayout/MobileLayout.tsx'
import { BottomNav } from './component/app/BottomNav/BottomNav.tsx'
import { LangProvider } from './context/LangContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LangProvider>
  </StrictMode>,
)
