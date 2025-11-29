import { FiCheckCircle, FiEye } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import CurrentITems from "../../../../components/CurrentItems";
import { useState } from "react";
import Modal from "../../../../components/Modal";
import DeleteModal from "../../content/components/Modals/DeleteModal";
import { Trash2 } from "lucide-react";

const Tbody = ({ currentItems, getStatusClasses, getSubscriptionClasses }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const deleteOpenModal = () => {
    setIsDeleteModal(true);
  };

  const deleteCloseModal = () => {
    setIsDeleteModal(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const statusToHideDelete = "Suspended";

  return (
    <tbody className="bg-white divide-y divide-[#F6B0B5]">
      {/* Table Body */}
      {currentItems.map((user) => (
        <tr key={user.id} className="hover:bg-pink-50 transition duration-150">
          <td className="px-4 py-3 whitespace-nowrap">
            <div className=" text-sm font-[500]  text-[#000]">{user.name}</div>
          </td>

          <td className="px-4 py-3 whitespace-nowrap">
            <span className="w-10">
              <span
                className={`px-4 py-0.5 inline-flex text-sm text-center leading-5 font-[500] rounded-full ${getStatusClasses(
                  user.status
                )}`}
              >
                {user.status}
              </span>
            </span>
          </td>

          <td className="px-4 py-3 whitespace-nowrap text-sm">
            <span
              className={`px-4 py-0.5 inline-flex text-sm  leading-5 font-[500] rounded-full ${getSubscriptionClasses(
                user.subscription
              )}`}
            >
              {user.subscription}
            </span>
          </td>

          <td className="px-4 pl-9 py-3 whitespace-nowrap text-sm  leading-5 font-[500]">
            {user.registrationDate}
          </td>

          <td className="px-4 pl-7 py-3 whitespace-nowrap text-sm  leading-5 font-[500]">
            {user.score}%
          </td>

          <td className="px-4 py-3 whitespace-nowrap text-right text-sm  leading-5 font-[500]">
            <div className="flex justify-end space-x-2">
              {/* View Details Button (Always Shown) */}
              <button
                onClick={openModal}
                title="View Details"
                className="text-gray-600 hover:text-pink-600 p-2 rounded-md hover:bg-pink-50"
                style={{ width: "40px", height: "40px" }}
              >
                <FiEye size={18} />
              </button>

              {/* Delete Button (Conditional Rendering based on status) */}
              {user.status !== statusToHideDelete && (
                <button
                  onClick={deleteOpenModal}
                  title="Delete User"
                  className="text-gray-600 hover:text-red-600 p-2 rounded-md hover:bg-red-50"
                  style={{ width: "40px", height: "40px" }}
                >
                  <Trash2 size={18} />
                </button>
              )}
            </div>
          </td>
        </tr>
      ))}

      {/* Delete Modal */}
      {isDeleteModal && (
      
        <DeleteModal isOpen={isDeleteModal} onClose={deleteCloseModal} />
      )}

      {/* Modal */}
      {isOpen && (
        <Modal
          className={"lg:!w-[40%] lg:!h-[60%]"}
          currentItems={currentItems}
          closeModal={closeModal}
        >
          <div className="flex flex-col gap-4 ">
            <div className="">
              <div className="text-[#5F0006]">
                <h2 className="font-[700] text-2xl">User Profile</h2>
                <p className="text-base text-[#F18A91]">
                  Detailed user information and activity
                </p>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <div className="bg-[#F6B0B5] p-3 rounded-full">
                  <h2 className="text-white font-[600] text-[26px]">MD</h2>
                </div>
                <div className="">
                  <h3 className="font-[700] text-xl text-[#5F0006]">
                    Kathryn Murphy
                  </h3>
                  <p className="text-base font-[500] text-[#F18A91]">
                    felicia.reid@example.com
                  </p>
                </div>
              </div>
            </div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 py-4">
  {/* Average Score */}
  <div className="bg-[#E6E6F4] p-3 rounded-xl flex flex-col items-center">
    <p className="text-sm  md:text-base font-medium text-[#F18A91]">Average Score</p>
    <h2 className="font-bold text-xl sm:text-2xl md:text-[26px] text-[#000091]">87%</h2>
  </div>

  {/* Tests Completed */}
  <div className="bg-[#FCE6E7] text-[#E7333F] p-3   rounded-xl flex flex-col items-center">
    <p className="text-sm  md:text-base font-medium text-[#F18A91]">Tests Completed</p>
    <h2 className="font-bold text-xl sm:text-2xl md:text-[26px]">47</h2>
  </div>

  {/* Study Hours */}
  <div className="bg-[#B0B0DD] p-3  rounded-xl flex flex-col items-center">
    <p className="text-sm  md:text-base font-medium text-[#F18A91]">Study Hours</p>
    <h2 className="font-bold text-xl sm:text-2xl md:text-[26px] text-[#121111]">23.5h</h2>
  </div>
</div>



            <div className="">
              <h2 className="font-[700] text-xl py-3">Recent Activity</h2>
              <div className="space-y-2.5">
                <p className="flex items-center p-2 bg-[#E6E6F4] rounded-lg gap-2">
                  <FiCheckCircle className="md:w-6 md:h-6 w-5 h-5 text-[#7373af]" />{" "}
                  {""}
                  <span className=" text-sm text-[#E7333F] font-[500]">
                    Completed Mock Test #12 - Score: 85%
                  </span>
                </p>
                <p className="flex items-center p-2 bg-[#E6E6F4] rounded-lg gap-2">
                  <FiCheckCircle className="md:w-6 md:h-6 w-5 h-5 text-[#7373af]" />{" "}
                  {""}
                  <span className=" text-sm text-[#E7333F] font-[500]">
                    Studied French History theme
                  </span>
                </p>
                <p className="flex items-center p-2 bg-[#E6E6F4] rounded-lg gap-2">
                  <FiCheckCircle className="md:w-6 md:h-6 w-5 h-5 text-[#7373af]" />{" "}
                  {""}
                  <span className=" text-sm text-[#E7333F] font-[500]">
                    Completed Mock Test #11 - Score: 78%
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* No results found */}
      {<CurrentITems currentItems={currentItems} />}
    </tbody>
  );
};

export default Tbody;
