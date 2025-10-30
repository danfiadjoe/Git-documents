import React from 'react';

function Modal({ show, onConfirm, onCancel }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg text-center">
        <p className="mb-4">Are you sure you want to delete this task?</p>
        <div className="flex justify-center gap-4">
          <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded">
            Yes
          </button>
          <button onClick={onCancel} className="bg-gray-300 px-4 py-2 rounded">
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
