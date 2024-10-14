import { useState } from "react";
import AddWorker from "./components/Workers/AddWorker";
import WorkerList from "./components/Workers/WorkerList";



function App() {
  // İşçi listesi için state oluştur
  const [workers, setWorkers] = useState([]);

  // Yeni işçi ekleme fonksiyonu
  const onAddWorker = (newWorker) => {
    setWorkers((prevWorkers) => [
      ...prevWorkers,
      {
        ...newWorker,
        remainingDays: newWorker.vacationDays - newWorker.usedDays, 
        id: Date.now(), // Benzersiz ID 
      },
    ]);
  };


  const deleteWorker = (id) => {
    setWorkers((prevWorkers) => prevWorkers.filter(worker => worker.id !== id));
  };

  return (
    <div className="App">
      <h1 className="text-white text-center mt-6 text-xl">Annual Leave Manager</h1>
    
      <AddWorker onAddWorker={onAddWorker} />
    
      <WorkerList workers={workers} onDeleteWorker={deleteWorker} />
    </div>
  );
}

export default App;
