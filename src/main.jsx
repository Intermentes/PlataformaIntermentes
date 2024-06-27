import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Router'
import './reset.css'
import './root.css'

import TranslationAPI from './assets/Componentes/API/TranslationApi'
import ScrollToTop from './assets/Componentes/ScrollToTop/ScrollToTop'
import SetinhaVolta from './assets/Componentes/SetinhaVolta/SetinhaVolta'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <SetinhaVolta />
        <ScrollToTop />
        <Routes />
        <TranslationAPI />
    </Router>
  </React.StrictMode>
);
