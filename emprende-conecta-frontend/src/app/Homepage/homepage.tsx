import Footer from "../../components/Organism/footer/footer";
import Navbar from "../../components/Organism/navbar/navbar";
import HomeTemplate from "../../components/Templates/Homepage/HomeTemplate";

function App() {
    return (
        <div className="h-full flex flex-col bg-custom-blue">
            <div>
                <Navbar />
                <HomeTemplate />
                <Footer />
            </div>
        </div>
    );
}

export default App;
