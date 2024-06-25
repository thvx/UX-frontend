import Footer from '../../components/Organism/footer/footer';
import React, { useState, useEffect } from 'react';
import Header from '../../components/Organism/header/header';
import Checkout from '../../components/Templates/Checkout/checkout';
const App: React.FC = () => {
    const stepsText = ['Visualización de Productos', 'Identificación', 'Confirmación de pago', 'Entrega de voucher']

  return (
    <div className="app-container h-min-screen flex-grow bg-custom-blue flex flex-col">
        <Header />
      <div className="flex flex-1">
        <main className="main-content flex-1 ml-8 p-4">
            <Checkout stepsData={[{stepsText: stepsText, numPages: 4, actualPage: 1}]} productsData={[{img: 'https://via.placeholder.com/150', title: 'Producto 1', store: 'Tienda 1', price: 'S/ 100.00', quantity: 1}]} buttonData={[{text: 'Pagar'}]} />
        </main>
      </div>
      <Footer />
    </div>
  );
};
export default App;