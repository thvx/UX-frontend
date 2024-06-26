import './App.css'
import Preregistro from './app/Registro/preregistro'
import RegistroVendedor from '../src/app/Registro/registroVendedor'
import TestComponentes from './app/Test/testComponentes'
import Dashboard from './app/Dashboard/dashboard'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestComponentes />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/preregistro" element={<Preregistro />} />
        <Route path="/registro/vendedor" element={<RegistroVendedor/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
