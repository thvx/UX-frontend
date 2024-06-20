import Button from "../../components/Atoms/Actions/button/button";
import Modal from "../../components/Organism/modal/modal";
import Swap from "../../components/Atoms/Actions/swap/swap";
import Checkbox from "../../components/Atoms/Input/checkbox/Checkbox.tsx"
import FileInput from "../../components/Atoms/Input/file/FileInput.tsx";
import { RadioItem } from "../../components/Atoms/Input/radio/radioType.ts";
import RadioList from "../../components/Organism/RadioList/RadioList.tsx";
import Select from "../../components/Atoms/Input/select/Select.tsx";
import TextInput from "../../components/Atoms/Input/text/TextInput.tsx";
import TextInputMail from "../../components/Atoms/Input/text/TextInputMail.tsx";
import TextInputSearch from "../../components/Atoms/Input/text/TextInputSearch.tsx";
import TextInputUsername from "../../components/Atoms/Input/text/TextInputUsername.tsx";
import TextInputPassword from "../../components/Atoms/Input/text/TextInputPassword.tsx";
import TextArea from "../../components/Atoms/Input/textarea/Textarea.tsx";
import Toggle from "../../components/Atoms/Input/toggle/Toggle.tsx";
import BreadCrumbs from '../../components/Atoms/Navigation/breadcumbs/breadcumbs';
import Link from '../../components/Atoms/Navigation/link/link';
import Menu from '../../components/Atoms/Navigation/menu/menu';
import Pagination from '../../components/Atoms/Navigation/pagination/pagination';
import NavBar from "../../components/Organism/navbar/navbar.tsx";
import NavBarUser from '../../components/Organism/navbar/navbar2.tsx';
import Steps from '../../components/Atoms/Navigation/steps/steps';
import Tab from '../../components/Atoms/Navigation/tab/tab';
import Accordion from "../../components/Atoms/DataDisplay/Accordion/Accordion";
import Avatar from "../../components/Atoms/DataDisplay/Avatar/Avatar";
import CardProductos from "../../components/Atoms/DataDisplay/Card/CardProductos";
import CardLogin from "../../components/Atoms/DataDisplay/Card/CardLogIn"; // Fixed the casing of the file name
import Carousel from "../../components/Atoms/DataDisplay/Carousel/Carousel";
import Collapse from "../../components/Atoms/DataDisplay/Collapse/Collapse";
import Table from "../../components/Atoms/DataDisplay/Table/Table";

import { ChangeEvent } from "react";

const App: React.FC = () => {
  const radioItems: RadioItem[] = [
    { name: 'option1', text: 'Option 1', size: 'radio-lg', marginRight: 'mr-10' },
    { name: 'option2', text: 'Option 2', size: 'radio-md', marginRight: '10' },
    { name: 'option3', text: 'Option 3', size: 'radio-md', marginRight: '10' }
  ];

  const openModal = () => {
      const modal = document.getElementById('my_modal_1') as HTMLDialogElement | null;
      modal?.showModal();
  };

  const breadcrumbData = [
    {
      title: 'Home',
      iconLink: 'http://www.w3.org/2000/svg',
    },
    {
      title: 'Documents',
      iconLink: 'http://www.w3.org/2000/svg',
    },
    {
      title: 'Add Document',
      iconLink: 'http://www.w3.org/2000/svg',
    },
  ];

  const linkText = 'link'

  const menuData = [
    {
      title: 'Item 1',
      iconLink: 'http://www.w3.org/2000/svg',
      d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
    },
    {
      title: 'Item 2',
      iconLink: 'http://www.w3.org/2000/svg',
      d: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'Item 3',
      iconLink: 'http://www.w3.org/2000/svg',
      d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
    },
  ]

  const stepsText = ['Selección de medio de pago', 'Visualización de monto', 'Confirmación de pago', 'Entrega de voucher']
  
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
  
  return (
    <div className="app-container min-h-screen bg-custom-blue">
      <div className="flex flex-col items-center gap-6 p-6">
          <Button text="Half Width Button" width="half" />
          <Button text="Quarter Width Button" width="quarter" />
          <Button text="Auto Width Button" width="auto" />
      </div>

      <div className="flex flex-col items-center space-y-4">
            <Button text="Open Modal" width="auto" onClick={openModal} />
            <Modal 
                id="my_modal_1"
                title="Success!" 
                message="Your operation was completed successfully." 
                leftButtonText="Cancel" 
                rightButtonText="Confirm" 
            />
      </div>
      
      <Swap />

      <div className="flex flex-col items-center gap-6 p-6">
          <Checkbox size="checkbox-sm" />
          <FileInput />
          <RadioList items={radioItems} />
          <Select size="select-xs" items={['Seleccionar elemento', 'zzzz', 'dsdsad']} />
          <TextInput size="input-md" placeholder="Escribe..." />
          <TextInputMail placeholder="Correo" size="input-md" />
          <TextInputSearch placeholder="Buscar" size="input-md" />
          <TextInputUsername placeholder="Usuario" size="input-md" />
          <TextInputPassword placeholder="Contraseña" size="input-md" />
          <TextArea placeholder="Ingresa texto" size="textarea-md" />
          <Toggle size="toggle-xs" />
      </div>
      <div>
          <BreadCrumbs items={breadcrumbData} />
          <Link title={linkText} />
          <Menu items={menuData} />
          <Pagination numPages={5} actualPage={1} />
          <NavBar searchValue={"Buscar en Emprende&Conecta"} onSearchChange={function (e: ChangeEvent<HTMLInputElement>): void {
          throw new Error("Function not implemented.");
        } }/>
          <NavBarUser/>
          <Steps numPages={4} actualPage={2} stepsText={stepsText} />
          <Tab numTabs={5} actualTab={3} />
      </div>

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