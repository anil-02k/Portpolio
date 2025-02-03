import React from 'react'
import Navbar from './components/Navbar/Navbar'
import SplashCursor from './components/SplashCoursor/SplashCourser.jsx'
const App = () => {
  return (
    <>
    {/* SplashCursor at the root level with z-index: -1 */}
    <SplashCursor />

    {/* Main content with z-index: 0 or higher */}
    <main style={{ position: 'relative', zIndex: 0 }}>
      <Navbar />
      {/* Other components go here */}
    </main>
  </>
  )
}

export default App