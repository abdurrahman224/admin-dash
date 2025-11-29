const EditPlanModal = ({closeModal}) => {
  return (
    <div className="text-[#5F0006] flex flex-col gap-5">
      <p className="font-[700] text-2xl">Edit Plan</p>
      <div className="flex flex-col gap-3">
        <div className="">
          <p className="text-base">Tittle</p>
          <div className="flex items-center w-full bg-white rounded-lg border border-[#F6B0B5] shadow-sm">
            <input
              type="text"
              placeholder="Enter card name"
              onChange=""
              className="w-full py-2 text-gray-700 px-2 placeholder-[#F6B0B5] focus:outline-none focus:ring-0 border-none"
            />
          </div>
        </div>

        <div className="">
          <p className="text-base">Plan Price</p>
          <div className="flex items-center w-full bg-white rounded-lg border border-[#F6B0B5] shadow-sm">
            <input
              type="text"
              placeholder="€ 0.00"
              onChange=""
              className="w-full py-2 text-gray-700 px-2 placeholder-[#F6B0B5] focus:outline-none focus:ring-0 border-none"
            />
          </div>
        </div>

        <div className="">
          <p className="text-base">Price ID</p>
          <div className="flex items-center w-full bg-white rounded-lg border border-[#F6B0B5] shadow-sm">
            <input
              type="text"
              placeholder="price_1SOfogQ1BLrLdBOmlW9z0rWv"
              onChange=""
              className="w-full py-2 text-gray-700 px-2 placeholder-[#F6B0B5] focus:outline-none focus:ring-0 border-none"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          className={`mt-auto px-8 py-3 border-[#F18A91] text-[#fff] rounded-xl font-medium text-base bg-gradient-to-r from-[#E1000F] to-[#3333A7] shadow-lg flex justify-center items-center text-center gap-2`}
        >
        Monthly
        </button>
        <button
          className={`mt-auto px-8 py-3 border-[#F18A91] rounded-xl font-medium text-base bg-[#838383] text-white shadow-lg flex justify-center items-center text-center gap-2`}
        >
         Yearly
        </button>
      </div>

      <div className="">
        <h2 className="font-[700] text-2xl">Feature Options</h2>
        <div className="flex flex-col space-y-10">
          <div className="md:my-2.5 sm:my-2 my-1.5">
            <div className="flex items-center w-full bg-white rounded-lg border border-[#F6B0B5] shadow-sm">
              <input
                type="text"
                placeholder="Feature Option 1"
                onChange=""
                className="w-full py-2 text-gray-700 px-2 placeholder-[#F6B0B5] focus:outline-none focus:ring-0 border-none"
              />
            </div>
          </div>

          <div className="md:my-2.5 sm:my-2 my-1.5">
            <div className="flex items-center w-full bg-white rounded-lg border border-[#F6B0B5] shadow-sm">
              <input
                type="text"
                placeholder="Feature Option 2"
                onChange=""
                className="w-full py-2 text-gray-700 px-2 placeholder-[#F6B0B5] focus:outline-none focus:ring-0 border-none"
              />
            </div>
          </div>

          <div className="md:my-2.5 sm:my-2 my-1.5">
            <div className="flex items-center w-full bg-white rounded-lg border border-[#F6B0B5] shadow-sm">
              <input
                type="text"
                placeholder="Feature Option 3"
                onChange=""
                className="w-full py-2 text-gray-700 px-2 placeholder-[#F6B0B5] focus:outline-none focus:ring-0 border-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-4">
        <button
        onClick={closeModal}
          className={`mt-auto px-8 py-3  border border-[#F18A91] rounded-xl font-medium text-base hover:bg-gray-100 text-black`}
        >
         Cancel 
        </button>
        <button
          className={`mt-auto px-8 py-3.5 border-[#F18A91] text-[#fff] rounded-xl font-medium text-base bg-gradient-to-r from-[#E1000F] to-[#3333A7] shadow-lg flex justify-center items-center text-center gap-2`}
        >
        Save
        </button>
      </div>
    </div>
  );
};

export default EditPlanModal;
