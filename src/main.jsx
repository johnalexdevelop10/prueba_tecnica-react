import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DataProvider } from './context/DataContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
    {/* dataprovider comp inf/ a los demas com */}
      <App />
    </DataProvider>
  </React.StrictMode>
)
