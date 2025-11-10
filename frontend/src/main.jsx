// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importe suas páginas (componentes)
import App from './App'; // Seu layout principal (com Navbar/Footer)
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import SobreNos from './pages/SobreNos';
import FaleConosco from './pages/FaleConosco';

// Definição das rotas
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // O Layout principal
    children: [
      { path: '/', element: <Home /> },
      { path: '/servicos', element: <Servicos /> },
      { path: '/sobre-nos', element: <SobreNos /> },
      { path: '/fale-conosco', element: <FaleConosco /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);