import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Router'
import './reset.css'
import './root.css'

import TranslationAPI from './assets/Componentes/API/TranslationApi'
// import LibrasWidget from './assets/Componentes/API/LibrasWidget'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <Routes />
        <TranslationAPI />
        
    </Router>
    {/* <LibrasWidget /> */}
  </React.StrictMode>
)
