'use client';
import SiteHeader from '@/components/common/header/site.header';
import JoinRoom from '@/components/dashboard/joinroom/joinRoom.component';

const Dashboard = () => {
  return (
    <div className="w-11/12 mx-auto">
      <SiteHeader />
      {/* <Recents /> */}
      <JoinRoom />
    </div>
  );
};

export default Dashboard;
