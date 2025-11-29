import Modal from "../../../../components/Modal";

const data = [
  {
    value: "1999",
    percentage: 35,
    isHighest: true,
    color: "text-white bg-blue-900",
  },
  {
    value: "1750",
    percentage: 28,
    isHighest: false,
    color: "text-gray-700 bg-gray-300",
  },
  {
    value: "1620",
    percentage: 22,
    isHighest: false,
    color: "text-gray-700 bg-gray-300",
  },
  {
    value: "1565",
    percentage: 18,
    isHighest: false,
    color: "text-gray-700 bg-gray-300",
  },
  {
    value: "1432",
    percentage: 14,
    isHighest: false,
    color: "text-gray-700 bg-gray-300",
  },
];

const DetailsModal = ({ fakeData, handleClose }) => {
  return (
    <Modal
      // className={"xl:h-[80vh] md:h-[58vh]"}
      className={"lg:!w-[40%] lg:!h-[65%]"}
      fakeData={fakeData}
      closeModal={handleClose}
    >
      <div className="flex flex-col gap-4">
        <div className="text-[#5F0006]">
          <h2 className="font-[700] text-2xl">Question Details</h2>
          <p className="text-base text-[#F18A91]">
            Detailed statistics and user feedback for this question
          </p>
        </div>

        <div className="">
          <div className="text-[#5F0006]">
            <h2 className="font-[700] text-2xl">Question</h2>
            <p className="text-base text-[#F18A91] mb-1">
              In what year did the French Revolution begin?
            </p>
          </div>

          <div className="bg-[#FCE6E7] text-[#E7333F] p-5 rounded-xl">
            <p className="text-base font-[500]">Completion</p>
            <h2 className="font-[700] text-[26px]">87%</h2>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-pink-200 shadow-md">
          <h2 className="font-[500] text-[#5F0006] text-lg mb-2">
            Answer Distribution
          </h2>
          <div className="space-y-2">
            {data.map((item) => (
              <div key={item.value} className="flex items-center">
                {/* Bar container with absolute positioning for the bar and text */}
                <div className="relative flex-grow h-6 bg-gray-100 rounded">
                  {/* Bar (width driven by percentage) */}
                  <div
                    className={`absolute left-0 top-0 h-full rounded ${
                      item.isHighest ? "bg-blue-900" : "bg-gray-300"
                    }`}
                    style={{ width: `${item.percentage}%` }}
                  >
                    {/* Answer Value inside the bar */}
                    <span
                      className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-sm font-semibold ${
                        item.isHighest ? "text-white" : "text-[#E7333F]"
                      }`}
                    >
                      {item.value}
                    </span>
                  </div>
                </div>
                {/* Percentage Text on the right */}
                <span className="ml-3 w-10 text-right text-[#5F0006] font-semibold">
                  {item.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DetailsModal;
