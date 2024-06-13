import Logo from "../../Atoms/Media/logo/logo";
import Menu from "../../Atoms/Navigation/menu/menu";
import LogoProducto from "../../../assets/imagenes/zapatilla.png"
import Button from "../../Atoms/Actions/button/button";

export const Dashboard2 = () => {
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
      ];

    return (
        <div className="flex h-screen">
        <div className="w-20 bg-custom-lightblue">
            <Menu items={menuItems} />
        </div>
        <div className="flex flex-col justify-center items-center flex-1 bg-custom-blue">
            <div className="flex items-center">
                <Logo src={LogoProducto} alt='Producto' size="w-90" />
                <div className="ml-8 max-w-80">
                    <h2 className="text-xl font-bold text-white">AIR FORCE ONE SHADOW</h2>
                    <h2 className="text-xl mt-20 font-bold text-white">Descripción</h2>
                    <p className="text-white mt-10">Este calzado de uso diario, que ofrece la comodidad en la que has llegado a confiar, se adapta a las necesidades de tu día a día a la vez que mantiene tu atuendo a la moda con texturas ricas, líneas de diseño elegantes y proporciones exageradas.</p>
                </div>
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-bold text-white">Precio: S/.230</h2>
            </div>
            <div className="flex mt-4">
                <Button text="Tienda" width="auto" />
                <div className="mx-4"></div> 
                <Button text="Añadir Carrito" width="auto" />
            </div>
        </div>
    </div>
    );
};