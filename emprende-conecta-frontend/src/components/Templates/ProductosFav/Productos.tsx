import { useState } from "react";
import SearchInput from "../../Atoms/Input/search/search";
import { useEffect } from "react";
import {getProductsRequest} from '../../../api/products';

function Producto() {
    const [items, setItems] = useState<{ id: number, image: string; title: string; price: string; }[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await getProductsRequest();
            console.log(response)
    
            const BASE_URL = 'http://localhost:8000';
    
            const items = response.map((product) => ({
              id: product.id,
              image: `${BASE_URL}${product.image}`,
              title: product.name,
              store: 'Zapatería Pedro',
              price: `${product.price}`,
              quantity: 1,
            }));
            setItems(items);
    
          } catch (error) {
              console.error('Error fetching data:', error);
          }
        };
    
        fetchProducts();
      }, []);

    // const productos = [
    //     {
    //         id: 1,
    //         imagen:
    //             "https://oechsle.vteximg.com.br/arquivos/ids/17298402-1000-1000/imageUrl_1.jpg?v=638418759863570000",
    //         nombre: "Camisa estampada",
    //         precio: 25.99,
    //     },
    //     {
    //         id: 2,
    //         imagen: "https://i.ebayimg.com/images/g/7AEAAOSwhm9iNzkR/s-l500.jpg",
    //         nombre: "Zapatos deportivos",
    //         precio: 59.99,
    //     },
    //     {
    //         id: 3,
    //         imagen:
    //             "https://portape.vtexassets.com/arquivos/ids/162317/0000010496--1-.jpg?v=638089668629600000",
    //         nombre: "Mochila azul",
    //         precio: 35.99,
    //     },
    //     {
    //         id: 4,
    //         imagen:
    //             "https://promart.vteximg.com.br/arquivos/ids/7544937-1000-1000/image-caf1e09de32d46c292d97edd29f56bd7.jpg?v=638335007876000000",
    //         nombre: "Auriculares inalámbricos",
    //         precio: 89.99,
    //     },
    //     {
    //         id: 5,
    //         imagen:
    //             "https://promart.vteximg.com.br/arquivos/ids/7118854-1000-1000/image-526c21fcc2fc40c49ca858cbfb26954d.jpg?v=638223677021000000",
    //         nombre: "Reloj inteligente",
    //         precio: 199.99,
    //     },
    // ];
    return (
        <div className='flex gap-3 flex-wrap '>
            {items.map((producto) => (
                <div key={producto.id} className=' max-w-52 bg-[#0B3954]'>
                    <div className='w-52 h-52 rounded-2xl overflow-hidden'>
                        <img
                            src={producto.image}
                            alt={producto.title}
                            className='h-full w-full object-cover'
                        />
                    </div>
                    <div className='mt-2 '>
                        <h2 className='font-bold text-lg text-white'>{producto.title}</h2>
                        <p className='font-bold text-base text-white'>
                            S/.{producto.price}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

function VistaTienda() {
    const tiendas = [
        {
            id: 1,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ctjl3Hs1EdLvK_eyMDXUpsncTjOEIcZfsA&s",
            name: "La Casa del Café",
        },
        {
            id: 2,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSezhV9H1-AeiD_bLyGJKVSlF0gncY14c_x_w&s",
            name: "Tienda Verde",
        },
        {
            id: 3,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzIT1E7OI2m01P-PCmGzOgSCgW_ohV0nabNQ&s",
            name: "Moda Urbana",
        },
        {
            id: 4,
            image:
                "https://gestion.pe/resizer/rWPejMxYEMOz3qtTfkiIan8UEwQ=/1200x1200/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/XCPGF6QI6VDDNEHDSF7AE3YOWQ.JPG",
            name: "ElectroHogar",
        },
        {
            id: 5,
            image: "https://forbes.es/wp-content/uploads/2020/07/IMG_4001.jpg",
            name: "Libros & Más",
        },
    ];
    return (
        <div className='flex gap-3 flex-wrap bg-[#0B3954]'>
            {tiendas.map((tienda) => (
                <div key={tienda.id} className='max-w-52 bg-[#0B3954] '>
                    <div className='w-52 h-52 rounded-2xl overflow-hidden'>
                        <img
                            src={tienda.image}
                            alt={tienda.name}
                            className='h-full w-full object-cover'
                        />
                    </div>
                    <div className='mt-2'>
                        <h2 className='font-bold text-lg text-white'>{tienda.name}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
}

function FavoritesTemplate() {
    const [activeTab, setActiveTab] = useState("producto");
    const [word, setWord] = useState("");
    const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setWord(e.target.value);
    };
    return (
        <div className='bg-[#0B3954] flex-1'>
            <div className='container mx-auto max-w-2xl pt-10'>
                <h2 className=' text-center text-3xl mb-2 text-white font-semibold '>
                    Mis Favoritos
                </h2>

                <SearchInput placeholder='Buscar' value={word} onChange={handleText} />

                <div className='flex justify-center gap-4 my-4'>
                    <button
                        className={`px-4 py-2 rounded-md text-[#0B3954] font-semibold ${activeTab === "producto" ? "bg-[#E0FF4F] " : "bg-[#BDD6E8]"
                            }`}
                        onClick={() => setActiveTab("producto")}
                    >
                        Productos
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md text-[#0B3954] font-semibold ${activeTab === "vistaTienda" ? "bg-[#E0FF4F] " : "bg-[#BDD6E8]"
                            }`}
                        onClick={() => setActiveTab("vistaTienda")}
                    >
                        Tiendas
                    </button>
                </div>
                <div>
                    {activeTab === "producto" && <Producto />}
                    {activeTab === "vistaTienda" && <VistaTienda />}
                </div>
            </div>
        </div>
    );
}

export default FavoritesTemplate;
