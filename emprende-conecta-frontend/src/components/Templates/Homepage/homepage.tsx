import Button from '../../Atoms/Actions/button/button';
import Avatar from '../../Atoms/Media/Avatar/avatar';
import Carousel from '../../Organism/carousel/carousel';
import ImagenPortada from '../../../assets/imagenes/Portada.png';
import BannerMedio from '../../../assets/imagenes/Banner-medio.jpg';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const items = [
        {
          image: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
          title: "Item 1",
          description: "Description for Item 1",
          badges: ["Badge 1", "Badge 2"],
          isNew: true
        },
        {
          image: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
          title: "Item 2",
          description: "Description for Item 2",
          badges: ["Badge 3", "Badge 4"],
          isNew: true
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
            title: "Item 3",
            description: "Description for Item 3",
            badges: ["Badge 5", "Badge 6"],
            isNew: true
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
            title: "Item 4",
            description: "Description for Item 4",
            badges: ["Badge 7", "Badge 8"]
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
            title: "Item 5",
            description: "Description for Item 5",
            badges: ["Badge 9", "Badge 10"]
        }
      ];

      
  return (
    <div className="flex flex-col justify-center w-full p-12">
        <div className="flex flex-col w-full lg:flex-row justify-center content-center px-8 mb-12">
            <aside className="text-container content-center">
                <h1 className="text-3xl font-bold text-center text-white mb-4">Lleva tu negocio al mundo digital y</h1>
                <h1 className="text-3xl font-bold text-center text-custom-yellow mb-8">Vende a todo el Perú</h1>
                <p className="text-xl text-white p-2">Sin comisiones. Digitaliza tu MYPE</p>
                <p className="text-xl text-white p-2 pb-8">Sin tarifas. Crecimiento digital en Perú</p>
                <Link to="/preregistro">
                  <Button text="Vamos" width="half" type="button" />
                </Link>
                
            </aside>
            <aside className="image-container">
                <img src={ImagenPortada} alt="Homepage" />
            </aside>
        </div>
    
        <h2 className="text-3xl font-bold text-center text-white mb-8">Lo mejor para tu negocio digital</h2>
        <div className="flex flex-col flex-wrap sm:gap-12 lg:flex-row mx-64 justify-around mb-12">
          <div className="category">
            <Avatar
            src="../src/assets/imagenes/salud.jpeg"
            alt="Salud"
            size="w-32"
            />
            <p className="p-2 text-center rounded-lg bg-custom-darkblue text-white text-bold">Salud</p>
          </div>
          <div className="category">
            <Avatar
                src="../src/assets/imagenes/mascotas.jpg"
                alt="Mascotas"
                size="w-32"
                />
            <p className="p-2 text-center rounded-lg bg-custom-darkblue text-white text-bold">Mascotas</p>
          </div>
          <div className="category">
            <Avatar
                src="../src/assets/imagenes/deportes.jpg"
                alt="Deporte"
                size="w-32"
                />
            <p className="p-2 text-center rounded-lg bg-custom-darkblue text-white text-bold">Deporte</p>
          </div>
          <div className="category">
            <Avatar
                src="../src/assets/imagenes/postres.jpg"
                alt="Postres"
                size="w-32"
                />
            <p className="p-2 text-center rounded-lg bg-custom-darkblue text-white text-bold">Postres</p>
          </div>
        </div>

        <div className="mb-24">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Lo nuevo en Emprende Conecta</h2>
            <div className="flex row gap-24 justify-center mb-12">
              <p className="text-xl text-custom-yellow">TODO</p>
              <p className="text-xl text-white">DEPORTE</p>
              <p className="text-xl text-white">COMIDAS</p>
            </div>
            <img src={BannerMedio} alt="Banner" className="w-full" />
        </div>
        <Carousel items={items} />
    </div>
  );
};

export default HomePage;
