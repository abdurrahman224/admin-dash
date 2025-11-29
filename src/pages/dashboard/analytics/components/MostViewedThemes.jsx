import { GoChevronRight } from "react-icons/go";
import Pagination from "../../../../components/Pagination";
import { useState } from "react";
import CompletionModal from "./CompletionModal";

const fakeData = [
  {
    id: 1,
    topic: "French History",
    views: 15420,
    completion: "87",
  },
  {
    id: 2,
    topic: "Civic Responsibilities",
    views: 12460,
    completion: "72",
  },
  {
    id: 3,
    topic: "Geography of France",
    views: 10570,
    completion: "92",
  },
  {
    id: 4,
    topic: "Culture & Arts",
    views: 8720,
    completion: "68",
  },
  {
    id: 5,
    topic: "Political System",
    views: 6920,
    completion: "75",
  },
  {
    id: 6,
    topic: "French Revolution",
    views: 18340,
    completion: "93",
  },
  {
    id: 7,
    topic: "European Union Basics",
    views: 11230,
    completion: "70",
  },
  {
    id: 8,
    topic: "French Language Basics",
    views: 9640,
    completion: "81",
  },
  {
    id: 9,
    topic: "Modern French Economy",
    views: 7430,
    completion: "66",
  },
  {
    id: 10,
    topic: "World Wars & France",
    views: 15680,
    completion: "89",
  },
];

const MostViewedThemes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 6;

  const totalResults = fakeData.length;
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  const indexOfLastItem = currentPage * resultsPerPage;
  const indexOfFirstItem = indexOfLastItem - resultsPerPage;
  const currentItems = fakeData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="text-[#121111] border border-[#F6B0B5] rounded-xl bg-white px-4 sm:px-6 md:px-8 py-6 md:py-8">
  {/* Header */}
  <h2 className="text-xl sm:text-2xl font-bold text-[#5F0006] mb-4">
    Most Viewed Themes
  </h2>

  {/* Table / List */}
  <div className="space-y-4 overflow-x-auto">
    {currentItems.map((data) => (
      <div
        key={data.id}
        className="bg-[#F9FAFB] p-3 sm:p-4 rounded-lg flex justify-between items-center"
      >
        {/* Left section */}
        <div className="flex gap-3">
          <h2 className="flex items-center gap-1 font-bold text-3xl text-[#F18A91]">
            #{data.id}
          </h2>
          <div className="flex flex-col">
            <h3 className="text-base sm:text-lg text-[#7C0008] font-semibold">
              {data.topic}
            </h3>
            <p className="text-sm sm:text-base text-[#EB545E]">{data.views} views</p>
          </div>
        </div>

        {/* Right section */}
        <div>
          <div
            onClick={handleOpenModal}
            className="flex items-center cursor-pointer gap-2 md:gap-3 lg:gap-4 text-[#EB545E]"
          >
            <div className="flex flex-col">
              <h3 className="text-base sm:text-lg text-[#E7333F] font-semibold">
                {data.completion}%
              </h3>
              <p className="text-sm sm:text-base">completion</p>
            </div>
            <GoChevronRight className="w-6 h-6 md:w-7 md:h-7" />
          </div>
        </div>
      </div>
    ))}

    {isOpen && <CompletionModal handleCloseModal={handleCloseModal} />}

    {/* Pagination */}
    <Pagination
      currentPage={currentPage}
      handleNext={handleNext}
      handlePrevious={handlePrevious}
      indexOfFirstItem={indexOfFirstItem}
      indexOfLastItem={indexOfLastItem}
      totalPages={totalPages}
      totalResults={totalResults}
    />
  </div>
</div>

  );
};

export default MostViewedThemes;
