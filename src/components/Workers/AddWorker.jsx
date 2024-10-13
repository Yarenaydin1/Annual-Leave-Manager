import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";

const AddWorker = ({ onAddWorker }) => {
  const [formData, setFormData] = useState({
    name: '',
    vacationDays: '',
    usedDays: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddWorker(formData); // İşçiyi ekleme fonksiyonu
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
    </Card>
  );
};

export default AddWorker;
