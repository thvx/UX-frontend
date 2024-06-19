import React from "react";

type SessionProps = {
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