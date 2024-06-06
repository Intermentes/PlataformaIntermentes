import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Router'
import './reset.css'
import './root.css'
import Header from './assets/Componentes/Header/Header'
import Footer from './assets/Componentes/Footer/Footer'
import HeaderUser from './assets/Componentes/Header/HeaderUser'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <HeaderUser/>
        <Routes />
        <Footer />
    </Router>
  </React.StrictMode>
)
