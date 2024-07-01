import home from "../../../assets/imagenes/iconos/sidebarhome.png";
import carrito from "../../../assets/imagenes/iconos/sidebarshopcar.png";
import corazon from "../../../assets/imagenes/iconos/sidebarlike.png";
import user from "../../../assets/imagenes/iconos/sidebarprofile.png";
import campana from "../../../assets/imagenes/iconos/sidebarnotificaction.png";
import mensaje from "../../../assets/imagenes/iconos/sidebarmesage.png";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className='flex flex-col items-center gap-7 p-4 bg-[#BDD6E8]'>
      <Link to="/">
        <div className='w-10 h-10 flex justify-center items-center'>
          <img className="object-cover" src={home} alt='icono-home' />
        </div>
      </Link>
      <Link to="">
        <div className='w-10 h-10 flex justify-center items-center'>
          <img className="object-cover" src={carrito} alt='' />
        </div>
      </Link>
      <Link to="">
        <div className='w=10 h-10 flex justify-center items-center'>
          <img className="object-cover" src={corazon} alt='' />
        </div>
      </Link>
      <Link to="/perfilusuario">
        <div className='w-10 h-10 flex justify-center items-center'>
          <img className="object-cover" src={user} alt='' />
        </div>
      </Link>
      <Link to="">
        <div className='w-10 h-10 flex justify-center items-center'>
          <img className="object-cover" src={campana} alt='' />
        </div>
      </Link>
      <Link to="">
        <div className='w-10 h-10 flex justify-center items-center'>
          <img className="object-cover" src={mensaje} alt='' />
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
