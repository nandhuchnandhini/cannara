import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import Header from '../src/Components/Header.jsx'
import Nav from './Components/Nav.jsx'
import Article from './Components/Article.jsx'
import Section from './Components/Section.jsx'
import Aside from './Components/Aside.jsx'
import Footer from './Components/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header />
    <Nav />
    <Article />
    <Section />
    <Aside />
    <Footer />
    
  </StrictMode>,
)
