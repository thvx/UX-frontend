import Header from '../../components/Organism/header/header'
import Homepage from '../../components/Templates/Homepage/homepage'
import Footer from '../../components/Organism/footer/footer'

function App() {
  return (
    <div className="h-full flex flex-col bg-custom-blue">
      <div>
        <Header />
        <Homepage />
        <Footer />
      </div>

    </div>
  )
}

export default App
