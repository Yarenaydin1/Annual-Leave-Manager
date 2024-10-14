import Card from "../UI/Card";
import { FaTrash } from "react-icons/fa";

const WorkerList = ({ workers, onDeleteWorker }) => {
  return (
    <Card className="mt-10">
      <ul className="gap-y-4 flex flex-col">
        <li className="flex justify-between p-2 font-bold">
          <span>Full Name</span>
          <span>Total Vacation Days</span>
          <span>Used Leave Days</span>
          <span>Remaining Leave Days</span>
          <span>Actions</span>
        </li>

        {workers.length > 0 ? (
          workers.map((worker) => (
            <li key={worker.id} className="flex justify-between cursor-pointer hover:shadow-xl p-2 transition-shadow">
              <span>{worker.name}</span>
              <span>{worker.vacationDays}</span>
              <span>{worker.usedDays}</span>
              <span className="text-blue-700 font-medium">{worker.remainingDays}</span>
              <span className="flex space-x-2">
                <button
                  className="text-red-500"
                  onClick={() => {
                    if (window.confirm("Are you sure you want to delete this worker?")) {
                      onDeleteWorker(worker.id); 
                    }
                  }}
                >
                  <FaTrash className="mr-1" /> 
                  
                </button>
              </span>
            </li>
          ))
        ) : (
          <li className="text-center mt-4 text-gray-500">No workers added yet</li>
        )}
      </ul>
    </Card>
  );
};

export default WorkerList;
