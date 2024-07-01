import Homepage from "../../components/Templates/Homepage/homepage";
import Footer from "../../components/Organism/footer/footer";
import Navbar from "../../components/Organism/navbar/navbar";
import { ChangeEvent } from "react";

function App() {
    return (
        <div className="h-full flex flex-col bg-custom-blue">
            <div>
                <Navbar searchValue="Busca productos en Emprende&Conecta" onSearchChange={function (e: ChangeEvent<HTMLInputElement>): void {
                    throw new Error("Function not implemented.");
                } } />
                <Homepage />
                <Footer />
            </div>
        </div>
    );
}

export default App;
