import './App.css'
import RegistroVendedor from '../src/app/Registro/registroVendedor'
import TestComponentes from './app/Test/testComponentes'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestComponentes />} />
        <Route path="/registro/vendedor" element={<RegistroVendedor/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
