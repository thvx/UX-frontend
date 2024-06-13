import Dropdown from '../../Atoms/Actions/dropdown/dropdown';
import SearchInput from '../../Atoms/Input/search/search';
import Logo from '../../Atoms/Media/logo/logo';
import Imagen from '../../../assets/imagenes/Logo-Emprende-Conecta.png';

interface NavbarProps {
  searchValue: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Navbar: React.FC<NavbarProps> = ({searchValue, onSearchChange }) => {
  return (
    <div className="navbar justify-center px-12 gap-12 ">
      <div className="flex-1 gap-12">
        <Logo src={Imagen} alt="Logo Left" size="w-16" />
        <SearchInput
          placeholder="Buscar en Emprende&Conecta"
          value={searchValue}
          onChange={onSearchChange}
        />
      </div>
          <Dropdown
            buttonText="Ingresa"
            items={[
              { label: 'Iniciar Sesión', onClick: () => window.location.href = '/login'},
              { label: 'Registrarse', onClick: () => window.location.href = '/preregistro' }
            ]}
          />
          <Logo src={Imagen} alt="Logo Right" size='w-10' />
      </div>
  );
};

export default Navbar;
