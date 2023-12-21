import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

//Pages
import Cadastrar from './pages/Cadastrar.jsx'
import Cardapio from './pages/Cardapio.jsx'
import Bla from './pages/Bla.jsx'
import NovoPost from './pages/NovoPots.jsx'
import CadastrarProdutos from './pages/CadastrarProdutos.jsx'
import CadastrarPizza from './pages/CadastrarPizza.jsx'
import CadastrarEntrada from "./pages/CadastrarEntrada.jsx"
import CadastrarSobremesa from './pages/CadastrarSobremesa.jsx'
import Login from './pages/Login.jsx'

// configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/cadastrar",
    element: <Cadastrar/>
  },
  {
    path: "/cardapio",
    element: <Cardapio/>
  },
  {
    path: "/bla",
    element: <Bla/>
  },
  {
    path: "/novopost",
    element: <NovoPost/>
  },
  {
    path: "/cadastrarprodutos",
    element: <CadastrarProdutos/>
  },
  {
    path: "cadastrarpizza",
    element: <CadastrarPizza/>
  },
  {
    path: "cadastrarentrada",
    element: <CadastrarEntrada/>
  },
  {
    path: "cadastrarsobremesa",
    element: <CadastrarSobremesa/>
  },
  {
    path: 'login',
    element: <Login/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
