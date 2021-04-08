import React, { useState } from 'react';

import DashboardMonitoring2 from './all_dashboards/dashboard2.js';
import { getCurrentUser } from '../helper';

import DashboardMonitoring5 from './all_dashboards/dashboard5.js';
import DashboardMonitoring6 from './all_dashboards/dashboard6.js';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AgencyDashboard from './all_dashboards/agency-dashboard';
import CompanyDashboard from './all_dashboards/compnay-dashboard';

export default function DashboardMonitoring() {
  const [currentUser] = useState(getCurrentUser());
  return (
    <>
      <div className="page-title">
        <DashboardIcon />
        <div className="title">
          <h5 className="heading">This is your Dashboard</h5>
          <p>Private to you</p>
        </div>
      </div>

      {currentUser.role === 'candidatess' && (
        <div>
          <DashboardMonitoring2 />
          <DashboardMonitoring6 />
          <DashboardMonitoring5 />
        </div>
      )}

      {currentUser.role === 'company' && <CompanyDashboard />}

      {currentUser.role === 'agency' && <AgencyDashboard />}
    </>
  );
}
