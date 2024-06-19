import Accordion from "../../components/Atoms/DataDisplay/Accordion/Accordion";
import Avatar from "../../components/Atoms/DataDisplay/Avatar/Avatar";
import CardProductos from "../../components/Atoms/DataDisplay/Card/CardProductos";
import CardLogin from "../../components/Atoms/DataDisplay/Card/CardLogIn"; // Fixed the casing of the file name
import Carousel from "../../components/Atoms/DataDisplay/Carousel/Carousel";
import Collapse from "../../components/Atoms/DataDisplay/Collapse/Collapse";
import Table from "../../components/Atoms/DataDisplay/Table/Table";

const accordionData = [
  {
    title: "Click to open this one and close others",
    content: "Hello there",
  },
  {
    title: "Click to open this one and close others",
    content: "Hello there",
  },
];

const cardProductData = {
  image: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
  title: "Shoes",
  description: "If a dog chews shoes whose shoes does he choose?",
  badges: ["badge1", "badge2"],
  isNew: true,
  extraClasses: "Yes"
};

const cardLoginData = {
  content: "Comprador"
}

const collapseData = [
  {
    title: "Focus me to see content",
    content: "tabIndex={0} attribute is necessary to make the div focusable",
  }
];

const tableData = [
  {
    id: 1,
    name: "Product 1",
    price: "S/100",
    category: "Category 1",
  },
  {
    id: 2,
    name: "Product 2",
    price: "S/200",
    category: "Category 2",
  },
  {
    id: 3,
    name: "Product 3",
    price: "S/300",
    category: "Category 3",
  },
];

const carouselData = [
  {
    image: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
    title: "Cone party",
    description: "Do you like ice-cream?",
    badges: ["badge1", "badge2"],
    isNew: true,
    extraClasses: "Yes"
  },
  {
    image: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
    title: "Pink grapes",
    description: "Enjoy the grapes",
    badges: ["badge1", "badge2"],
    isNew: true,
    extraClasses: "Yes"
  },
  {
    image: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
    title: "Cone party",
    description: "Do you like ice-cream?",
    badges: ["badge1", "badge2"],
    isNew: true,
    extraClasses: "Yes"
  },
  {
    image: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
    title: "Pink grapes",
    description: "Enjoy the grapes",
    badges: ["badge1", "badge2"],
    isNew: true,
    extraClasses: "Yes"
  },

]



function App() {
  
  return (
    <div className="app-container min-h-screen custom-darkblue">
      <div className="flex flex-col items-center gap-6 p-6">
      <Accordion items={accordionData} />
      </div>

      <div className="flex flex-col items-center gap-6 p-6">
      <Avatar />
      </div>

      <div className="flex flex-col items-center gap-6 p-6">
      <CardProductos image={cardProductData.image} title={cardProductData.title} description={cardProductData.description} isNew={cardProductData.isNew} badges={cardProductData.badges} extraClasses={cardProductData.extraClasses}/>
      </div>

      <div className="flex flex-col items-center gap-6 p-6">
      <CardLogin content={cardLoginData.content}/>
      </div>

      <div>
      <Carousel items={carouselData}/>
      </div>

      <div>
      <Collapse items={collapseData}/>
      </div>

      <div>
      <Table data={tableData}/>
      </div>
    </div>
    
  )
}

export default App;
