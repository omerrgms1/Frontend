import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SearchContextProvider from './context/SearchContext'
import AuthContextProvider from './context/AuthContext.jsx'
import {disableReactDevTools} from '@fvilers/disable-react-devtools'

if (process.env.NODE_ENV === 'production') disableReactDevTools()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
