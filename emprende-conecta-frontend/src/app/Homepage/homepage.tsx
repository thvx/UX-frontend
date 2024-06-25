import Homepage from "../../components/Templates/Homepage/homepage";
import Footer from "../../components/Organism/footer/footer";
import Navbar from "../../components/Organism/navbar/navbar";

function App() {
    return (
        <div className="h-full flex flex-col bg-custom-blue">
            <div>
                <Navbar />
                <Homepage />
                <Footer />
            </div>
        </div>
    );
}

export default App;
