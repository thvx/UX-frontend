import React from "react";
import Sidebar from "../../components/Organism/Sidebar/sidebar";
import ChatTemplate from "../../components/Templates/Mensaje/mensaje";

const Mensaje: React.FC = () => {
    return (
        <div className="bg-custom-blue h-full flex">
            <Sidebar />
            <ChatTemplate />
        </div>
    );
};

export default Mensaje;