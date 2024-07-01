import React from "react";
import Sidebar from "../../components/Organism/Sidebar/sidebar";
import FavoritesTemplate from "../../components/Templates/ProductosFav/Productos";

const ProductosFav: React.FC = () => {
    return (
        <div className="bg-custom-blue h-full flex">
            <Sidebar />
            <FavoritesTemplate />
        </div>
    );
};

export default ProductosFav;
