import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import PropertyProvider from './context/PropertyContext.jsx';
import {AuthProvider} from './context/AuthContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>

<AuthProvider>

    <PropertyProvider>

  <App />
  
    </PropertyProvider>
    </AuthProvider>
</React.StrictMode>

);

