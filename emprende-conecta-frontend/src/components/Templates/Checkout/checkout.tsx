import React, { useState } from 'react';
import Steps from '../../Atoms/Navigation/steps/steps';
import CardAddProductos from "../../Atoms/DataDisplay/Card/CardAddProduct";
import Button from '../../Atoms/Actions/button/button';
import Radio from '../../Atoms/Input/radio/Radio';

interface CheckoutProps {
  stepsData: {
    stepsText: string[];
    numPages: number;
    actualPage: number;
  }[];
  productsData: {
    img: string;
    title: string;
    store: string;
    price: string;
    quantity: number;
  }[];
  deliveryOptions: {
    type: string;
    address: string;
    amount: string;
  }[];
  buttonData: {
    text: string;
  }[];
  onProductUpdate: (index: number, newQuantity: number) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ stepsData, productsData, deliveryOptions, buttonData, onProductUpdate }) => {
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const handleOptionChange = (index: number) => {
    setSelectedOption(index);
  };

  const parsePrice = (price: string) => {
    const parsed = parseFloat(price.replace('S/', ''));
    return isNaN(parsed) ? 0 : parsed;
  };

  const calculateTotal = () => {
    const productTotal = productsData.reduce((sum, product) => sum + parsePrice(product.price) * product.quantity, 0);
    const shippingCost = deliveryOptions.length > 0 ? parsePrice(deliveryOptions[selectedOption]?.amount || '0') : 0;
    return productTotal + shippingCost;
  };

  return (
        <main className="main-content flex flex-col">
          <Steps numPages={stepsData[0].numPages} actualPage={stepsData[0].actualPage} stepsText={stepsData[0].stepsText} />
          <div className="flex flex-row justify-center mt-8 gap-48">
            <div className="space-y-4">
                {productsData.map((product, index) => (
                <CardAddProductos
                    key={index}
                    image={product.img}
                    title={product.title}
                    store={product.store}
                    price={product.price}
                    initialQuantity={product.quantity}
                    onQuantityChange={(newQuantity) => {
                        onProductUpdate(index, newQuantity);
                    }}
                />
                ))}
            </div>
            <div className="flex flex-col space-y-2 gap-4">
                {deliveryOptions.map((option, index) => (
                    <div key={index} className="bg-custom-lightgrey text-custom-blue py-4 px-8 flex items-center rounded-2xl">
                    <Radio
                        size="radio-md"
                        name="deliveryOption"
                        text=" "
                        isChecked={selectedOption === index}
                        marginRight="mr-2"
                        onChange={() => handleOptionChange(index)}
                    />
                  <div className="flex flex-col ml-2">
                    <div className="font-bold">{option.type}</div>
                    <div>En {option.address}</div>
                    <div>{option.amount}</div>
                  </div>
                </div>
              ))}
              <div className="text-white p-4">
                <p className="pb-2">Total del Pedido: S/ {productsData.reduce((sum, product) => sum + parsePrice(product.price) * product.quantity, 0).toFixed(2)}</p>
                <p className="pb-2">Costo de Envío: {deliveryOptions[selectedOption]?.amount || '0'}</p>
                <p>Total a Pagar: S/ {calculateTotal().toFixed(2)}</p>
              </div>
              <Button text={buttonData[0].text} width='auto' type='button' />
            </div>
          </div>
        </main>
  );
};

export default Checkout;
