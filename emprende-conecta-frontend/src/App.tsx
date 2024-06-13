import './App.css'
//import TestComponentes from './app/Test/testComponentes'
import HomePage from '../src/app/Homepage/homepage'
import Preregistro from '../src/app/Register/Preregistro/preregistro'
import RegistroVendedor from '../src/app/Register/RegistroVendedor/registroVendedor'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/preregistro" element={<Preregistro/>} />
        <Route path="/registro/vendedor" element={<RegistroVendedor/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
