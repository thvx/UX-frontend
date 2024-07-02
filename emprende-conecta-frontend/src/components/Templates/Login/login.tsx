import logoEmprende from "../../../assets/imagenes/Logo-Emprende-Conecta.png";
import InputText from "../../Atoms/Input/text/text";
import Button from "../../Atoms/Actions/button/button";
import Session from "../../Atoms/Actions/session/session";
import iconFacebook from "../../../assets/imagenes/iconos/fb.png";
import iconApple from "../../../assets/imagenes/iconos/apple.png";
import iconGoogle from "../../../assets/imagenes/iconos/google.png";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="bg-custom-blue min-h-screen flex flex-col">
            <main className="flex flex-col items-center justify-center flex-1 p-6">
                <div className="flex flex-col items-center justify-center w-full max-w-md">
                    <img
                        src={logoEmprende}
                        className="w-32 h-auto mb-8"
                        alt="Logo Emprende Conecta"
                    />
                    <form className="w-full space-y-4">
                        <InputText
                            inputType="text"
                            placeholder="Correo electrónico o teléfono"
                            required={true}
                            name="emailUser"
                            extraClasses="w-full"
                        />
                        <InputText
                            inputType="password"
                            placeholder="Contraseña"
                            required={true}
                            name="passwordUser"
                            extraClasses="w-full"
                        />    
                        <div className="mt-6">
                            <Link to="/dashboard">
                                <Button text="Iniciar Sesión" width="full" />
                            </Link>
                        </div>
                    </form>
                    <hr className="w-full my-6 border-t border-gray-200" />
                    <div className="w-full space-y-4">
                        <Session
                            logo={iconFacebook}
                            network="Facebook"
                            extraClasses="w-full"
                        />
                        <Session
                            logo={iconApple}
                            network="Apple"
                            extraClasses="w-full"
                        />
                        <Session
                            logo={iconGoogle}
                            network="Google"
                            extraClasses="w-full"
                        />
                    </div>
                    <div className="flex flex-col items-center mt-6 space-y-2">
                        <p className="text-white">
                            ¿Aún no eres usuario? <Link to="/preregistro">Regístrate </Link>
                        </p>
                        <Link to="/login">¿Olvidaste tu contraseña? </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;
