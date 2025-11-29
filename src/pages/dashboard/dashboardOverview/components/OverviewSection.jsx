import React, { useState } from "react";
import { CgDollar } from "react-icons/cg";
import { LuVolleyball } from "react-icons/lu";
import { TbUsers } from "react-icons/tb";
import { FiChevronDown } from "react-icons/fi";
import { IoMdTrendingUp } from "react-icons/io";
import Header from "../../../../components/Header";

const revenue = [
  {
    id: 1,
    icon: <TbUsers />,
    title: "Daily Active User",
    revenue: "12.5",
    total_user: "2847",
  },
  {
    id: 2,
    icon: <CgDollar />,
    title: "Monthly Revenue",
    revenue: "28.6",
    total_user: "12,450",
  },
  {
    id: 3,
    icon: <LuVolleyball />,
    title: "Average Score",
    revenue: "5.3",
    total_user: "76.4%",
  },
];

const translations = {
  statuses: {
    active: "Last 24h",
    inactive: "Last 7 days",
    suspended: "Last 30 days",
    pending: "Last 90 days",
  },
};

const OverviewSection = () => {
  const [statusFilter, setStatusFilter] = useState("Last 24h");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleStatusChange = (event) => {
    setStatusFilter(event.target.value);
    setIsDropdownOpen(false);
  };

  const iconRotateClass = isDropdownOpen ? "rotate-180" : "rotate-0";

  return (
  <div className="text-[#121111] ">
  {/* Header + Filters */}
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mb-5 md:mb-6 lg:mb-7">
    {/* Left Title Area */}
    <Header
      heading={"Dashboard Overview"}
      paragraph={"Monitor your app performance and user engagement"}
    />

    {/* Right Filters */}
    <div className="flex gap-4 w-full md:w-auto">
      <div className="relative w-full md:w-auto">
        <select
          value={statusFilter}
          onChange={handleStatusChange}
          onFocus={() => setIsDropdownOpen(true)}
          onBlur={() => setIsDropdownOpen(false)}
          className="w-full md:w-auto h-12 appearance-none rounded-lg border border-[#F6B0B5] bg-[#fffcfc] pl-4 pr-10 text-sm md:text-base font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#F6B0B5]"
        >
          {Object.values(translations.statuses).map((status, idx) => (
            <option key={idx} value={status}>
              {status}
            </option>
          ))}
        </select>

        <FiChevronDown
          className={`pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 transition-transform duration-200 ${iconRotateClass}`}
        />
      </div>
    </div>
  </div>

  {/* Revenue Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    {revenue.map((rev) => (
      <div
        key={rev.id}
        className="col-span-1 border border-[#F6B0B5] rounded-xl p-4 sm:p-6 flex flex-col bg-white"
      >
        <div className="flex items-center justify-between">
          <p className="bg-[#E6E6F4] p-2 rounded-lg">
            {rev.icon &&
              React.cloneElement(rev.icon, {
                className: `w-6 h-6 sm:w-7 sm:h-7 ${rev.icon.props.className || ""}`,
              })}
          </p>
          <p className="text-[#EB545E] flex items-center gap-1 sm:gap-2 text-sm sm:text-lg font-medium">
            <IoMdTrendingUp className="w-4 h-4 sm:w-6 sm:h-6" /> {rev.revenue}%
          </p>
        </div>
        <div className="mt-3">
          <p className="text-sm sm:text-base text-[#EB545E] font-medium">{rev.title}</p>
          <h2 className="text-2xl sm:text-3xl font-bold">{rev.total_user}</h2>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default OverviewSection;
