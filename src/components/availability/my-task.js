import React, { useEffect, useState } from 'react';
import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';
import { Grid, Card, LinearProgress } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddsComponents from 'components/add_component';
import Calendar from 'react-calendar';
import Chart from 'react-apexcharts';

import { getCurrentUser } from 'helper';
import avatar1 from '../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../assets/images/avatars/avatar3.jpg';

export default function MyTasksComponent() {
  const [currentUser] = useState(getCurrentUser());
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    console.log('currentUser', currentUser);
  });

  const chartsLarge1Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: false
      },
      stacked: false
    },
    dataLabels: {
      enabled: false
    },

    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'rounded',
        columnWidth: '50%'
      }
    },
    stroke: {
      show: true,
      width: 0,
      colors: ['transparent']
    },
    colors: ['#907ff1', 'rgba(60, 68, 177, 0.27)'],
    fill: {
      opacity: 1
    },
    grid: {
      strokeDashArray: '5',
      borderColor: 'rgba(125, 138, 156, 0.3)'
    },
    legend: {
      show: false
    },
    labels: [
      '1 July',
      '2 July',
      '3 July',
      '4 July',
      '5 July',
      '6 July',
      '7 July',
      '8 July'
    ],
    xaxis: {
      crosshairs: {
        width: 1
      },
      type: 'datetime'
    },
    yaxis: {
      min: 0
    }
  };
  const chartsLarge1Data = [
    {
      name: 'All Task',
      data: [25, 40, 10, 55, 21, 40, 60, 20]
    },
    {
      name: 'Completed Task',
      data: [40, 10, 30, 35, 60, 20, 15, 33]
    }
  ];

  return (
    <>
      <div className="page-title">
        <BallotTwoToneIcon />
        <div className="title pt-3">
          <b className="heading">My Tasks</b>
        </div>
        <div className="float-right bg-white rounded-lg">
          <div className="create-task-btn btn-icon">
            <span className="p-2">Create Task</span>
            <FontAwesomeIcon icon={['fas', 'plus-circle']} />
          </div>
        </div>
      </div>
      <div className="app-inner-content-layout">
        <div className="app-inner-content-layout--main p-0">
          <Grid container spacing={2}>
            <Grid item md={4}>
              <Card className="p-3">
                <div>
                  <b className="font-size-xxl">To Do</b>
                  <div className="mt-3">
                    <div className="font-weight-bold font-size-lg">
                      Research
                    </div>
                    <p>I need 5 examples of the logo</p>
                    <div className="opacity-6">Progress</div>
                    <div className="align-box-row">
                      <div className="flex-grow-1">
                        <LinearProgress
                          variant="determinate"
                          className="progress-animated-alt progress-bar-rounded progress-sm progress-bar-dark"
                          value={0}
                        />
                      </div>
                      <div className="pl-3">0%</div>
                    </div>
                    <div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon rounded-sm">
                          <img alt="..." src={avatar1} />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon rounded-sm">
                          <img alt="..." src={avatar2} />
                        </div>
                        {/* <div className="badge badge-warning badge-circle">
                            Idle
                          </div> */}
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon rounded-sm">
                          <img alt="..." src={avatar3} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider opacity-8 my-1 mx-2" />
                <div className="mt-3">
                  <div className="font-weight-bold font-size-lg">
                    Work on Design System
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="opacity-6">Progress</div>
                  <div className="align-box-row">
                    <div className="flex-grow-1">
                      <LinearProgress
                        variant="determinate"
                        className="progress-animated-alt progress-bar-rounded progress-sm progress-bar-dark"
                        value={0}
                      />
                    </div>
                    <div className="pl-3">0%</div>
                  </div>
                  <div>
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="avatar-icon rounded-sm">
                        <img alt="..." src={avatar1} />
                      </div>
                    </div>
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="avatar-icon rounded-sm">
                        <img alt="..." src={avatar2} />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card className="p-3">
                <div>
                  <b className="font-size-xxl">In Progress</b>
                  <div className="mt-3">
                    <div className="font-weight-bold font-size-lg">
                      Create page header component
                    </div>
                    <p>I need 5 examples of the logo</p>
                    <div className="opacity-6">Progress</div>
                    <div className="align-box-row">
                      <div className="flex-grow-1">
                        <LinearProgress
                          variant="determinate"
                          className="progress-animated-alt progress-bar-rounded progress-sm progress-bar-info"
                          value={55}
                        />
                      </div>
                      <div className="pl-3">55%</div>
                    </div>
                    <div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon rounded-sm">
                          <img alt="..." src={avatar1} />
                        </div>
                      </div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon rounded-sm">
                          <img alt="..." src={avatar2} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider opacity-8 my-1 mx-2" />
                <div className="mt-3">
                  <div className="font-weight-bold font-size-lg">
                    Company Rebranding
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="opacity-6">Progress</div>
                  <div className="align-box-row">
                    <div className="flex-grow-1">
                      <LinearProgress
                        variant="determinate"
                        className="progress-animated-alt progress-bar-rounded progress-sm progress-bar-info"
                        value={20}
                      />
                    </div>
                    <div className="pl-3">20%</div>
                  </div>
                  <div>
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="avatar-icon rounded-sm">
                        <img alt="..." src={avatar1} />
                      </div>
                    </div>
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="avatar-icon rounded-sm">
                        <img alt="..." src={avatar2} />
                      </div>
                    </div>
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="avatar-icon rounded-sm">
                        <img alt="..." src={avatar3} />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card className="p-3 h-100">
                <div>
                  <b className="font-size-xxl">Done</b>
                  <div className="mt-3">
                    <div className="font-weight-bold font-size-lg">
                      Team integration workshops
                    </div>
                    <div className="bg-composed-img-5 h-180px mb-2 mt-2 rounded"></div>
                    <div className="opacity-6">Progress</div>
                    <div className="align-box-row">
                      <div className="flex-grow-1">
                        <LinearProgress
                          variant="determinate"
                          className="progress-animated-alt progress-bar-rounded progress-sm progress-bar-success"
                          value={100}
                        />
                      </div>
                      <div className="pl-3">100%</div>
                    </div>
                    <div>
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="avatar-icon rounded-sm">
                          <img alt="..." src={avatar1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Grid>
          </Grid>

          <Grid container spacing={2} className="mt-2">
            <Grid item xs={12} sm={8}>
              <Card>
                <div className="p-3">
                  <b className="font-size-xxl">Tasks</b>
                  <Chart
                    options={chartsLarge1Options}
                    series={chartsLarge1Data}
                    type="bar"
                    height={240}
                  />
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card className="h-100 task-calendar">
                <div className="p-3">
                  <Calendar
                    className="border-0 m-auto p-1"
                    defaultView="month"
                    onChange={onChange}
                    value={value}
                  />
                </div>
              </Card>
            </Grid>
          </Grid>
          {currentUser.role === 'candidate' && <AddsComponents />}
        </div>
      </div>
    </>
  );
}
