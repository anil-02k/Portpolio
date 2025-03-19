import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SplashCursor from './components/SplashCoursor/SplashCourser.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* SplashCursor at the root level with z-index: -1 */}
    {/* <SplashCursor /> */}
    {/* Main content with z-index: 0 or higher */}
    <div style={{ position: 'relative', zIndex: 0 }}>
      <App />
    </div>
  </StrictMode>,
)
