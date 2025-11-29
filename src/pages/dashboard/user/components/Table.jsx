import { useState, useEffect } from "react";
import Thead from "./Thead";
import Tbody from "./Tbody";
import ResponsiveTable from "../../../../components/ResponsiveTable";
import Pagination from "../../../../components/Pagination";

const userData = [
  {
    id: 1,
    name: "Floyd Miles",
    email: "floyd.m@example.com",
    status: "Active",
    subscription: "Premium",
    registrationDate: "2024-01-15",
    score: 87,
    isChecked: false,
  },
  {
    id: 2,
    name: "Courtney Henry",
    email: "courtney.h@example.com",
    status: "Active",
    subscription: "Premium",
    registrationDate: "2024-01-15",
    score: 72,
    isChecked: false,
  },
  {
    id: 3,
    name: "Robert Fox",
    email: "robert.f@example.com",
    status: "Inactive",
    subscription: "Free",
    registrationDate: "2024-01-15",
    score: 56,
    isChecked: false,
  },
  {
    id: 4,
    name: "Darrell Steward",
    email: "darrell.s@example.com",
    status: "Active",
    subscription: "Basic",
    registrationDate: "2024-01-15",
    score: 92,
    isChecked: false,
  },
  {
    id: 5,
    name: "Ronald Richards",
    email: "ronald.r@example.com",
    status: "Active",
    subscription: "Basic",
    registrationDate: "2024-01-15",
    score: 78,
    isChecked: false,
  },
  {
    id: 6,
    name: "Marvin McKinney",
    email: "marvin.m@example.com",
    status: "Active",
    subscription: "Premium",
    registrationDate: "2024-01-15",
    score: 68,
    isChecked: false,
  },
  {
    id: 7,
    name: "Jane Cooper",
    email: "jane.c@example.com",
    status: "Active",
    subscription: "Premium",
    registrationDate: "2024-01-16",
    score: 85,
    isChecked: false,
  },
  {
    id: 8,
    name: "Wade Warren",
    email: "wade.w@example.com",
    status: "Inactive",
    subscription: "Free",
    registrationDate: "2024-01-16",
    score: 45,
    isChecked: false,
  },
  {
    id: 9,
    name: "Esther Howard",
    email: "esther.h@example.com",
    status: "Active",
    subscription: "Basic",
    registrationDate: "2024-01-17",
    score: 81,
    isChecked: false,
  },
  {
    id: 10,
    name: "Cameron Williamson",
    email: "cameron.w@example.com",
    status: "Active",
    subscription: "Premium",
    registrationDate: "2024-01-17",
    score: 94,
    isChecked: false,
  },
  {
    id: 11,
    name: "Brooklyn Simmons",
    email: "brooklyn.s@example.com",
    status: "Active",
    subscription: "Basic",
    registrationDate: "2024-01-18",
    score: 76,
    isChecked: false,
  },
  {
    id: 12,
    name: "Leslie Alexander",
    email: "leslie.a@example.com",
    status: "Inactive",
    subscription: "Free",
    registrationDate: "2024-01-18",
    score: 52,
    isChecked: false,
  },
  {
    id: 13,
    name: "Guy Hawkins",
    email: "guy.h@example.com",
    status: "Active",
    subscription: "Premium",
    registrationDate: "2024-01-19",
    score: 89,
    isChecked: false,
  },
  {
    id: 14,
    name: "Kristin Watson",
    email: "kristin.w@example.com",
    status: "Active",
    subscription: "Basic",
    registrationDate: "2024-01-19",
    score: 73,
    isChecked: false,
  },
  {
    id: 15,
    name: "Kathryn Murphy",
    email: "felicia.reid@example.com",
    status: "Active",
    subscription: "Premium",
    registrationDate: "2024-01-20",
    score: 87,
    isChecked: false,
  },
  {
    id: 16,
    name: "Kathryn Murphy",
    email: "felicia.reid@example.com",
    status: "Suspended",
    subscription: "Premium",
    registrationDate: "2024-01-20",
    score: 87,
    isChecked: false,
  },
];

const getStatusClasses = (status) => {
  switch (status) {
    case "Active":
      return "bg-[#000091] text-[#fff]";
    case "Inactive":
      return "bg-[#E1000F] text-[#fff]";
    case "Suspended":
      return "bg-[#E1000F] text-[#fff]";
    default:
      return "bg-gray-100 text-[#fff]";
  }
};

const getSubscriptionClasses = (subscription) => {
  switch (subscription) {
    case "Premium":
      return "bg-[#5454B5] text-[#fff]";
    case "Basic":
      return "bg-[#B0B0DD] text-[#000]";
    case "Free":
      return "bg-[#F6B0B5] text-[#000]";
    default:
      return "bg-gray-100 text-white";
  }
};

const Table = ({ statusFilterOne, statusFilterTwo, searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 6;

  const filteredData = userData.filter((user) => {
    const statusMatch =
      statusFilterOne === "All Status" ||
      (statusFilterOne === "Active" && user.status === "Active") ||
      (statusFilterOne === "Inactive" && user.status === "Inactive") ||
      (statusFilterOne === "Suspended" && user.status === "Suspended");

    const subscriptionMatch =
      statusFilterTwo === "All Plans" || user.subscription === statusFilterTwo;

    const searchLower = searchQuery.toLowerCase();
    const searchMatch =
      user.name.toLowerCase().includes(searchLower) ||
      user.email.toLowerCase().includes(searchLower) ||
      user.id.toString().includes(searchLower);

    return statusMatch && subscriptionMatch && searchMatch;
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [statusFilterOne, statusFilterTwo, searchQuery]);

  const totalResults = filteredData.length;
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  const indexOfLastItem = currentPage * resultsPerPage;
  const indexOfFirstItem = indexOfLastItem - resultsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

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
    <div className="bg-white">
      <ResponsiveTable />
      <div className="bg-white rounded-xl shadow-none">
        <div className="overflow-x-auto table-wrapper">
          <table className="min-w-full divide-y divide-[#F6B0B5] border-b border-[#F6B0B5]">
            <Thead />
            <Tbody
              currentItems={currentItems}
              getSubscriptionClasses={getSubscriptionClasses}
              getStatusClasses={getStatusClasses}
            />
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

export default Table;
