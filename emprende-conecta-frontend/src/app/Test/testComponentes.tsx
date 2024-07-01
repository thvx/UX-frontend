import Button from "../../components/Atoms/Actions/button/button";
import Modal from "../../components/Organism/modal/modal";
import Swap from "../../components/Atoms/Actions/swap/swap";
import Checkbox from "../../components/Atoms/Input/checkbox/Checkbox.tsx";
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
import BreadCrumbs from "../../components/Atoms/Navigation/breadcumbs/breadcumbs";
import Link from "../../components/Atoms/Navigation/link/link";
import Menu from "../../components/Atoms/Navigation/menu/menu";
import Pagination from "../../components/Atoms/Navigation/pagination/pagination";
import NavBar from "../../components/Organism/navbar/navbar.tsx";
import NavBarUser from "../../components/Organism/navbar/navbar2.tsx";
import Steps from "../../components/Atoms/Navigation/steps/steps";
import Tab from "../../components/Atoms/Navigation/tab/tab";
import Accordion from "../../components/Atoms/DataDisplay/Accordion/Accordion";
import Avatar from "../../components/Atoms/DataDisplay/Avatar/Avatar";
import CardProductos from "../../components/Atoms/DataDisplay/Card/CardProductos";
import CardLogin from "../../components/Atoms/DataDisplay/Card/CardLogIn"; // Fixed the casing of the file name
import Carousel from "../../components/Atoms/DataDisplay/Carousel/Carousel";
import Collapse from "../../components/Atoms/DataDisplay/Collapse/Collapse";
import Table from "../../components/Atoms/DataDisplay/Table/Table";
import { Link as RouterLink } from "react-router-dom";
import HomePage from "../Homepage/homepage";

import { ChangeEvent } from "react";

const App: React.FC = () => {
    const radioItems: RadioItem[] = [
        {
            name: "option1",
            text: "Option 1",
            size: "radio-lg",
            marginRight: "mr-10",
        },
        {
            name: "option2",
            text: "Option 2",
            size: "radio-md",
            marginRight: "10",
        },
        {
            name: "option3",
            text: "Option 3",
            size: "radio-md",
            marginRight: "10",
        },
    ];

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

        <div className="flex flex-col items-center space-y-4">
          <Dropdown buttonText="Inicia Sesión" items={['Inicia Sesión', 'Regístrate']} />
        </div>

        <Swap />
    </div>
  )
}

export default App;
