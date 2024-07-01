import Homepage from "../../components/Templates/Homepage/homepage";
import Footer from "../../components/Organism/footer/footer";
import Navbar from "../../components/Organism/navbar/navbar";
import { ChangeEvent, useState } from 'react';

function App() {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    return (
        <div className="h-full flex flex-col bg-custom-blue">
            <div>
                <Navbar 
                    searchValue={searchValue} 
                    onSearchChange={handleSearchChange}
                />
                <Homepage />
                <Footer />
            </div>
        </div>
    );
}

export default App;