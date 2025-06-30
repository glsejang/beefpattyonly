import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

const basename = import.meta.env.MODE === 'production' ? '/beefpattyonly/' : '/';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={basename} >
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
