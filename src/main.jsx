import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CardData from './context/CardData.jsx'
import AppContext from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <AppContext>
      <CardData>
        <App />
      </CardData>
    </AppContext>


  </BrowserRouter>

)
