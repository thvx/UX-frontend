import './App.css'
import TestComponentes from './app/Test/testComponentes'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestComponentes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
