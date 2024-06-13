import React, { useState } from "react";
import FormGroup from "../../../../components/Organism/FormGroup/formGroup";
import Button from "../../../../components/Atoms/Actions/button/button";
import Useer from "../../../../assets/imagenes/iconos/useer.png";
import Mapa from "../../../../assets/imagenes/Lima.png";
import Modal from "../../../../components/Organism/modal/modal"; // Asegúrate de importar el componente Modal

const RegistroComprador: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [showModal, setShowModal] = useState(false);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
        scrollToTop();
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
        scrollToTop();
    };

    const handleTabChange = (page: number) => {
        setCurrentPage(page);
        scrollToTop();
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setShowModal(true);
        scrollToTop();
    };

    return (
        <form
            className="h-full p-4 flex flex-col mb-40"
            onSubmit={handleSubmit}
        >
            {showModal && (
                <Modal
                    id="my_modal_1"
                    title="¡REGISTRO EXITOSO!"
                    message="Sus datos y el de su emprendimiento se han registrado correctamente"
                    leftButtonText="Iniciar"
                    rightButtonText="Guía Rápida"
                />
            )}
            {currentPage === 1 && (
                <>
                    <h1 className="text-2xl font-bold text-yellow-400 text-center mb-4">
                        Datos personales:
                    </h1>
                    <div className="flex justify-center mb-4">
                        <div className="relative">
                            <img
                                src={Useer}
                                alt="Profile"
                                className="rounded-full h-32 w-32"
                            />
                            <div className="absolute bottom-0 right-0">
                                <button className="bg-white rounded-full p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-700"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <FormGroup
                            label=""
                            name="nombres"
                            placeholder="Nombres"
                        />
                        <FormGroup
                            label=""
                            name="apellidos"
                            placeholder="Apellidos"
                        />
                        <FormGroup label="" name="dni" placeholder="DNI" />
                    </div>
                    <div className="flex justify-center mt-4">
                        <Button
                            text="Siguiente"
                            width="auto"
                            type="button"
                            onClick={handleNextPage}
                        />
                    </div>
                    <div
                        role="tablist"
                        className="tabs tabs-bordered pt-8 flex justify-center"
                    >
                        <a
                            role="tab"
                            className={`tab ${
                                currentPage === 1 ? "tab-active" : ""
                            }`}
                            onClick={() => handleTabChange(1)}
                        >
                            1
                        </a>
                        <a
                            role="tab"
                            className={`tab ${
                                currentPage === 2 ? "tab-active" : ""
                            }`}
                            onClick={() => handleTabChange(2)}
                        >
                            2
                        </a>
                    </div>
                </>
            )}
            {currentPage === 2 && (
                <>
                    <h1 className="text-2xl font-bold text-yellow-400 text-center mb-4">
                        Información de contacto:
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormGroup
                            label=""
                            name="telefono"
                            placeholder="Teléfono"
                        />
                        <FormGroup
                            label=""
                            name="contrasena"
                            placeholder="Contraseña"
                            inputType="password"
                        />
                        <FormGroup
                            label=""
                            name="correoElectronico"
                            placeholder="Correo electrónico"
                            inputType="email"
                        />
                        <FormGroup
                            label=""
                            name="confirmarContrasena"
                            placeholder="Confirmar contraseña"
                            inputType="password"
                        />
                        <FormGroup
                            label=""
                            name="correoRecuperacion"
                            placeholder="Correo de recuperación"
                            inputType="email"
                        />
                        <FormGroup
                            label=""
                            name="direccion"
                            placeholder="Dirección"
                        />
                    </div>
                    <div className="flex justify-center mt-4">
                        <img
                            src={Mapa}
                            alt="Mapa"
                            className="w-full h-64 object-cover rounded-lg"
                        />
                    </div>
                    <div className="flex justify-center mt-4">
                        <Button text="Registrar" width="auto" type="submit" />
                    </div>
                    <div
                        role="tablist"
                        className="tabs tabs-bordered pt-8 flex justify-center"
                    >
                        <a
                            role="tab"
                            className={`tab ${
                                currentPage === 1 ? "tab-active" : ""
                            }`}
                            onClick={() => handleTabChange(1)}
                        >
                            1
                        </a>
                        <a
                            role="tab"
                            className={`tab ${
                                currentPage === 2 ? "tab-active" : ""
                            }`}
                            onClick={() => handleTabChange(2)}
                        >
                            2
                        </a>
                    </div>
                </>
            )}
        </form>
    );
};

export default RegistroComprador;
