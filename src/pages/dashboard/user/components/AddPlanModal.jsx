// const AddPlanModal = ({closeModal}) => {
//   return (
//     <div className="text-[#5F0006] flex flex-col gap-5">
//       <p className="font-[700] text-2xl">Add Plan</p>
//       <div className="flex flex-col gap-3">
//         <div className="">
//           <p className="text-base">Tittle</p>
//           <div className="flex items-center w-full bg-white rounded-lg border border-[#F6B0B5] shadow-sm">
//             <input
//               type="text"
//               placeholder="Enter card name"
//               onChange=""
//               className="w-full py-2 text-gray-700 px-2 placeholder-[#F6B0B5] focus:outline-none focus:ring-0 border-none"
//             />
//           </div>
//         </div>

//         <div className="">
//           <p className="text-base">Plan Price</p>
//           <div className="flex items-center w-full bg-white rounded-lg border border-[#F6B0B5] shadow-sm">
//             <input
//               type="text"
//               placeholder="€ 0.00"
//               onChange=""
//               className="w-full py-2 text-gray-700 px-2 placeholder-[#F6B0B5] focus:outline-none focus:ring-0 border-none"
//             />
//           </div>
//         </div>

//         <div className="">
//           <p className="text-base">Price ID</p>
//           <div className="flex items-center w-full bg-white rounded-lg border border-[#F6B0B5] shadow-sm">
//             <input
//               type="text"
//               placeholder="price_1SOfogQ1BLrLdBOmlW9z0rWv"
//               onChange=""
//               className="w-full py-2 text-gray-700 px-2 placeholder-[#F6B0B5] focus:outline-none focus:ring-0 border-none"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="flex items-center gap-4">
//         <button
//           className={`mt-auto px-8 py-3 border-[#F18A91] text-[#fff] rounded-xl font-medium text-base bg-gradient-to-r from-[#E1000F] to-[#3333A7] shadow-lg flex justify-center items-center text-center gap-2`}
//         >
//          Monthly
//         </button>
//         <button
//           className={`mt-auto px-8 py-3 border-[#F18A91] rounded-xl font-medium text-base bg-[#838383] text-white shadow-lg flex justify-center items-center text-center gap-2`}
//         >
//          Yearly
//         </button>
//       </div>

//       <div className="">
//         <h2 className="font-[700] text-2xl">Feature Options</h2>
//         <div className="flex flex-col space-y-10">
//           <div className="md:my-2.5 sm:my-2 my-1.5">
//             <div className="flex items-center w-full bg-white rounded-lg border border-[#F6B0B5] shadow-sm">
//               <input
//                 type="text"
//                 placeholder="Feature Option 1"
//                 onChange=""
//                 className="w-full py-2 text-gray-700 px-2 placeholder-[#F6B0B5] focus:outline-none focus:ring-0 border-none"
//               />
//             </div>
//           </div>

//           <div className="md:my-2.5 sm:my-2 my-1.5">
//             <div className="flex items-center w-full bg-white rounded-lg border border-[#F6B0B5] shadow-sm">
//               <input
//                 type="text"
//                 placeholder="Feature Option 2"
//                 onChange=""
//                 className="w-full py-2 text-gray-700 px-2 placeholder-[#F6B0B5] focus:outline-none focus:ring-0 border-none"
//               />
//             </div>
//           </div>

//           <div className="md:my-2.5 sm:my-2 my-1.5">
//             <div className="flex items-center w-full bg-white rounded-lg border border-[#F6B0B5] shadow-sm">
//               <input
//                 type="text"
//                 placeholder="Feature Option 3"
//                 onChange=""
//                 className="w-full py-2 text-gray-700 px-2 placeholder-[#F6B0B5] focus:outline-none focus:ring-0 border-none"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex items-center justify-end gap-4">
//         <button onClick={closeModal}
//           className={`mt-auto px-8 py-3 border border-[#F18A91] rounded-xl font-medium text-base text-black`}
//         >
//          Cancel
//         </button>
//         <button
//           className={`mt-auto px-8 py-3 border-[#F18A91] text-[#fff] rounded-xl font-medium text-base bg-gradient-to-r from-[#E1000F] to-[#3333A7] shadow-lg flex justify-center items-center text-center gap-2`}
//         >
//          Save
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddPlanModal;


