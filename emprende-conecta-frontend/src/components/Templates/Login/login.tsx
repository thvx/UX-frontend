import Navbar from "../../Organism/navbar/navbar2"
import logoEmprende from "../../../assets/imagenes/Logo-Emprende-Conecta.png"
import InputText from "../../Atoms/Input/text/text"
import Button from "../../Atoms/Actions/button/button"
import Link from "../../Atoms/Navigation/link/link"
import Session from "../../Atoms/Actions/session/session"
import iconFacebook from "../../../assets/imagenes/iconos/fb.png"
import iconApple from "../../../assets/imagenes/iconos/apple.png"
import iconGoogle from "../../../assets/imagenes/iconos/google.png"

const Login = () => {
    return (
        <div className="bg-custom-blue h-full">
            <Navbar />
            <main className="w-full p-12 flex-col flex justify-center content-center">
                <div className="flex flex-col w-full lg:flex-row justify-center content-center px-8 mb-12">
                    <img src={logoEmprende} className="w-20 h-full" />
                </div>
                <div className="flex flex-col w-full lg:flex-row justify-center content-center px-8 mb-5">
                    <form className="w-full justify-center content-center">
                        <div className="mb-5 w-full flex justify-center content-center">
                            <InputText inputType="text" placeholder="Correo electrónico o teléfono" required={true} name="emailUser" />
                        </div>
                        <div className="mb-5 w-full flex justify-center content-center">
                            <InputText inputType="text" placeholder="Contraseña" required={true} name="passwordUser" />
                        </div>
                        <div className="mb-5 w-full flex justify-center content-center">
                            <Button text="Iniciar Sesión" width="half" />
                        </div>
                    </form>
                </div>
                <hr />
                <div className="w-full mt-10 flex flex-col justify-center content-center">
                    <Session logo={iconFacebook} network="Facebook" />
                    <Session logo={iconApple} network="Apple" />
                    <Session logo={iconGoogle} network="Google" />
                </div>
                <div className="w-full">
                    <div className="w-full flex justify-center content-center my-5">
                        <p className="mr-3"> ¿Aún no eres usuario? </p>
                        <Link title="Regístrate" />
                    </div>
                    <div className="w-full flex justify-center content-center">
                        <Link title="¿Olvidaste tu contraseña?" />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login