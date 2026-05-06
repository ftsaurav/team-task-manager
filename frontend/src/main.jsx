import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import {
  BrowserRouter
} from 'react-router-dom'

import App from './App'

import './index.css'

import AuthProvider from './context/AuthContext'

ReactDOM.createRoot(
  document.getElementById('root')
).render(

  <React.StrictMode>

    <AuthProvider>

      <BrowserRouter>

        <App />

        <ToastContainer />

      </BrowserRouter>

    </AuthProvider>

  </React.StrictMode>
)