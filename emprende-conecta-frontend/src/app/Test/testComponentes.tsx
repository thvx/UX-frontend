import Checkbox from "../../components/Atoms/Input/checkbox/Checkbox.tsx";

const App: React.FC = () => {
  
  return (
    <div className="app-container min-h-screen">
        <div className="flex flex-col items-center gap-6 p-6">
          <Checkbox size="sm" />
        </div>
    </div>
  )
}

export default App;
