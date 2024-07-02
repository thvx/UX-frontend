import Button2 from "../../Atoms/Actions/button2/button2";
import Portada from "../../../assets/imagenes/Portada.png";
import CategoryAvatar from "../../Atoms/Actions/categoryavatar/categoryavatar";
import Banner from "../../../assets/imagenes/Banner-medio.jpg";
import Carousel from "../../Organism/carousel/carousel";
import { Link } from 'react-router-dom';

const HomeTemplate = () => {
    const items = [
        {
            image: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
            title: "Item 1",
            description: "Description for Item 1",
            badges: ["Badge 1", "Badge 2"],
            isNew: true,
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
            title: "Item 2",
            description: "Description for Item 2",
            badges: ["Badge 3", "Badge 4"],
            isNew: true,
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
    ];

    return (
        <>
            <div className="flex flex-col md:justify-center md:flex-row-reverse md:items-center p-5 ">
                <div className="flex  justify-center">
                    <img src={Portada}></img>
                </div>
                <div className="flex flex-col gap-6  ">
                    <div>
                        <p className="text-center leading-10">
                            <b className="text-white text-3xl sm:text-4xl">
                                Lleva tu negocio al mundo digital y{" "}
                            </b>
                            <br></br>
                            <b className="text-custom-yellow text-3xl sm:text-4xl">
                                Vende a todo el Perú
                            </b>
                        </p>
                    </div>
                    <div>
                        <p className="text-white text-lg  text-center md:text-start ">
                            <span>Sin comisiones. Digitaliza tu MYPE</span>
                            <br></br>
                            <span>
                                Sin tarifas. Crecimiento digital en Perú
                            </span>
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <Link to="/login">
                            <Button2
                                styles="max-w-56 rounded-lg"
                                variant="yellow"
                                text="¡Vamos!"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col  p-5 gap-16">
                <strong className="text-white text-center text-3xl sm:text-4xl">
                    Lo mejor para tu negocio digital
                </strong>
                <div className="flex flex-wrap gap-20 justify-center ">
                    <CategoryAvatar
                        imgSrc={"../src/assets/imagenes/salud.jpeg"}
                        title="Salud"
                    />
                    <CategoryAvatar
                        imgSrc={"../src/assets/imagenes/mascotas.jpg"}
                        title="Mascotas"
                    />
                    <CategoryAvatar
                        imgSrc={"../src/assets/imagenes/deportes.jpg"}
                        title="Deporte"
                    />
                    <CategoryAvatar
                        imgSrc={"../src/assets/imagenes/postres.jpg"}
                        title="Postres"
                    />
                </div>
            </div>
            <div className="flex flex-col  p-5 gap-16">
                <strong className="text-white text-center text-3xl sm:text-4xl">
                    Lo nuevo en Emprende Conecta
                </strong>
                <div>
                    <ul className="flex flex-row gap-20 justify-center mb-8">
                        <li className="p-4 last-of-type:border-none border-r-custom-blue border-r-1 text-custom-blue bg-custom-yellow ">
                            <strong>TODO</strong>
                        </li>
                        <li className="p-4 last-of-type:border-none border-r-custom-blue border-r-1  text-custom-blue  bg-custom-yellow">
                            <strong>DEPORTE</strong>
                        </li>
                        <li className="p-4 last-of-type:border-none border-r-custom-blue border-r-1  text-custom-blue  bg-custom-yellow">
                            <strong>COMIDAS</strong>
                        </li>
                    </ul>
                    <div>
                        <img src={Banner}></img>
                    </div>
                </div>
            </div>
            <div className="p-5">
                <Carousel items={items} />
            </div>
        </>
    );
};

export default HomeTemplate;
