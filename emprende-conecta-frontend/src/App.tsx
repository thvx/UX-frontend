import './App.css'
import TestComponentes from './app/Test/testComponentes'
import PerfilNegocio from '../src/app/Perfil/negocio'
import Preregistro from './app/Registro/preregistro'
import Dashboard from './app/Dashboard/dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegistroComprador from '../src/app/Registro/registroComprador'
import RegistroVendedor from '../src/app/Registro/registroVendedor'
import Login from './app/Login/login'
import Homepage from './app/Homepage/homepage'
import Perfilusuario from './app/Perfilusuario/perfilusuario'
import ProductosFav from './app/Productosfav/Productos'
import ProductDetailsPage from './app/ProductDetailsPage/productdetailspage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestComponentes />} />
        <Route path="/registro/vendedor" element={<RegistroVendedor/>} />
        <Route path="/registro/comprador" element={<RegistroComprador/>} />
        <Route path="/perfil/negocio" element={<PerfilNegocio/>} />
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/preregistro" element={<Preregistro />} />
        <Route path="/registro/comprador" element={<RegistroComprador />} />
        <Route path="/registro/vendedor" element={<RegistroVendedor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfilusuario" element={<Perfilusuario />} />
        <Route path='/productosfav' element={<ProductosFav />} />
        <Route path='/productdetails' element={<ProductDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
