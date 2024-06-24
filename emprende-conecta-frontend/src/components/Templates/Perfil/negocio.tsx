import Menu from "../../Atoms/Navigation/menu/menu";
import Button from "../../Atoms/Actions/button/button";
import zapatillaJordan from "../../../assets/imagenes/zapatilla_jordan.jpg"
import zapatillaRoja from "../../../assets/imagenes/zapatilla_roja.jpg"
import logoCordillera from "../../../assets/imagenes/Logo-cordillera-blanco.png"
import banner from "../../../assets/imagenes/vendedor.jpg"

const PerfilNegocio = () => {
    const menuItems1 = [
        {
          title: 'Inicio',
          iconLink: 'http://www.w3.org/2000/svg',
          d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
        },
        {
          title: 'Carrito de Compras',
          iconLink: 'http://www.w3.org/2000/svg',
          d: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        },
        {
          title: 'Favoritos',
          iconLink: 'http://www.w3.org/2000/svg',
          d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
        },
        {
          title: 'Perfil',
          iconLink: 'http://www.w3.org/2000/svg',
          d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
        },
        {
          title: 'Notificaciones',
          iconLink: 'http://www.w3.org/2000/svg',
          d: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        },
        {
          title: 'Mensajes',
          iconLink: 'http://www.w3.org/2000/svg',
          d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
        },
      ]

    const menuItems2 = [
        {
            title: "Zapatería",
            iconLink: "http://www.w3.org/2000/svg",
            d: "",
        },
        {
            title: "Envíos a todo el país",
            iconLink: "http://www.w3.org/2000/svg",
            d: "M18.5 18C18.5 19.1046 17.6046 20 16.5 20C15.3954 20 14.5 19.1046 14.5 18M18.5 18C18.5 16.8954 17.6046 16 16.5 16C15.3954 16 14.5 16.8954 14.5 18M18.5 18H21.5M14.5 18H13.5M8.5 18C8.5 19.1046 7.60457 20 6.5 20C5.39543 20 4.5 19.1046 4.5 18M8.5 18C8.5 16.8954 7.60457 16 6.5 16C5.39543 16 4.5 16.8954 4.5 18M8.5 18H13.5M4.5 18C3.39543 18 2.5 17.1046 2.5 16V7.2C2.5 6.0799 2.5 5.51984 2.71799 5.09202C2.90973 4.71569 3.21569 4.40973 3.59202 4.21799C4.01984 4 4.5799 4 5.7 4H10.3C11.4201 4 11.9802 4 12.408 4.21799C12.7843 4.40973 13.0903 4.71569 13.282 5.09202C13.5 5.51984 13.5 6.0799 13.5 7.2V18M13.5 18V8H17.5L20.5 12M20.5 12V18M20.5 12H13.5"
        },
        {
            title: "Aquí no hay réplicas",
            iconLink: "http://www.w3.org/2000/svg",
            d: "M22.332 37.353c10.3 0 18.678-8.378 18.678-18.678S32.632 0 22.332 0C12.032 0 3.654 8.378 3.654 18.678 C3.654 28.978 12.032 37.353 22.332 37.353z M22.332 98.256c10.3 0 18.678-8.379 18.678-18.678c0-10.301-8.378-18.676-18.678-18.676 c-10.3 0-18.678 8.379-18.678 18.678C3.654 89.881 12.032 98.256 22.332 98.256z M75.928 0.001c-10.301 0-18.679 8.377-18.679 18.677c0 10.3 8.378 18.678 18.679 18.678 c10.299 0 18.676-8.378 18.676-18.678C94.604 8.378,86.227 0.001 75.928 0.001z M94.604 79.58c0-10.299-8.377-18.678-18.678-18.678c-10.3 0-18.678 8.379-18.678 18.678 c0 10.301 8.378 18.678 18.678 18.678C86.227 98.258 94.604 89.877 94.604 79.58z",
        },
        {
            title: "Todo en stock",
            iconLink: "http://www.w3.org/2000/svg",
            d: "M22.332 37.353c10.3 0 18.678-8.378 18.678-18.678S32.632 0 22.332 0C12.032 0 3.654 8.378 3.654 18.678 C3.654 28.978 12.032 37.353 22.332 37.353z M22.332 98.256c10.3 0 18.678-8.379 18.678-18.678c0-10.301-8.378-18.676-18.678-18.676 c-10.3 0-18.678 8.379-18.678 18.678C3.654 89.881 12.032 98.256 22.332 98.256z M75.928 0.001c-10.301 0-18.679 8.377-18.679 18.677c0 10.3 8.378 18.678 18.679 18.678 c10.299 0 18.676-8.378 18.676-18.678C94.604 8.378,86.227 0.001 75.928 0.001z M94.604 79.58c0-10.299-8.377-18.678-18.678-18.678c-10.3 0-18.678 8.379-18.678 18.678 c0 10.301 8.378 18.678 18.678 18.678C86.227 98.258 94.604 89.877 94.604 79.58z"
        },
        {
            title: "@Klyn",
            iconLink: "http://www.w3.org/2000/svg",
            d: "M22.332 37.353c10.3 0 18.678-8.378 18.678-18.678S32.632 0 22.332 0C12.032 0 3.654 8.378 3.654 18.678 C3.654 28.978 12.032 37.353 22.332 37.353z M22.332 98.256c10.3 0 18.678-8.379 18.678-18.678c0-10.301-8.378-18.676-18.678-18.676 c-10.3 0-18.678 8.379-18.678 18.678C3.654 89.881 12.032 98.256 22.332 98.256z M75.928 0.001c-10.301 0-18.679 8.377-18.679 18.677c0 10.3 8.378 18.678 18.679 18.678 c10.299 0 18.676-8.378 18.676-18.678C94.604 8.378,86.227 0.001 75.928 0.001z M94.604 79.58c0-10.299-8.377-18.678-18.678-18.678c-10.3 0-18.678 8.379-18.678 18.678 c0 10.301 8.378 18.678 18.678 18.678C86.227 98.258 94.604 89.877 94.604 79.58z"
        },
        {
            title: "@Klyn",
            iconLink: "http://www.w3.org/2000/svg",
            d: "M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
        },
        {
            title: "920145238",
            iconLink: "http://www.w3.org/2000/svg",
            d: "M150 0 L75 200 L225 200 Z"
        },
    ]

    return (
        <div className="flex h-screen">
            <div className="w-18 top-0 left-0 h-full z-20" style={{ boxShadow: '10px 0 5px -2px rgba(0, 0, 0, 0.1)' }}>
                <Menu items={menuItems1} variant="style1" />
            </div>
            <div className="flex flex-col justify-center items-center flex-1 h-full bg-custom-blue" style={{ marginLeft: '72px' }}>
            <div className="relative mb-32 mt-10">
                <div className="relative rounded-lg shadow-lg overflow-hidden border-4 bg-custom-lightblue">
                    <img src={banner} alt="Imagen de fondo" className="w-full max-w-2xl"/>
                </div>
                <div className="absolute bottom-0 max-w-lg transform translate-y-1/2 left-1/2 -translate-x-1/2">
                    <img src={logoCordillera} alt="Imagen superpuesta" className="w-40 h-40 rounded-full border-4 bg-custom-lightblue shadow-lg"/>
                </div>
            </div>
                <div className="flex w-full justify-center content-center">
                    <div className="flex flex-col justify-center text-center w-auto">
                        <h2 className="text-white font-bold text-4xl"> KLYN </h2>
                        <Menu items={menuItems2} variant="style2"/>
                    </div>
                    <div className="mx-5 w-1/4">
                        <div className="flex gap-3 mb-5">
                            <Button text="Seguir" width="auto" />
                            <Button text="Mensaje" width="auto" />
                        </div>
                        <div className="flex-1 gap-3 flex w-auto">
                            <img className="w-2/3 rounded-lg" src={zapatillaJordan} />
                            <img className="w-2/3 rounded-lg" src={zapatillaRoja} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PerfilNegocio