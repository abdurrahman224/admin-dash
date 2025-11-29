

import { Trash2 } from "lucide-react";

export default function DeleteModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96 text-center">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <Trash2 className="w-8 h-8 text-blue-500" />
          </div>
        </div>

       
        <h2 className="text-sm font-semibold text-gray-800 mb-2">
          Are you sure you want to delete this file?
        </h2>

      
        <p className="text-sm text-gray-500 mb-8 font-mono">
         
        </p>

       
        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
