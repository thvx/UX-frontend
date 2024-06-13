import Checkbox from "../../components/Atoms/Input/checkbox/Checkbox.tsx";
import FileInput from "../../components/Atoms/Input/file/FileInput.tsx";

const App: React.FC = () => {
  
  return (
    <div className="app-container min-h-screen">
        <div className="flex flex-col items-center gap-6 p-6">
          <Checkbox size="sm" />
          <FileInput />
        </div>
    </div>
  )
}

export default App;
