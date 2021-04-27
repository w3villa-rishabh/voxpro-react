import React, { useEffect, useState } from 'react';
import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';
import { Grid, Card, LinearProgress, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddsComponents from 'components/add_component';
import Calendar from 'react-calendar';
import Chart from 'react-apexcharts';
import GaugeChart from 'react-gauge-chart';

import { getCurrentUser } from 'helper';

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
              <Card className="p-3" style={{ minHeight: '410px' }}>
                <div>
                  <b className="font-size-xxl">To Do</b>
                  <div className="mt-3">
                    <Grid container spacing={0}>
                      <Grid item md={7}>
                        <div className="font-weight-bold font-size-lg">
                          Request for information
                        </div>
                      </Grid>
                      <Grid item md={5}>
                        <Button
                          size="small"
                          className="btn-outline-second ml-5"
                          variant="text">
                          View
                        </Button>
                      </Grid>
                    </Grid>
                    <div className="opacity-6">Pending IR35 questionnaire</div>
                    <div className="align-box-row">
                      <div className="flex-grow-1">
                        <LinearProgress
                          variant="determinate"
                          className="progress-animated-alt progress-bar-rounded progress-sm progress-bar-dark"
                          value={10}
                        />
                      </div>
                      <div className="pl-3">10</div>
                    </div>
                  </div>
                </div>
                <div className="divider opacity-8 my-1 mx-2" />
                <div className="mt-3">
                  <Grid container spacing={0}>
                    <Grid item md={7}>
                      <div className="font-weight-bold font-size-lg">
                        Interview Requests
                      </div>
                    </Grid>
                    <Grid item md={5}>
                      <Button
                        size="small"
                        className="btn-outline-second ml-5"
                        variant="text">
                        View
                      </Button>
                    </Grid>
                  </Grid>
                  <p>There are total 4 Interviews requests pending for you.</p>
                  <div className="divider opacity-8 my-1 mx-2 mb-2" />
                  <Grid container spacing={0}>
                    <Grid item md={7}>
                      <div className="font-weight-bold font-size-lg">
                        Connection Requests{' '}
                      </div>
                    </Grid>
                    <Grid item md={5}>
                      <Button
                        size="small"
                        className="btn-outline-second ml-5"
                        variant="text">
                        View
                      </Button>
                    </Grid>
                  </Grid>
                  {/* <div className="align-box-row">
                    <div className="flex-grow-1">
                      <LinearProgress
                        variant="determinate"
                        className="progress-animated-alt progress-bar-rounded progress-sm progress-bar-dark"
                        value={0}
                      />
                    </div>
                    <div className="pl-3">0%</div>
                  </div> */}
                  <div className="card-footer text-center">
                    <Button
                      size="small"
                      className="btn-outline-second"
                      variant="text">
                      View more
                    </Button>
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card className="p-3" style={{ minHeight: '410px' }}>
                <div>
                  <b className="font-size-xxl">Follow up</b>
                  <div className="mt-3">
                    <Grid container spacing={0}>
                      <Grid item md={7}>
                        <div className="font-weight-bold font-size-lg">
                          IR35 Queries
                        </div>
                      </Grid>
                      <Grid item md={5}>
                        <Button
                          size="small"
                          className="btn-outline-second ml-5"
                          variant="text">
                          View
                        </Button>
                      </Grid>
                    </Grid>
                    {/* <p>5 IR35 queries are pending</p> */}
                    <div className="opacity-6">IR35 Submitted</div>
                    <div className="align-box-row">
                      <div className="flex-grow-1">
                        <LinearProgress
                          variant="determinate"
                          className="progress-animated-alt progress-bar-rounded progress-sm progress-bar-info"
                          value={50}
                        />
                      </div>
                      <div className="pl-3">10</div>
                    </div>
                  </div>
                </div>
                <div className="divider opacity-8 my-1 mx-2" />
                <div className="mt-3">
                  <Grid container spacing={0}>
                    <Grid item md={7}>
                      <div className="font-weight-bold font-size-lg">
                        Pending Placements follow up
                      </div>
                    </Grid>
                    <Grid item md={5}>
                      <Button
                        size="small"
                        className="btn-outline-second ml-5"
                        variant="text">
                        View
                      </Button>
                    </Grid>
                  </Grid>
                  <p>There are total 4 pending placements follow up.</p>
                  <div className="divider opacity-8 my-1 mx-2 mb-2" />
                  <Grid container spacing={0}>
                    <Grid item md={7}>
                      <div className="font-weight-bold font-size-lg">
                        Saved jobs due to expire{' '}
                      </div>
                    </Grid>
                    <Grid item md={5}>
                      <Button
                        size="small"
                        className="btn-outline-second ml-5"
                        variant="text">
                        View
                      </Button>
                    </Grid>
                  </Grid>
                  <div className="card-footer py-3 text-center">
                    <Button
                      size="small"
                      className="btn-outline-second"
                      variant="text">
                      View more
                    </Button>
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card className="p-3 h-100" style={{ minHeight: '410px' }}>
                <div>
                  <b className="font-size-xxl">Task Progress</b>
                  <div className="mt-3">
                    {/* <div className="d-flex align-items-center">
                      <div className="d-40 btn-icon rounded-circle bg-first text-white text-center font-size-lg mr-3">
                        <FontAwesomeIcon icon={['far', 'user']} />
                      </div>
                      <b>Profile Views</b>
                    </div> */}
                    <GaugeChart
                      hideText
                      id="chartsGauges2A"
                      nrOfLevels={6}
                      colors={['#1bc943', '#f4772e', '#f83245']}
                      arcWidth={0.3}
                      percent={0.27}
                    />
                  </div>
                  <div className="divider"></div>
                  <div className="text-center mt-3">
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="active m-3 btn-input-select">
                      {/* <div className="selected-icon">
                        <FontAwesomeIcon icon={['fas', 'check']} />
                      </div> */}
                      <div className="d-30 text-white d-flex align-items-center justify-content-center rounded-pill bg-warning">
                        <FontAwesomeIcon icon={['fas', 'comments']} />
                      </div>
                      <div className="font-weight-bold mt-2">Messages</div>
                      <div className="opacity-6">10 new</div>
                    </a>
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
                  <div className="text-center p-3">
                    <Grid container spacing={0} className="mt-2">
                      <Grid item md={6}>
                        <div className="badge bg-col">&nbsp;</div>
                        <span className="pos ml-2">Outstanding Tasks</span>
                      </Grid>
                      <Grid item md={5} className="ml-5 text-left">
                        <div>
                          <div className="badge bg-col2 ml-2">&nbsp;</div>
                          <span className="pos ml-2">Completed Tasks</span>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
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
