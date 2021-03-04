import React from 'react';

import { PageTitle } from '../layout-components';

import DashboardMonitoring1 from './all_dashboards/dashboard1.js';
import DashboardMonitoring2 from './all_dashboards/dashboard2.js';
import DashboardMonitoring3 from './all_dashboards/dashboard3.js';
import DashboardMonitoring4 from './all_dashboards/dashboard4.js';
import DashboardMonitoring5 from './all_dashboards/dashboard5.js';
import DashboardMonitoring6 from './all_dashboards/dashboard6.js';

import {handleUser} from '../helper'

export default function DashboardMonitoring() {
  return (
    <>
      <PageTitle
        titleHeading="Voxpro"
        titleDescription= {handleUser().user.role} 
      />

      {/* <DashboardMonitoring1 /> */}
      {/* <DashboardMonitoring2 />
      <DashboardMonitoring3 />
      <DashboardMonitoring4 />
      <DashboardMonitoring5 />
      <DashboardMonitoring6 /> */}
    </>
  );
}
