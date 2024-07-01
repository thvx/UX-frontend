import './App.css'
//import TestComponentes from './app/Test/testComponentes'
import HomePage from '../src/app/Homepage/homepage'
import Preregistro from '../src/app/Register/Preregistro/preregistro'
import RegistroVendedor from '../src/app/Register/RegistroVendedor/registroVendedor'
import Login from './components/Templates/Login/login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegistroComprador from '../src/app/Registro/registroComprador'
import RegistroVendedor from '../src/app/Registro/registroVendedor'
import Login from './app/Login/login'
import Homepage from './app/Homepage/homepage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/preregistro" element={<Preregistro/>} />
        <Route path="/registro/vendedor" element={<RegistroVendedor/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
