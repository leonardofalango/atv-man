import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GraphPage from './pages/Graph/GraphPage.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsPage from './pages/Products/ProductsPage.jsx'
import RickAndMortyPage from './pages/RickAndMortyApi/RickAndMortyPage.jsx'
import MapPage from './pages/Maps/MapPage.jsx'

const router = createBrowserRouter([
{
  path : "/",
  element : <App />
},
{
  path : "/graphs",
  element : <GraphPage />
},
{
  path: "/products",
  element: <ProductsPage />
},
{
  path: "/rickandmorty-api",
  element: <RickAndMortyPage />
},
{
  path: "/maps",
  element: <MapPage />
},
{
  path: "/graphs",
  element: <GraphPage />
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
