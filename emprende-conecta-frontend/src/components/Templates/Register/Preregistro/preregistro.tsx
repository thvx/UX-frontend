import { Link } from 'react-router-dom';
import Card from '../../../Atoms/Data Display/card/card';
import Comprador from '../../../../assets/imagenes/comprador.jpg';
import Vendedor from '../../../../assets/imagenes/vendedor.jpg';

const Preregistro = () => {
    return (
        <div className="flex flex-col bg-custom-blue">
            <h1 className="text-3xl font-bold text-center text-white m-12 pt-12">¿Quién Soy?</h1>
            <div className="flex justify-center content-around sm:flex-col md:flex-col lg:flex-row flex-wrap gap-12 m-12">
                <Link to="/registro/comprador">
                    <Card 
                        image={Comprador}
                        title="Comprador"
                        description="Compra productos de diferentes emprendimientos en un solo lugar"
                        badges={[]}
                        isNew={false}
                        extraClasses='bg-custom-yellow text-custom-blue max-h-80  '
                    />
                </Link>
                <Link to="/registro/vendedor">
                    <Card 
                        image={Vendedor}
                        title="Vendedor"
                        description="Vende tus productos en nuestra plataforma"
                        badges={[]}
                        isNew={false}
                        extraClasses='bg-custom-yellow text-custom-blue max-h-80 '
                    />
                </Link>
            </div>
        </div>
    );
};

export default Preregistro;