import React from "react";

const AddPlanForm = ({ closeModal }) => {
  return (
    <div className="text-[#5F0006] flex flex-col gap-6 w-full  py-6">
      {/* Title */}
      <p className="font-bold text-2xl">Add Plan</p>

      {/* Inputs */}
      <div className="flex flex-col gap-4">
        {/* Title */}
        <div className="flex flex-col gap-2">
          <p className="text-base font-medium">Title</p>
          <input
            type="text"
            placeholder="Enter card name"
            className="w-full py-2 px-3 text-gray-700 placeholder-[#F6B0B5] bg-white border border-[#F6B0B5] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E1000F]"
          />
        </div>

        {/* Plan Price */}
        <div className="flex flex-col gap-2">
          <p className="text-base font-medium">Plan Price</p>
          <input
            type="text"
            placeholder="€ 0.00"
            className="w-full py-2 px-3 text-gray-700 placeholder-[#F6B0B5] bg-white border border-[#F6B0B5] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E1000F]"
          />
        </div>

        {/* Price ID */}
        <div className="flex flex-col gap-2">
          <p className="text-base font-medium">Price ID</p>
          <input
            type="text"
            placeholder="price_1SOfogQ1BLrLdBOmlW9z0rWv"
            className="w-full py-2 px-3 text-gray-700 placeholder-[#F6B0B5] bg-white border border-[#F6B0B5] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E1000F]"
          />
        </div>
      </div>

      {/* Plan Type Buttons */}
   <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4 mt-4">
  {/* Primary Button */}
  <button className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm md:text-base lg:text-lg font-medium text-white rounded-xl bg-gradient-to-r from-[#E1000F] to-[#3333A7] shadow-lg hover:from-[#F23B3B] hover:to-[#4444C8] transition-all duration-200">
    Monthly
  </button>

  {/* Secondary Button */}
  <button className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm md:text-base lg:text-lg font-medium text-white rounded-xl bg-[#838383] shadow-lg hover:bg-[#6e6e6e] transition-all duration-200">
    Yearly
  </button>
</div>

      {/* Feature Options */}
      <div className="mt-6">
        <h2 className="font-bold text-2xl mb-4">Feature Options</h2>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Feature Option 1"
            className="w-full py-2 px-3 text-gray-700 placeholder-[#F6B0B5] bg-white border border-[#F6B0B5] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E1000F]"
          />
          <input
            type="text"
            placeholder="Feature Option 2"
            className="w-full py-2 px-3 text-gray-700 placeholder-[#F6B0B5] bg-white border border-[#F6B0B5] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E1000F]"
          />
          <input
            type="text"
            placeholder="Feature Option 3"
            className="w-full py-2 px-3 text-gray-700 placeholder-[#F6B0B5] bg-white border border-[#F6B0B5] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E1000F]"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
        <button
          onClick={closeModal}
          className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm md:text-base lg:text-lg font-medium text-white rounded-xl bg-gradient-to-r from-[#E1000F] to-[#3333A7] shadow-lg hover:from-[#F23B3B] hover:to-[#4444C8] transition-all duration-200"
        >
          Cancel
        </button>
        <button className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm md:text-base lg:text-lg font-medium text-white rounded-xl bg-gradient-to-r from-[#E1000F] to-[#3333A7] shadow-lg hover:from-[#F23B3B] hover:to-[#4444C8] transition-all duration-200">
          Save
        </button>
      </div>

      
    </div>
  );
};

export default AddPlanForm;




 