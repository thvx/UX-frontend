import Footer from "../../components/Organism/footer/footer";
import ProductDetailsTemplate from "../../components/Templates/ProductDetailsTemplate/productdetailstemplate";
import NavBar from "../../components/Organism/navbar/navbar2";

const ProductDetailsPage = () => {
    return (
        <div className="h-full flex flex-col bg-custom-blue">
            <NavBar />
            <ProductDetailsTemplate />
            <Footer />
        </div>
    );
};

export default ProductDetailsPage;
