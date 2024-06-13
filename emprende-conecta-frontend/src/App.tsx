import './App.css'
//import TestComponentes from './app/Test/testComponentes'
import HomePage from '../src/app/Homepage/homepage'
import Preregistro from '../src/app/Register/Preregistro/preregistro'
import RegistroVendedor from '../src/app/Register/RegistroVendedor/registroVendedor'
import Login from './components/Templates/Login/login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard1 from './app/Dashboard/dashboard1'
import Dashboard2 from './app/Dashboard/dashboard2'
import Dashboard3 from './components/Templates/Dashboard/dashboard3'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/preregistro" element={<Preregistro/>} />
        <Route path="/registro/vendedor" element={<RegistroVendedor/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard1" element={<Dashboard1/>}/>
        <Route path="/dashboard2" element={<Dashboard2/>}/>
        <Route path="/dashboard3" element={<Dashboard3/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
