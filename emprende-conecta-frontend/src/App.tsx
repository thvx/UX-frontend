import './App.css'
import TestComponentes from './app/Test/testComponentes'
import Checkout from './app/Checkout/checkout'
import Pago from './app/Checkout/tipo-pago'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { TotalAmountProvider } from './app/Checkout/totalAmountContext'
import { ReactDOM } from 'react'

function App() {

  return (
    <TotalAmountProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestComponentes />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/pago" element={<Pago />} />
      </Routes>
    </BrowserRouter>
    </TotalAmountProvider>
  )
}

export default App
