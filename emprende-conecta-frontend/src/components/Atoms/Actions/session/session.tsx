import React from "react";

type SessionProps = {
<<<<<<< HEAD
    logo: string;
    network: string;
    extraClasses?: string; // Añadir esta prop para clases adicionales
};

const Session: React.FC<SessionProps> = ({ logo, network, extraClasses }) => {
    return (
        <button
            className={`w-full flex items-center border rounded py-2 bg-white text-[#1E1E1E] ${extraClasses}`}
        >
            <div className="flex items-center justify-center w-1/12">
                <img className="h-5 w-5" src={logo} alt={network} />
            </div>
            <div className="flex-1 text-center">
                <span className="text-md">{`Continuar con ${network}`}</span>
            </div>
        </button>
    );
};

export default Session;
=======
    logo: string,
    network: string,
}

const Session: React.FC<SessionProps> = ({logo, network}) => {
    return(
        <div className="navbar bg-white mb-3 w-1/2 flex justify-center content-center m-auto">
            <a className=" hover:cursor-pointer text-md">
            <img className="h-5 w-5 mr-3" src={logo}/>
            Continuar con {network}</a>
        </div>
    )
}

export default Session
>>>>>>> 5c8b0cfb5a87dd715a79883b49ce2ece82b0809c
