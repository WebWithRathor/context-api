import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import NewComponent from './components/NewComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <NewComponent>
        <App/>
    </NewComponent>
);