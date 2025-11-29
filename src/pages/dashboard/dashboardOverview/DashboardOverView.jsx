import OverviewSecondSection from "./components/OverviewSecondSection";
import OverviewSection from "./components/OverviewSection";
import TopPerformingThemes from "./components/TopPerformingThemes";

const DashboardOverView = () => {
  return (
    <div className="">
      <OverviewSection />
      <OverviewSecondSection />
      <TopPerformingThemes />
    </div>
  );
};

export default DashboardOverView;
