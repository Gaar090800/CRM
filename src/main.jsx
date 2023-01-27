import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import './index.css'
import NuevoCliente, {action as nuevoClienteAction} from './pages/NuevoCliente'
import Index, {loader as clientesLoader} from './pages/Index'
import ErrorPage from './components/ErrorPage'
import Editar, {loader as editarLoader, action as editarAction} from './pages/Editar'
import {action as eliminarAction} from './components/Cliente'


const router =createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children : [
      {
        index : true,
        element : <Index/>,
        loader : clientesLoader,
        errorElement:<ErrorPage />
    
      },
      {
        path : '/clientes/nuevo',
        element : <NuevoCliente />,
        action : nuevoClienteAction
      },
      {
        path : '/clientes/:clienteId/editar',
        element: <Editar/>,
        loader: editarLoader,
        action: editarAction,
        errorElement : <ErrorPage />
      },
      {
        path : '/clientes/:clienteId/eliminar',
        action : eliminarAction
      }
    ]
  }
 
])
{/* ACTION Y LOADERS EN RRD
LOADERS: Se utiliza para obtener datos de una API o de un objeto(similar a un state)
ACTIONS : Se utiliza para procesar la entrada de datos de un form(Debe ser un component de ReactDOM llamado Form)
*/}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
