import './App.css'
import TestComponentes from './app/Test/testComponentes'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegistroComprador from '../src/app/Registro/registroComprador'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestComponentes />} />
        <Route path="/registro/comprador" element={<RegistroComprador/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
