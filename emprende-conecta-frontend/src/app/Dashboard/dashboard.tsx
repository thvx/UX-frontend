import Menu from '../../components/Atoms/Navigation/menu/menu';
import Dashboard from '../../components/Templates/Dashboard/dashboard'
import Footer from '../../components/Organism/footer/footer';
import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
    const menuData = [
        {
          title: 'Inicio',
          iconLink: 'http://www.w3.org/2000/svg',
          d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
        },
        {
          title: 'Carrito de Compras',
          iconLink: 'http://www.w3.org/2000/svg',
          d: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        },
        {
          title: 'Favoritos',
          iconLink: 'http://www.w3.org/2000/svg',
          d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
        },
        {
          title: 'Perfil',
          iconLink: 'http://www.w3.org/2000/svg',
          d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
        },
        {
          title: 'Notificaciones',
          iconLink: 'http://www.w3.org/2000/svg',
          d: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        },
        {
          title: 'Mensajes',
          iconLink: 'http://www.w3.org/2000/svg',
          d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
        },
      ]
    
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
                            image: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
                            title: "Producto 1",
                            description: "S/.230.00",
                            badges: ["Nuevo", "Popular"],
                            isNew: true,
                          },
                          {
                            image: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
                            title: "Producto 2",
                            description: "S/.140.00",
                            badges: ["Recomendado"],
                            isNew: false,
                          },
                          {
                            image: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
                            title: "Producto 2",
                            description: "S/.140.00",
                            badges: ["Recomendado"],
                            isNew: false,
                          },
                          {
                            image: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
                            title: "Producto 2",
                            description: "S/.140.00",
                            badges: ["Recomendado"],
                            isNew: false,
                          },
                          {
                            image: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
                            title: "Producto 2",
                            description: "S/.140.00",
                            badges: ["Recomendado"],
                            isNew: false,
                          },// otras tarjetas
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
      <div className="flex flex-1">
        <aside className="fixed top-16 left-0 h-full z-20">
          <Menu items={menuData} />
        </aside>
        <main className="main-content flex-1 ml-8 p-4">
          <Dashboard tableResults={tableResults} cardsData={cardsData} />
        </main>
      </div>
      <Footer />
    </div>
  );
};
export default App;