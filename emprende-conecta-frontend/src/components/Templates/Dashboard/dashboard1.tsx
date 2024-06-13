import { useState } from "react";
import SearchInput from "../../Atoms/Input/search/search";
import Card from "../../Atoms/Data Display/card/card";
import Menu from "../../Atoms/Navigation/menu/menu";

export const Dashboard1 = () => {
  const [searchValue, setSearchValue] = useState('');

  const menuItems = [
    {
      title: "",
      iconLink: "http://www.w3.org/2000/svg",
      d: "M4 6h16M4 12h16M4 18h16",
    },
    {
      title: "",
      iconLink: "http://www.w3.org/2000/svg",
      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    },
    {
      title: "",
      iconLink: "http://www.w3.org/2000/svg",
      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    },
    {
      title: "",
      iconLink: "http://www.w3.org/2000/svg",
      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    },
    {
      title: "",
      iconLink: "http://www.w3.org/2000/svg",
      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    },
    
    // Agrega más elementos del menú según sea necesario
  ];

  const cardsData = [
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
    },
    // Agrega más objetos de datos de tarjetas aquí según sea necesario
  ];
  return (
    <div className="flex h-screen">
    {/* Menú lateral */}
    <div className="w-20 bg-custom-lightblue">
      <Menu items={menuItems} />
    </div>
    {/* Contenido principal */}
    <div className="flex flex-col items-center justify-center flex-1 bg-custom-blue">
      <div className="text-center mb-14">
        <h1 className="text-3xl font-bold text-white">Emprende & Conecta</h1>
      </div>
      <div className="flex justify-center mb-8 w-full px-8">
        <SearchInput
          placeholder="Buscar producto"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="w-full px-8">
        <p className="text-3xl font-bold text-white mb-4">Resultados</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {cardsData.map((card, index) => (
          <Card 
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            badges={card.badges}
            isNew={card.isNew}
            extraClasses="max-w-xs"
          />
        ))}
      </div>
    </div>
  </div>
  );
};