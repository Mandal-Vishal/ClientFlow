import Cards from "../components/Cards";
import Greet from "../components/Greet";
import CardsWrap from "../components/CardsWrap";
import BtnBox from "../components/BtnBox";
import Recent from "../components/Recent";
import PaymentsOverview from "../components/PaymentsOverview";
import PendingTasks from "../components/PendingTasks";
import RecentActivity from "../components/RecentActivity";

const Dashboard = () => {
  return (
    <div className="flex-1 mt-12">
      <Greet />
      <CardsWrap />
      <BtnBox />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-10 py-3 ">
        <Recent />
        <PaymentsOverview />
        <PendingTasks />
        <RecentActivity />
      </div>
    </div>
  );
};

export default Dashboard;
