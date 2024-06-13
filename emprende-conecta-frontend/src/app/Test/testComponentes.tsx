import Accordion from "../../components/Atoms/DataDisplay/Accordion/Accordion";
import Avatar from "../../components/Atoms/DataDisplay/Avatar/Avatar";
import Card from "../../components/Atoms/DataDisplay/Card/Card";
import Carousel from "../../components/Atoms/DataDisplay/Carousel/Carousel";
import Collapse from "../../components/Atoms/DataDisplay/Collapse/Collapse";
import Table from "../../components/Atoms/DataDisplay/Table/Table";

const accordionData = [
  {
    title: "Click to open this one and close others",
    content: "hello",
  },
  {
    title: "Click to open this one and close others",
    content: "hello",
  },
  {
    title: "Click to open this one and close others",
    content: "hello",
  },
];

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
      <Card />
      </div>

      <div>
      <Carousel />
      </div>

      <div>
      <Collapse />
      </div>

      <div>
      <Table />
      </div>
    </div>
    
  )
}

export default App;
