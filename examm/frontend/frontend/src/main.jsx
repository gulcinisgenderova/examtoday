import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../../frontend/src/reset.scss'
import MainProvoider from './context/MainProvoider.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HelmetProvider } from 'react-helmet-async'
ReactDOM.createRoot(document.getElementById('root')).render(
   <HelmetProvider>
 <MainProvoider>
    <App />
  </MainProvoider>
   </HelmetProvider>
  
)
