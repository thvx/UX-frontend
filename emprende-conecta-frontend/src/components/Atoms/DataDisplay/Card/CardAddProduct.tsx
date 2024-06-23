import React, { useState } from 'react';

type CardProductosProps = { 
    image: string;
    title: string;
    store: string;
    price: string;
    initialQuantity: number;
    extraClasses?: string;
};


const CardProductos: React.FC<CardProductosProps> = ({ image, title, store, price, initialQuantity, extraClasses }) => {
    const [quantity, setQuantity] = useState(initialQuantity);

    const increaseQuantity = () => setQuantity(prevQuantity => prevQuantity + 1);
    const decreaseQuantity = () => setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
    
    return (
        <div className={`card max-w-72 bg-custom-lightgrey shadow-xl flex flex-row ${extraClasses}`}>
        <div className="w-1/3 content-center ml-4">
          <figure><img src={image} alt={title} className="w-full h-full object-cover" /></figure>
        </div>
        <div className="card-body text-custom-blue p-4">
          <h2 className="card-title text-custom-blue font-bold text-xl">
            {title}
          </h2>
          <p>{store}</p>
          <p>{price}</p>
          <div className="card-actions flex justify-end items-center">
            <button onClick={decreaseQuantity} className="btn bg-custom-yellow border-none text-custom-blue">-</button>
            <span className="mx-2">{quantity}</span>
            <button onClick={increaseQuantity} className="btn bg-custom-yellow border-none text-custom-blue">+</button>
          </div>
        </div>
      </div>
    );
  };

export default CardProductos;