import Button from "../../components/Atoms/Actions/button/button";
import Dropdown from "../../components/Atoms/Actions/dropdown/dropdown";
import Modal from "../../components/Organism/modal/modal";
import Swap from "../../components/Atoms/Actions/swap/swap";

const App: React.FC = () => {
  const openModal = () => {
      const modal = document.getElementById('my_modal_1') as HTMLDialogElement | null;
      modal?.showModal();
  };

  return (
    <div className="app-container min-h-screen custom-darkblue">
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
