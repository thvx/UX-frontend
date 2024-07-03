import Checkout from '../../components/Templates/Checkout/checkout';
import Footer from '../../components/Organism/footer/footer';
import React, {useEffect, useState} from 'react';
import Sidebar from '../../components/Organism/Siderbar/Sidebar';

const App: React.FC = () => {
  const [products, setProducts] = useState<{ img: string; title: string; store: string; price: string; quantity: number; }[]>([]);
  const [deliveryOptions, setDeliveryOptions] = useState<{ type: string; address: string; amount: string; }[]>([]);

  useEffect(() => {
    // Simula una llamada al backend para obtener los productos
    const fetchProducts = async () => {
      const productData = [
        { img: 'https://falabella.scene7.com/is/image/FalabellaPE/gsc_125437823_4308770_1?wid=800&hei=800&qlt=70', title: 'Zapatillas Deportivas', store: 'Zapatería Pedro', price: 'S/ 259.90', quantity: 1 },
        { img: 'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg', title: 'Cono de Helado', store: 'Heladería Pedrito', price: 'S/ 20.00', quantity: 2 },
        { img: 'https://promart.vteximg.com.br/arquivos/ids/7118854-1000-1000/image-526c21fcc2fc40c49ca858cbfb26954d.jpg?v=638223677021000000', title: 'Reloj Inteligente', store: 'Compucentro', price: 'S/ 99.90', quantity: 3 }
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
      <div className="app-container h-min-screen bg-custom-blue flex flex-row">
        <Sidebar />
          <div className="flex flex-col justify-center flex-grow">
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
      </div>
  );
};

export default App;