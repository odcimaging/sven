import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Components/Home/Home'

import Root from './Components/Root/Root'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Root />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
)
