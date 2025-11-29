
import { useRef, useState } from "react";
import { Upload, X } from "lucide-react";
import MockExams from "./MockExams";
import Questions from "./Questions";
import Lesson from "../Lesson/Lesson";
import ModalHeader from "./ModalHeader";


export default function Modal({ isOpen, onClose, activeTab }) {
  const [themeName, setThemeName] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef(null);

  // STOP rendering if modal is closed
  if (!isOpen) return null;

  // Drag & Drop
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files.length > 0) {
      console.log("Files dropped:", e.dataTransfer.files);
    }
  };

  const handleDragAreaClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      console.log("File selected:", e.target.files);
    }
  };

  // Submit handler
  const handleCreateTheme = (e) => {
    e.preventDefault();
    console.log("Creating theme:", themeName);
    setThemeName("");

    // ❗ FIX: Correct Closing
    onClose();
  };

  // Lesson Modal (Special UI)
  if (activeTab === "Lesson") {
    return (
      <Lesson
        activeTab={activeTab}
        fileInputRef={fileInputRef}
        handleClose={onClose} // 
        handleCreateTheme={handleCreateTheme}
        handleDragAreaClick={handleDragAreaClick}
        handleDragLeave={handleDragLeave}
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
        handleFileChange={handleFileChange}
        setThemeName={setThemeName}
        themeName={themeName}
      />
    );
  }

  // Questions Modal
  if (activeTab === "Questions") {
    return (
      <Questions activeTab={activeTab} handleCreateTheme={handleCreateTheme} />
    );
  }

  // Mock Exams Modal
  if (activeTab === "Mock Exams") {
    return (
      <MockExams
        activeTab={activeTab}
        onClose={onClose} // ❗ FIXED
      />
    );
  }

  // Default Modal
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div
        className="bg-white rounded-xl shadow-2xl"
        style={{ width: "827px", height: "480px", padding: "24px" }}
      >
        {/* Header */}

        <ModalHeader activeTab={activeTab} onClose={onClose} />
        {/* Body */}
        <form onSubmit={handleCreateTheme} className="space-y-6">
          {/* Theme Name */}
          <div>
            <label className="block text-sm font-medium text-[#5F0006] py-3">
              Theme Name
            </label>
            <input
              type="text"
              placeholder="e.g., French History"
              value={themeName}
              onChange={(e) => setThemeName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Upload Image */}
          <div>
            <label className="block text-sm font-medium text-[#5F0006] mb-3">
              Upload Image
            </label>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />

            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={handleDragAreaClick}
              className={`border-1 rounded-lg p-10 text-center cursor-pointer transition-colors ${
                isDragging ? "border-red-400 bg-red-50" : "border-red-300"
              } hover:border-red-400`}
            >
              <Upload className="text-red-400" size={28} strokeWidth={1.5} />
              <p className="text-sm text-gray-600 mt-3">
                <span className="font-semibold text-red-600">
                  Click to upload
                </span>{" "}
                or drag and drop
              </p>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 px-6 py-4 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="w-[102px] h-[35px] text-sm font-medium border rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-[102px] h-[35px] text-sm font-medium text-white bg-gradient-to-r from-[#E1000F] to-[#3333A7] rounded"
            >
              Save
            </button>
          </div>
        </form>
 
      </div>
    </div>
  );
}
