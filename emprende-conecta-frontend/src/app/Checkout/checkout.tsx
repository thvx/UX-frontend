import Checkout from '../../components/Templates/Checkout/checkout';
import Footer from '../../components/Organism/footer/footer';
import React, {useEffect, useState} from 'react';

const App: React.FC = () => {
  const [products, setProducts] = useState<{ img: string; title: string; store: string; price: string; quantity: number; }[]>([]);
  const [deliveryOptions, setDeliveryOptions] = useState<{ type: string; address: string; amount: string; }[]>([]);

  useEffect(() => {
    // Simula una llamada al backend para obtener los productos
    const fetchProducts = async () => {
      const productData = [
        { img: 'https://via.placeholder.com/150', title: 'Producto 1', store: 'Tienda 1', price: 'S/ 100.00', quantity: 1 },
        { img: 'https://via.placeholder.com/150', title: 'Producto 2', store: 'Tienda 2', price: 'S/ 200.00', quantity: 2 },
        { img: 'https://via.placeholder.com/150', title: 'Producto 3', store: 'Tienda 3', price: 'S/ 300.00', quantity: 3 }
      ];
      setProducts(productData);
      
      const deliveryData = [
        { type: 'Retiro en Tienda', address: 'Tienda X', amount: 'Gratis' },
        { type: 'Despacho a Domicilio', address: 'Av. Siempre Viva 742', amount: '5.00' }
      ];
      setDeliveryOptions(deliveryData);
    };

    fetchProducts();
  }, []);

  const handleProductUpdate = (index: number, newQuantity: number) => {
    setProducts(prevProducts =>
      prevProducts.map((product, i) =>
        i === index ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  const stepsText = [
    'Visualización de Productos',
    'Confirmación de pago',
    'Entrega de voucher'
  ];

  return (
      <div className="app-container h-min-screen flex-grow bg-custom-blue flex flex-col">
          <main className="main-content flex flex-col m-8 px-8">
            <Checkout
              stepsData={[{ stepsText: stepsText, numPages: 3, actualPage: 1 }]}
              productsData={products}
              deliveryOptions={deliveryOptions}
              buttonData={[{ text: 'Siguiente' }]}
              onProductUpdate={handleProductUpdate}
            />
          </main>
        <Footer />
      </div>
  );
};

export default App;