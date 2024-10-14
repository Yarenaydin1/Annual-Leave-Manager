import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
import Modal from "../UI/Modal";

const AddWorker = ({ onAddWorker }) => {
  const [formData, setFormData] = useState({
    name: '',
    vacationDays: '',
    usedDays: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [missingFields, setMissingFields] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const emptyFields = [];
    if (!formData.name.trim()) emptyFields.push("Worker's Full Name");
    if (!formData.vacationDays.trim()) emptyFields.push("Total Vacation Days");
    if (!formData.usedDays.trim()) emptyFields.push("Used Leave Days");
    
    if (emptyFields.length > 0) {
      setMissingFields(emptyFields);
      setShowModal(true);
      return false; 
    }
    return true; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    onAddWorker(formData);
    setFormData({
      name: '',
      vacationDays: '',
      usedDays: '',
    });
  };

  return (
    <Card className="mt-10">
      <form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
        <label htmlFor="name" className="font-medium">Worker's Full Name</label>
        <input
          type="text"
          className="max-w-[40rem] w-full mx-auto border p-2"
          placeholder="Enter Worker's Full Name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="vacationDays" className="font-medium">Total Vacation Days</label>
        <input
          type="number"
          className="max-w-[40rem] w-full mx-auto border p-2"
          placeholder="Enter Total Days"
          id="vacationDays"
          value={formData.vacationDays}
          onChange={handleChange}
        />
        <label htmlFor="usedDays" className="font-medium">Used Leave Days</label>
        <input
          type="number"
          className="max-w-[40rem] w-full mx-auto border p-2"
          placeholder="Enter Used Leave Days Number"
          id="usedDays"
          value={formData.usedDays}
          onChange={handleChange}
        />
        <Button className="mt-2">Add</Button>
      </form>

      {showModal && (
        <Modal 
          onClose={() => setShowModal(false)} 
          missingFields={missingFields} 
        />
      )}
    </Card>
  );
};

export default AddWorker;
