import React, {useState} from 'react';
import Button from '../../Atoms/Actions/button/button';
import FormGroup from '../../Organism/formGroup/formGroup';
import Checkbox from '../../Atoms/Input/checkbox/Checkbox';
import Modal from '../../Organism/modal/modal';
import Avatar from '../../Atoms/DataDisplay/Avatar/Avatar';
import Mapa from '../../../assets/imagenes/Lima.png';
import Radio from '../../Atoms/Input/radio/Radio';

const RegistroVendedorForm: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    presentacion: '',
    categoria: '',
    ubicacion: '',
    whatsapp: '',
    nombres: '',
    apellidos: '',
    telefono: '',
  });

  const [showModal, setShowModal] = useState<boolean>(false);

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const [selected, setSelected] = useState<string>("horario1");

  const handleChange = (name: string) => {
    setSelected(name);
  };

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setShowModal(true);
    scrollToTop();
  };

  return (
    <form className="h-full p-4 flex flex-col mb-40" onSubmit={handleSubmit}>
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
          <div className="flex justify-center items-center">
              <h1 className="text-2xl font-bold text-custom-yellow mb-4 p-12 pb-4">Datos básicos</h1>
          </div>
          <div className="flex lg:flex-row md:flex-row flex-col lg:gap-24 md:gap-24 justify-center px-12 mb-12">
            <div className="flex flex-col gap-8 w-full max-w-80">
            <FormGroup 
                type='text'
                label="Nombre" 
                placeholder="Nombre del emprendimiento" 
                required 
                value={formData.nombre} 
                onChange={handleInputChange} 
                name="nombre" 
              />
              <FormGroup 
                label="Contacto" 
                type='email'
                placeholder="Correo electrónico" 
                required 
                value={formData.correo} 
                onChange={handleInputChange} 
                name="correo" 
              />
              <div className="form-control mb-4">
                <FormGroup 
                  label="Presentación" 
                  type='textarea'
                  placeholder="Lo mejor para tu negocio digital. Detalles que conectan" 
                  required 
                  value={formData.presentacion} 
                  onChange={handleInputChange} 
                  name="presentacion" 
                />
                <p className="text-sm text-custom-yellow pt-2">Describa de qué trata su emprendimiento</p>
              </div>
              <div className="mt-4"> {/* Asegúrate de agregar margen o padding según sea necesario */}
    <h3 className="text-lg font-bold text-white mb-2">Horario de atención</h3>
    <ul>
        <li className="flex items-center mb-2">
            <Radio
                radioType="radio-accent"
                isDisabled={false}
                isChecked={selected === "horario1"} // Ajusta según la lógica de selección
                size="radio-md"
                name="horario1"
                text="Horario no disponible. No mostrar el horario"
                marginRight="mr-2"
                onChange={() => handleChange("horario1")} // Define la función de manejo de cambios
            />
        </li>
        <li className="flex items-center mb-2">
            <Radio
                radioType="radio-accent"
                isDisabled={false}
                isChecked={selected === "horario2"} // Ajusta según la lógica de selección
                size="radio-md"
                name="horario2"
                text="Siempre abierto. El lugar está abierto las 24h"
                marginRight="mr-2"
                onChange={() => handleChange("horario2")} // Define la función de manejo de cambios
            />
        </li>
        <li className="flex items-center mb-2">
            <Radio
                radioType="radio-accent"
                isDisabled={false}
                isChecked={selected === "horario3"} // Ajusta según la lógica de selección
                size="radio-md"
                name="horario3"
                text="Horario habitual. Ingresa un horario específico"
                marginRight="mr-2"
                onChange={() => handleChange("horario3")} // Define la función de manejo de cambios
            />
        </li>
    </ul>
</div>
            </div>
            <div className="flex flex-col gap-8 w-full max-w-80">
              <FormGroup
                type='text'
                label="Categoría" 
                placeholder="Buscar categorías" 
                value={formData.categoria} 
                onChange={handleInputChange} 
                name="categoria" 
              />
              <FormGroup 
                type='text'
                label="Ubicación" 
                placeholder="Dirección del emprendimiento" 
                required 
                value={formData.ubicacion} 
                onChange={handleInputChange} 
                name="ubicacion" 
              />
              <img src={Mapa}></img>
              <FormGroup 
                type='text'
                label="Conecta WhatsApp" 
                placeholder="N° Celular" 
                required 
                value={formData.whatsapp} 
                onChange={handleInputChange} 
                name="whatsapp" 
              />
              <p className="text-sm text-custom-yellow">Te enviaremos un código por WhatsApp. Solo debes ingresar tu número de teléfono personal o el de tu emprendimiento.</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pt-12">
            <Button text="Siguiente" width="auto" onClick={handleNextPage} type="button"/>
            <div role="tablist" className="tabs tabs-bordered pt-8">
              <a role="tab" className={`tab ${currentPage === 1 ? 'tab-active' : ''}`} onClick={() => handleTabChange(1)}>1</a>
              <a role="tab" className={`tab ${currentPage === 2 ? 'tab-active' : ''}`} onClick={() => handleTabChange(2)}>2</a>
              <a role="tab" className={`tab ${currentPage === 3 ? 'tab-active' : ''}`} onClick={() => handleTabChange(3)}>3</a>
            </div>
          </div>
        </>
      )}
      {currentPage === 2 && (
        <>
          
          <div className="flex flex-col justify-center lg:mx-64 px-12 mb-12">
          <h1 className="text-2xl font-bold text-custom-yellow mb-4 pt-12">Personaliza tu emprendimiento</h1>
          <p className="text-white  pb-12">Usa tu logotipo y/o una imagen de portada que las personas puedan asociar fácilmente con tu emprendimiento.</p>
            <div className="avatar flex-col mb-24">
                <div className="w-full h-48 rounded">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
                <div className="absolute top-36 self-center">
                <Avatar 
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        alt="Foto de perfil emprendimiento"
                        size="w-32"
                    />
                </div>
            </div>
            <div className="flex flex-row justify-center gap-8">
                <div className="form-control flex-col ">
                    <h2 className="text-xl font-bold text-white text-center p-4">Métodos de Entrega</h2>
                    <label className="label cursor-pointer">
                    <span className="label-text p-4 text-white">Retiro en tienda</span>
                    <Checkbox checkboxType="checkbox-primary" size="checkbox-sm" />
                    </label>
                    <label className="label cursor-pointer">
                    <span className="label-text p-4 text-white">Despacho a domicilio</span>
                    <Checkbox checkboxType="checkbox-primary" size="checkbox-sm" />
                    </label>
                </div>   
                <div className='form-control flex-col mb-12'>
                    <h2 className="text-xl font-bold text-white text-center p-4">Medios de Pago</h2>
                    <label className="label cursor-pointer">
                    <span className="label-text p-4 text-white">Pago en efectivo</span>
                    <Checkbox checkboxType="checkbox-primary" size="checkbox-sm" />
                    </label>
                    <label className="label cursor-pointer">
                    <span className="label-text p-4 text-white">Pago con tarjeta</span>
                    <Checkbox checkboxType="checkbox-primary" size="checkbox-sm" />
                    </label>
                </div> 
            </div>
            <div className="flex flex-col items-center justify-center pt-12">
                <Button text="Siguiente" width="auto" onClick={handleNextPage} type="button"/>
                <div role="tablist" className="tabs tabs-bordered pt-8">
                <a role="tab" className={`tab ${currentPage === 1 ? 'tab-active' : ''}`} onClick={() => handleTabChange(1)}>1</a>
                <a role="tab" className={`tab ${currentPage === 2 ? 'tab-active' : ''}`} onClick={() => handleTabChange(2)}>2</a>
                <a role="tab" className={`tab ${currentPage === 3 ? 'tab-active' : ''}`} onClick={() => handleTabChange(3)}>3</a>
                </div>
            </div>
          </div>
        </>
      )}
      {currentPage === 3 && (
        <div className="flex flex-col lg:mx-64 px-12 mb-12">
         <div className="flex justify-center items-center">
              <h1 className="text-2xl font-bold text-custom-yellow mb-4 p-12  pb-4">Datos personales</h1>
          </div>
          <div className="self-center rounded-lg border-custom-yellow lg:ml-24 p-12 mb-24 w-96 flex flex-col justify-center items-center">
                <Avatar 
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    alt="Foto de perfil emprendimiento"
                    size="w-32"
                />
                <FormGroup
                    type='text' 
                    label="Nombres" 
                    placeholder="Nombres" 
                    size='lg'
                    required 
                    value={formData.nombres} 
                    onChange={handleInputChange} 
                    name="nombres" 
                />
                <FormGroup 
                    type='text'
                    label="Apellidos" 
                    size='lg'
                    placeholder="Apellidos" 
                    required 
                    value={formData.apellidos} 
                    onChange={handleInputChange} 
                    name="apellidos" 
                />
                <FormGroup 
                    label="Teléfono personal" 
                    type='tel'
                    size='lg'
                    placeholder="Teléfono personal" 
                    required 
                    value={formData.telefono} 
                    onChange={handleInputChange} 
                    name="telefono" 
                />
          
          <div className="flex flex-col items-center justify-center pt-12">
            <Button text="Registrar" width="auto" type="submit"/>
            <div role="tablist" className="tabs tabs-bordered pt-8">
              <a role="tab" className={`tab ${currentPage === 1 ? 'tab-active' : ''}`} onClick={() => handleTabChange(1)}>1</a>
              <a role="tab" className={`tab ${currentPage === 2 ? 'tab-active' : ''}`} onClick={() => handleTabChange(2)}>2</a>
              <a role="tab" className={`tab ${currentPage === 3 ? 'tab-active' : ''}`} onClick={() => handleTabChange(3)}>3</a>
            </div>
          </div>
        </div></div>
      )}
    </form>
  );
}

export default RegistroVendedorForm;