import Pago from '../../components/Templates/Checkout/tipo-pago'
import Footer from '../../components/Organism/footer/footer';

const App: React.FC = () => {
  const stepsText = [
    'Visualización de Productos',
    'Confirmación de pago',
    'Entrega de voucher'
  ];

  const paymentOptions = [
    { img: '../../assets/imagenes/pago-tarjeta.png', type: 'Tarjetas de débito y crédito' },
    { img: '../../assets/imagenes/logo-pagoefectivo 1.png', type: 'Pago Efectivo' },
    { img: '../../assets/imagenes/pago-contraentrega.png', type: 'Pago Contraentrega' }
  ];

  return (
    <div className="app-container h-min-screen flex-grow bg-custom-blue flex flex-col">
        <main className="main-content flex flex-col m-8 px-8">
          <Pago
          stepsData={[{ stepsText: stepsText, numPages: 3, actualPage: 2 }]}
          paymentOptions={paymentOptions}  
          />
        </main>
      <Footer />
    </div>
  );
};

export default App;


