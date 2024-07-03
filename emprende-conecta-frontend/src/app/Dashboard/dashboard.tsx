import Sidebar from '../../components/Organism/Siderbar/Sidebar';
import Dashboard from '../../components/Templates/Dashboard/dashboard'
import Footer from '../../components/Organism/footer/footer';
import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
    interface TableResult {
        id: number;
        name: string;
        price: string;
        category: string;
    }
    
    interface CardData {
        image: string;
        title: string;
        description: string;
        badges: string[];
        isNew?: boolean;
        extraClasses?: string;
    }
    const [tableResults, setTableResults] = useState<TableResult[]>([]);
    const [cardsData, setCardsData] = useState<CardData[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulación de los datos obtenidos del backend
                const data = {
                    tableResults: [
                        { id: 1, name: 'Producto 1', price: '10$', category: 'Categoría 1' },
                        { id: 2, name: 'Producto 2', price: '20$', category: 'Categoría 2' },
                        { id: 3, name: 'Producto 3', price: '30$', category: 'Categoría 3'}
                        // otros productos
                    ],
                    cardsData: [
                        {
                          image: "https://cf.shopee.com.co/file/7e2257b27f594431ce9cebe8f6ae6214_tn",
                          title: "Producto 1",
                          description: "S/.230.00",
                          badges: ["Nuevo", "Popular"],
                          isNew: true,
                        },
                        {
                            image: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
                            title: "Producto 2",
                            description: "S/.230.00",
                            badges: ["Nuevo", "Popular"],
                            isNew: true,
                          },
                          {
                            image: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
                            title: "Producto 3",
                            description: "S/.140.00",
                            badges: ["Recomendado"],
                            isNew: false,
                          },
                          {
                            image: "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
                            title: "Item 3",
                            description: "Description for Item 3",
                            badges: ["Badge 5", "Badge 6"],
                            isNew: true,
                        },
                        {
                            image: "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
                            title: "Item 4",
                            description: "Description for Item 4",
                            badges: ["Badge 7", "Badge 8"],
                        },
                        {
                            image: "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
                            title: "Item 5",
                            description: "Description for Item 5",
                            badges: ["Badge 9", "Badge 10"],
                        },
                    ],
                };

                setTableResults(data.tableResults);
                setCardsData(data.cardsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

  return (
    <div className="app-container h-min-screen flex-grow bg-custom-blue flex flex-col">
      <div className="flex">
        <Sidebar />
        <main className="main-content ml-8 p-4">
          <Dashboard tableResults={tableResults} cardsData={cardsData} />
        </main>
      </div>
      <Footer />
    </div>
  );
};
export default App;