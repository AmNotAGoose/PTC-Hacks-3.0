import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'leaflet/dist/leaflet.css';
// import SwitchToLocal from './components/SwitchToLocal/SwitchToLocal.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CommunityMap from './components/Community/CommunityMap.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Router>
          <Routes>
            <Route path="/" element={<App />} />
            {/* <Route path="/switch" element={<SwitchToLocal />} /> */}
            <Route path="/app" element={<CommunityMap />} />
          </Routes>
        </Router>
  /* </React.StrictMode>, */
)
