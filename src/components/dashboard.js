import React from 'react';

import DashboardMonitoring2 from './all_dashboards/dashboard2.js';

import DashboardMonitoring5 from './all_dashboards/dashboard5.js';
import DashboardMonitoring6 from './all_dashboards/dashboard6.js';
import DashboardIcon from '@material-ui/icons/Dashboard';

export default function DashboardMonitoring() {
  return (
    <>
      <div className="page-title">
        <DashboardIcon />
        <div className="title">
          <h5 className="heading">This is your Dashboard</h5>
          <p>Private to you</p>
        </div>
      </div>

      {/* <DashboardMonitoring1 /> */}
      <DashboardMonitoring2 />
      {/* <DashboardMonitoring3 /> */}
      {/* <DashboardMonitoring4 /> */}
      <DashboardMonitoring6 />
      <DashboardMonitoring5 />
    </>
  );
}
