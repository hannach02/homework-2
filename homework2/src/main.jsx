import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CreateForm from './form.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <CreateForm />
  </React.StrictMode>,
)
