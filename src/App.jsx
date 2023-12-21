import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cadastrar from './pages/Cadastrar'
import EfetuarPedido from './pages/efetuarpedido'
import Bla from './pages/Bla'
import NovoPost from './pages/NovoPots'
import CadastrarProdutos from './pages/CadastrarProdutos'
import CadastrarPizza from './pages/CadastrarPizza'
import CadastrarSobremesa from './pages/CadastrarSobremesa'
import CadastrarEntrada from './pages/CadastrarEntrada'
import Login from './pages/Login'


function App() {
  

  return (
    <>
      
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/cadastrar" element={<Cadastrar/>}/>
              <Route path="/efetuarpedido" element={<EfetuarPedido/>}/>
              <Route path='/cardapio' element={<Cardapio/>}/>
              <Route path="/bla" element={<Bla/>}/>
              <Route path="/novopost" element={<NovoPost/>}/>
              <Route path="/cadastrarprodutos" element={<CadastrarProdutos/>}/>
              <Route path="/cadastrarpizza" element={<CadastrarPizza/>}/>
              <Route path="/cadastrarentrada" element={<CadastrarEntrada/>}/>
              <Route path="/cadastrarsobremesa" element={<CadastrarSobremesa/>}/>
              <Route path="/Login" element={<Login/>}/>
          </Routes>
        </BrowserRouter>
      
      
    </>
    
  )
}

export default App
