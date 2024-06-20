import './App.css'
import TestComponentes from './app/Test/testComponentes'
import Dashboard from './app/Dashboard/dashboard'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestComponentes />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
