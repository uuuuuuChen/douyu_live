import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'font-awesome/css/font-awesome.min.css'
import './assets/font/iconfont.css'
import './rem'
import { BrowserRouter,HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)
