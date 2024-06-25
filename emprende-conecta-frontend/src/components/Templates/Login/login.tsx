import logoEmprende from "../../../assets/imagenes/Logo-Emprende-Conecta.png";
import InputText from "../../Atoms/Input/text/text";
import Button from "../../Atoms/Actions/button/button";
import Link from "../../Atoms/Navigation/link/link";
import Session from "../../Atoms/Actions/session/session";
import iconFacebook from "../../../assets/imagenes/iconos/fb.png";
import iconApple from "../../../assets/imagenes/iconos/apple.png";
import iconGoogle from "../../../assets/imagenes/iconos/google.png";

const Login = () => {
    return (
        <div className="bg-custom-blue min-h-screen flex flex-col">
            <main className="flex flex-col items-center justify-center flex-1 p-6">
                <div className="flex flex-col items-center justify-center w-full max-w-md">
                    <img
                        src={logoEmprende}
                        className="w-32 h-auto mb-8" // Ajustar el tamaño aquí
                        alt="Logo Emprende Conecta"
                    />
                    <form className="w-full space-y-4">
                        <InputText
                            inputType="text"
                            placeholder="Correo electrónico o teléfono"
                            required={true}
                            name="emailUser"
                            extraClasses="w-full" // Aplica la clase w-full
                        />
                        <InputText
                            inputType="password"
                            placeholder="Contraseña"
                            required={true}
                            name="passwordUser"
                            extraClasses="w-full" // Aplica la clase w-full
                        />
                        <Button text="Iniciar Sesión" width="full" />{" "}
                        {/* Cambiar a full */}
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
                            ¿Aún no eres usuario? <Link title="Regístrate" />
                        </p>
                        <Link title="¿Olvidaste tu contraseña?" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;
