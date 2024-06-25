import Steps from '../../Atoms/Navigation/steps/steps'
import CardProductos from "../../Atoms/DataDisplay/Card/CardAddProduct";
import Button from '../../Atoms/Actions/button/button';
interface CheckoutProps{
    stepsData:{
        stepsText: string[];
        numPages: number;
        actualPage: number;
    }[];
    productsData:{
        img: string;
        title: string;
        store: string;
        price: string;
        quantity: number;
    }[];
    buttonData:{
        text: string;
    }[];
}

const Checkout: React.FC<CheckoutProps> = ({stepsData, productsData, buttonData}) => {
    return (
        <div className="app-container h-min-screen flex-grow bg-custom-blue flex flex-col">
            <div className="flex flex-1">
                <main className="main-content flex-1 ml-8 p-4">
                    <Steps numPages={stepsData[1].numPages} actualPage={stepsData[2].actualPage} stepsText={stepsData[0].stepsText}  />
                    <CardProductos image={productsData[0].img} title={productsData[0].title} store={productsData[0].store} price={productsData[0].price} initialQuantity={productsData[0].quantity}/>
                    <Button text={buttonData[0].text} width='auto' type='button'/>
                </main>
            </div>
        </div>
    );
}

export default Checkout;