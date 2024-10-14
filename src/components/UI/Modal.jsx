import React from "react";

const Modal = ({ onClose, missingFields }) => {
  const handleBackdropClick = (e) => {
    // Eğer tıklama modalın arka planına (backdrop) yapılırsa modalı kapat
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white p-5 rounded shadow-lg w-[300px] max-w-full">
        <h2 className="text-lg font-semibold mb-4 text-red-700">Missing Fields</h2>
        <ul className="list-disc pl-5">
          {missingFields.map((field, index) => (
            <li className="text-lg text-red-700"key={index}>{field}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
