import ProductImage from "../../../assets/imagenes/zapatilla.png";
import Button2 from "../../Atoms/Actions/button2/button2";
import { RiShoppingCartFill } from "react-icons/ri";
import { BsSend } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductDetailsTemplate = () => {
    return (
        <div className="grid place-items-center bg-custom-blue h-dvh">
            <div className="flex flex-col   items-center ">
                <div className="max-w-5xl flex flex-col md:flex-row p-10 gap-10  items-center ">
                    <div className="max-w-72 w-full">
                        <img className="object-cover" src={ProductImage}></img>
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                        <strong className="uppercase text-center md:text-start text-lg text-white md:text-3xl">
                            Air Force One Shadow
                        </strong>
                        <p className="font-bold text-white md:text-2xl">
                            Descripción
                        </p>
                        <p className="md:text-lg text-white">
                            Este calzado de uso diario, que ofrece la comodidad
                            en la que has llegado a confiar, se adapta a las
                            necesidades de tu día a día a la vez que mantiene tu
                            atuendo a la moda con texturas ricas, líneas de
                            diseño elegantes y proporciones exageradas.
                        </p>
                    </div>
                </div>
                <div className=" flex flex-col md:flex-row w-full  gap-10  p-10 items-center">
                    <div className="flex  w-full gap-1 md:gap-10 items-center   flex-row justify-between">
                        <Link to="/perfil/negocio">
                            <Button2
                                styles="w-max md:w-full rounded-lg"
                                variant="yellow"
                                type="button"
                                text="Tienda"
                            />
                        </Link>
                        <Link to="/mensaje">
                            <Button2
                                styles="w-max md:w-full rounded-lg"
                                variant="yellow"
                                type="button"
                                icon={<BsSend />}
                                text="Ir al chat"
                            />
                        </Link>
                    </div>
                    <div className="flex w-full  md:gap-10 flex-row justify-between items-center">
                        <p className="text-white">
                            <b className="md:text-xl">Precio</b>
                            <br></br>
                            <span className="text-sm md:text-base">
                                S/.230.00
                            </span>
                        </p>
                        <Link to="/checkout">
                            <Button2
                                styles="w-max md:w-full rounded-lg"
                                variant="yellow"
                                type="button"
                                icon={<RiShoppingCartFill />}
                                text="Añadir al carrito"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsTemplate;
