import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import GlobalStyle from './globalStyle'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 

    <GlobalStyle>
    <App />
    </GlobalStyle>
  ,
)
