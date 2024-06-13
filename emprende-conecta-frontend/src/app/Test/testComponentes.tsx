import Checkbox from "../../components/Atoms/Input/checkbox/Checkbox.tsx";
import FileInput from "../../components/Atoms/Input/file/FileInput.tsx";
// import radio from "../../components/Atoms/Input/radio/Radio.tsx";
import { RadioItem } from "../../components/Atoms/Input/radio/radioType.ts";
import RadioList from "../../components/Organism/RadioList/RadioList.tsx";

const App: React.FC = () => {
  const radioItems: RadioItem[] = [
    { name: 'option1', text: 'Option 1', size: 'md', marginRight: '10' },
    { name: 'option2', text: 'Option 2', size: 'md', marginRight: '10' },
    { name: 'option3', text: 'Option 3', size: 'md', marginRight: '10' }
  ];
  
  return (
    <div className="app-container min-h-screen">
        <div className="flex flex-col items-center gap-6 p-6">
          <Checkbox size="md" />
          <FileInput />
          <RadioList items={radioItems} />
        </div>
    </div>
  )
}

export default App;
