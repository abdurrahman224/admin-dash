import { useState } from "react";
import Pagination from "../../../../components/Pagination";
import ResponsiveTable from "./../../../../components/ResponsiveTable";
import Tbody from "./Tbody";
import Thead from "./Thead";

const fakeData = [
  {
    id: "Q-2847",
    category: "French History",
    question: "In what year did the French Revolution begin?",
    success_rate: "68%",
    attempts: 2847,
  },
  {
    id: "Q-2844",
    category: "Geography",
    question: "Which river flows through Paris?",
    success_rate: "52%",
    attempts: 1923,
  },
  {
    id: "Q-2842",
    category: "Forest River",
    question: "How long is a French presidential term?",
    success_rate: "45%",
    attempts: 3104,
  },
  {
    id: "Q-2847-A",
    category: "French History",
    question: "In what year did the French Revolution begin?",
    success_rate: "68%",
    attempts: 2847,
  },
  {
    id: "Q-2844-A",
    category: "Geography",
    question: "Which river flows through Paris?",
    success_rate: "52%",
    attempts: 1923,
  },
  {
    id: "Q-2842-A",
    category: "Forest River",
    question: "How long is a French presidential term?",
    success_rate: "45%",
    attempts: 3104,
  },
  {
    id: "Q-2847-B",
    category: "French History",
    question: "In what year did the French Revolution begin?",
    success_rate: "68%",
    attempts: 2847,
  },
  {
    id: "Q-2844-B",
    category: "Geography",
    question: "Which river flows through Paris?",
    success_rate: "52%",
    attempts: 1923,
  },
  {
    id: "Q-2842-B",
    category: "Forest River",
    question: "How long is a French presidential term?",
    success_rate: "45%",
    attempts: 3104,
  },
  {
    id: "Q-2847-C",
    category: "French History",
    question: "In what year did the French Revolution begin?",
    success_rate: "68%",
    attempts: 2847,
  },
];

const MostFailedQuestions = () => {
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

  return (
    <div className="text-[#121111] border border-[#F6B0B5] rounded-xl md:p-5 p-4 bg-white lg:mb-12 md:mb-10 sm:mb-8 mb-6">
      <h2 className="text-xl sm:text-2xl font-bold text-[#5F0006] py-2 my-2">Most Failed Questions</h2>
      <ResponsiveTable />
      <div className="bg-white rounded-xl shadow-none">
        <div className="overflow-x-auto table-wrapper">
          <table className="min-w-full divide-y divide-[#F6B0B5] border-b border-[#F6B0B5]">
            <Thead />
            <Tbody fakeData={currentItems} />
          </table>
        </div>
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

export default MostFailedQuestions;
