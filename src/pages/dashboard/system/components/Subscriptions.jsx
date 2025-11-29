import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdDoneAll } from "react-icons/md";
import Modal from "./../../../../components/Modal";
import AddPlanModal from "../../user/components/AddPlanModal";
import EditPlanModal from "../../user/components/EditPlanModal";

const fakeData = [
  {
    name: "Free Plan",
    price: "0",
    billing_cycle: "Per month",
    features: [
      "Access to 20% of the content",
      "1 free mock exam",
      "Native advertisements",
    ],
  },
  {
    name: "Premium plan",
    price: "9.99/month",
    billing_cycle: "Per month",
    features: [
      "Unlimited access to all content",
      "Unlimited mock exams",
      "Ad-free experience",
      "Detailed statistics",
      "Priority support",
    ],
  },
  {
    name: "Premium plan",
    price: "79.99/year",
    billing_cycle: "Per year",
    features: [
      "33% savings on the monthly price",
      "All Premium benefits",
      "Exclusive bonus content",
    ],
  },
];

const Subscriptions = () => {
  const [addPlanOpen, setIsAddPlanOpen] = useState(false);
  const [editPlanOpen, setIsEditPlanOpen] = useState(false);

  const handleAddPlanOpen = () => {
    setIsAddPlanOpen(true);
  };

  const handleAddPlanClose = () => {
    setIsAddPlanOpen(false);
  };

  const handleEditPlanOpen = () => {
    setIsEditPlanOpen(true);
  };

  const handleEditPlanClose = () => {
    setIsEditPlanOpen(false);
  };

  return (
     <div className="flex flex-col text-[#121111] border border-[#F6B0B5] rounded-xl px-2 md:px-4 py-4 pb-8 bg-white w-full ">
      {/* Header */}
      <div className="flex   sm:flex-row items-start sm:items-center justify-between gap-6   md:px-12  sm:gap-0 py-3">
        <h2 className="text-xl sm:text-2xl font-bold text-[#5F0006] pt-2 py-2">Subscriptions</h2>
        <button
          onClick={handleAddPlanOpen}
          className="flex items-center gap-2 px-6 py-2 md:px-8 md:py-3 border border-[#F18A91] text-white rounded-xl font-medium text-sm md:text-base bg-gradient-to-r from-[#E1000F] to-[#3333A7] shadow-lg whitespace-nowrap"
        >
          <IoMdAdd className="w-4 h-4 md:w-5 md:h-5" /> Add Plan
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 mt-6 justify-center">
        {fakeData.map((data, index) => {
          const numericPrice =
            parseFloat(data.price.replace(/[^0-9.]/g, "")) || 0;
          const priceColorClass =
            numericPrice > 0 ? "text-[#000091]" : "text-black";

          return (
            <div
              key={index}
              className="flex flex-col justify-between border border-[#F6B0B5] rounded-xl p-5 w-full sm:w-[48%] lg:w-[30%]"
            >
              {/* Title & Price */}
              <div>
                <h2 className="text-lg md:text-xl font-bold text-black">
                  {data.name}
                </h2>
                <h2
                  className={`text-xl md:text-2xl font-bold ${priceColorClass} mt-1`}
                >
                  € {data.price}
                </h2>
                <p className="text-sm text-[#404040] mt-1">{data.billing_cycle}</p>

                {/* Features */}
                <div className="flex flex-col gap-2 mt-4 text-[#171717] text-base">
                  {data.features.map((feature, i) => (
                    <p key={i} className="flex items-center gap-2">
                      <MdDoneAll className="w-4 h-4 md:w-5 md:h-5 text-[#171717]" />
                      {feature}
                    </p>
                  ))}
                </div>
              </div>

              {/* Edit Button */}
              <button
                onClick={handleEditPlanOpen}
                className="mt-5 w-full px-6 py-2 md:px-8 md:py-3 text-white font-medium text-base rounded-xl bg-gradient-to-r from-[#E1000F] to-[#3333A7] shadow-lg flex justify-center items-center gap-2 whitespace-nowrap"
              >
                Edit Plan
              </button>
            </div>
          );
        })}
      </div>

      {/* Add Plan Modal */}
      {addPlanOpen && (
        <Modal
          className="w-full max-w-md h-auto lg:w-[40%] lg:h-auto max-h-[90vh] overflow-auto"
          closeModal={handleAddPlanClose}
        >
          <AddPlanModal closeModal={handleAddPlanClose} />
        </Modal>
      )}

      {/* Edit Plan Modal */}
      {editPlanOpen && (
        <Modal
          className="w-full max-w-md h-auto lg:w-[40%] lg:h-auto max-h-[90vh] overflow-auto"
          closeModal={handleEditPlanClose}
        >
          <EditPlanModal closeModal={handleEditPlanClose} />
        </Modal>
      )}
    </div>
  );
};

export default Subscriptions;
