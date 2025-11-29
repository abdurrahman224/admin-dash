




const Lesson = ({handleClose,handleCreateTheme,activeTab,themeName,setThemeName,handleDragOver, handleDragLeave,handleDrop,handleDragAreaClick,handleFileChange,fileInputRef}) => {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
        {/* 2. Form Box */}
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl sm:max-w-md md:max-w-3xl max-h-[90vh] overflow-y-auto"
        >
          {/* 3. Header Section */}
          <div className="p-6 border-b border-gray-200 relative">
            <h2 className="text-xl font-semibold text-[#5F0006]">{`Create New ${activeTab }`}</h2>
            <p className="text-sm text-[#F18A91] mt-1">Add or update theme information</p>
            {/* Close Button (X) */}
            <button onClick={handleClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl leading-none">
              &times;
            </button>
          </div>

          {/* 4. Form Fields Section */}
          <form onSubmit={handleCreateTheme} className="p-6 space-y-1.5">
            {/* Lesson Name Field */}
            <div>
              <label htmlFor="lessonName" className="block text-sm font-medium text-[#5F0006] mb-1">Lesson Name</label>
              <input
                id="lessonName"
                type="text"
                placeholder="e.g. French History"
                value={themeName}
                onChange={(e) => setThemeName(e.target.value)}
                className="w-full px-4 py-1.5 border border-[#F18A91] rounded-md text-sm text-[#F18A91] focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>

            {/* Select Themes Field */}
            <div>
              <label htmlFor="selectThemes" className="block text-sm font-medium text-[#5F0006] mb-1">Select Themes</label>
              <div className="relative">
                <select id="selectThemes" className="appearance-none w-full px-4 py-2 border border-red-300 rounded-md text-sm text-[#F18A91] bg-white pr-8 focus:outline-none focus:ring-1 focus:ring-red-500" defaultValue="French History">
                  <option>French History</option>
                  <option>World War II</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#F18A91]">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            {/* Description Field */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-[#5F0006] mb-1">Description</label>
              <textarea id="description" rows="4" placeholder="Brief description of the theme" className="w-full px-4 py-2 border border-red-300 rounded-md text-sm text-[#F18A91] resize-none focus:outline-none focus:ring-1 focus:ring-red-500"></textarea>
            </div>

            {/* Upload Image Field */}
            <div>
              <label className="block text-sm font-medium text-[#5F0006] mb-1">Upload Image</label>
              <div onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} onClick={handleDragAreaClick} className="flex items-center justify-center h-48 border border-red-300 rounded-md border-dashed bg-gray-50 text-[#5F0006] cursor-pointer hover:bg-gray-100">
                <div className="text-center">
                  <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-5 4h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              <input id="lesson-image-upload" ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
            </div>

            {/* Footer/Action Buttons Section */}
            <div className="p-4  rounded-b-lg flex justify-end space-x-3">
              <button type="button" onClick={handleClose} className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md  transition duration-150 text-sm">Cancel</button>
              <button type="submit" className="px-4 py-2 text-white  rounded-md bg-gradient-to-r from-[#E1000F] to-[#3333A7]  transition duration-150 text-sm font-medium">Save Theme</button>
            </div>



 
          </form>
        </div>
      </div>
  );
};

export default Lesson;