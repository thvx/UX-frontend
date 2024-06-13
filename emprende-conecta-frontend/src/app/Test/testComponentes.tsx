import Checkbox from "../../components/Atoms/Input/checkbox/Checkbox.tsx";
import FileInput from "../../components/Atoms/Input/file/FileInput.tsx";
// import radio from "../../components/Atoms/Input/radio/Radio.tsx";
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

const App: React.FC = () => {
  const radioItems: RadioItem[] = [
    { name: 'option1', text: 'Option 1', size: 'radio-lg', marginRight: 'mr-10' },
    { name: 'option2', text: 'Option 2', size: 'radio-md', marginRight: '10' },
    { name: 'option3', text: 'Option 3', size: 'radio-md', marginRight: '10' }
  ];
  
  return (
    <div className="app-container min-h-screen">
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
    </div>
  )
}

export default App;