import Menu from "../../Atoms/Navigation/menu/menu";
import Button from "../../Atoms/Actions/button/button";
import zapatillaJordan from "../../../assets/imagenes/zapatilla_jordan.jpg"
import zapatillaRoja from "../../../assets/imagenes/zapatilla_jordan.jpg"
import logoCordillera from "../../../assets/imagenes/Logo-cordillera-blanco.png"

const Dashboard3 = () => {
    const menuItems1 = [
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

    const menuItems2 = [
        {
            title: "Zapatería",
            iconLink: "",
            d: ""
        },
        {
            title: "Envíos a todo el país",
            iconLink: "",
            d: ""
        },
        {
            title: "Aquí no hay réplicas",
            iconLink: "",
            d: ""
        },
        {
            title: "Todo en stock",
            iconLink: "",
            d: ""
        },
        {
            title: "@Klyn",
            iconLink: "",
            d: ""
        },
        {
            title: "@Klyn",
            iconLink: "",
            d: ""
        },
        {
            title: "920145238",
            iconLink: "",
            d: ""
        },
    ]

    return (
        <div className="flex h-screen">
            <div className="w-20 bg-custom-lightblue">
                <Menu items={menuItems1} />
            </div>
            <div className="flex flex-col justify-center items-center flex-1 bg-custom-blue">
                <div className="w-1/3 mb-10">
                    <img className="w-full" src={logoCordillera} />
                </div>
                <div className="flex w-full justify-center content-center">
                    <div>

                    </div>
                    <div className="flex flex-col justify-center text-center w-auto">
                        <h2 className="text-white font-bold text-2xl"> KLYN </h2>
                        <Menu items={menuItems2}/>
                    </div>
                    <div className="mx-5 w-1/4">
                        <div className="flex gap-3 mb-5">
                            <Button text="Seguir" width="auto" />
                            <Button text="Mensaje" width="auto" />
                        </div>
                        <div className="flex-1 gap-3 flex w-auto">
                            <img className="w-2/3" src={zapatillaJordan} />
                            <img className="w-2/3" src={zapatillaRoja} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard3