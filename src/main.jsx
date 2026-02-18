import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Valentine from './Components/Valentine.jsx'
import Lastpage from './Components/Lastpage.jsx'





createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   <App/>

  </StrictMode>
)
