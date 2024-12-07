import React, { useState } from "react";

const TextEditor = ({ isOpen, initialText, onSave, onClose }) => {
  const [newText, setNewText] = useState(initialText);
  const [error, setError] = useState("");

  const handleSave = () => {
    if (!newText.trim()) {
      // if  there is no text entered condition is true
      setError("Text cannot be empty!");
      return;
    }
    onSave(newText.trim());
    onClose();
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-red-200 p-6 rounded shadow-md w-80">
        <h3 className="text-lg font-semibold mb-4">Edit Text</h3>
        <input
          type="text"
          value={newText}
          onChange={(e) => {
            setNewText(e.target.value);

            //    if the user start typing then we clear the error of showing "not be empty"
            if (error) setError("");
          }}
          className="w-full border  border-gray-300 p-2 rounded mb-2"
        />

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className=" flex  justify-end space-x-2">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
