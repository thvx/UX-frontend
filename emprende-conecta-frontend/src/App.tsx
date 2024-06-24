import './App.css'
import RegistroVendedor from '../src/app/Registro/registroVendedor'
import TestComponentes from './app/Test/testComponentes'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegistroComprador from '../src/app/Registro/registroComprador'
import PerfilNegocio from '../src/app/Perfil/negocio'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestComponentes />} />
        <Route path="/registro/vendedor" element={<RegistroVendedor/>} />
        <Route path="/registro/comprador" element={<RegistroComprador/>} />
        <Route path="/perfil/negocio" element={<PerfilNegocio/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
