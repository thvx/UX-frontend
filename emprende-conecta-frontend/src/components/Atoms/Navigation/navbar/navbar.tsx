import React from "react";
import arrow_left from "../../../../assets/images/arrowleft.png"
import logo_emprende from "../../../../assets/images/Logo-Emprende-Conecta.png"

const NavBar: React.FC = () => {
    return (
        <div className="navbar bg-custom-blue">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <img className="h-8 w-8" src={arrow_left} />
                    </div>
                </div>
            </div>
            <div className="navbar-center text-blue-200">
                <a className="btn btn-ghost text-xl">Emprende&Conecta</a>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <img src={logo_emprende} className="h-10 w-10" />
                </button>
            </div>
        </div>
    )
}

export default NavBar