import Dropdown from '../../Atoms/Actions/dropdown/dropdown';
import SearchInput from '../../Atoms/Input/search/search';
import Logo from '../../Atoms/Media/logo/logo';
import Imagen from '../../../assets/imagenes/Logo-Emprende-Conecta.png';

const dropdownItems = [
  { text: 'Inicia Sesión', link: '/login' },
  { text: 'Regístrate', link: '/preregistro' },
];

interface NavbarProps {
  searchValue: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Navbar: React.FC<NavbarProps> = ({ searchValue, onSearchChange }) => {
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
<<<<<<< HEAD
<<<<<<< HEAD
          <Dropdown buttonText="Inicia Sesión" items={['Inicia Sesión', 'Regístrate']} />
=======
          <Dropdown
            buttonText="Ingresa"
            items={[
              { label: 'Iniciar Sesión', onClick: () => window.location.href = '/login'},
              { label: 'Registrarse', onClick: () => window.location.href = '/preregistro' }
            ]}
          />
>>>>>>> 5c8b0cfb5a87dd715a79883b49ce2ece82b0809c
          <Logo src={Imagen} alt="Logo Right" size='w-10' />
      </div>
=======
      <Dropdown buttonText="Inicia Sesión" items={dropdownItems} />
      <Logo src={Imagen} alt="Logo Right" size='w-10' />
    </div>
>>>>>>> 387965c95a1be5809c1130a6879f2a602405ef93
  );
};

export default Navbar;
