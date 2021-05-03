import React, { useEffect, useState } from 'react';
import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';
import { Grid, Card, Button } from '@material-ui/core';
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
              <Card className="p-3 h-100" style={{ minHeight: '440px' }}>
                <div>
                  <b className="font-size-xxl">To Do</b>
                  <div className="mt-3">
                    <Grid container spacing={0}>
                      <Grid item md={9}>
                        <div className="font-weight-bold font-size-lg">
                          Request for information
                        </div>
                      </Grid>
                      <Grid item md={3}>
                        <Button
                          size="small"
                          className="btn-primary ml-3"
                          variant="text">
                          View
                        </Button>
                      </Grid>
                    </Grid>
                    <div className="mb-1 text-black text-black-50">
                      4 new requests pending
                    </div>
                    <div className="divider opacity-8 my-1 mx-2" />
                    <Grid container spacing={0}>
                      <Grid item md={9}>
                        <div className="font-weight-bold font-size-lg">
                          Pending IR35 questionnaire
                        </div>
                      </Grid>
                      <Grid item md={3}>
                        <Button
                          size="small"
                          className="btn-primary ml-3"
                          variant="text">
                          View
                        </Button>
                      </Grid>
                    </Grid>
                    <div className="mb-1 text-black text-black-50">
                      3 new questionnaires pending
                    </div>
                  </div>
                </div>
                <div className="divider opacity-8 my-1 mx-2" />
                <div className="mt-3">
                  <Grid container spacing={0}>
                    <Grid item md={9}>
                      {currentUser.role === 'candidate' && (
                        <div className="font-weight-bold font-size-lg">
                          Interview Requests
                        </div>
                      )}
                      {(currentUser.role === 'agency' ||
                        currentUser.role === 'company') && (
                        <div className="font-weight-bold font-size-lg">
                          Pending Placements
                        </div>
                      )}
                    </Grid>
                    <Grid item md={3}>
                      <Button
                        size="small"
                        className="btn-primary ml-3"
                        variant="text">
                        View
                      </Button>
                    </Grid>
                  </Grid>
                  <div className="mb-1 text-black text-black-50">
                    2 new requests pending
                  </div>
                  <div className="divider opacity-8 my-1 mx-2 mb-2" />
                  <Grid container spacing={0}>
                    <Grid item md={9}>
                      <div className="font-weight-bold font-size-lg">
                        Connection Requests{' '}
                      </div>
                    </Grid>
                    <Grid item md={3}>
                      <Button
                        size="small"
                        className="btn-primary ml-3"
                        variant="text">
                        View
                      </Button>
                    </Grid>
                  </Grid>
                  <div className="mb-1 text-black text-black-50">
                    10 new requests
                  </div>
                  <div className="card-footer text-center mt-3">
                    <Button size="small" className="btn-primary" variant="text">
                      View more
                    </Button>
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card className="p-3 h-100" style={{ minHeight: '440px' }}>
                <b className="font-size-xxl">Follow up</b>
                <div className="mt-3">
                  <Grid container spacing={0}>
                    <Grid item md={7}>
                      <div className="font-weight-bold font-size-md">
                        IR35 questionnaire submitted
                      </div>
                    </Grid>
                    <Grid item md={5}>
                      <Button
                        size="small"
                        className="btn-primary ml-3"
                        variant="text">
                        Follow up
                      </Button>
                    </Grid>
                  </Grid>
                  <div className="mb-1 text-black text-black-50">
                    2 questionnaire submitted
                  </div>
                  <div className="divider opacity-8 my-1 mx-2 mb-2" />
                  {/* <p>5 IR35 queries are pending</p> */}
                  <Grid container spacing={0}>
                    <Grid item md={7}>
                      <div className="font-weight-bold font-size-lg">
                        IR35 queries
                      </div>
                    </Grid>
                    <Grid item md={5}>
                      <Button
                        size="small"
                        className="btn-primary ml-3"
                        variant="text">
                        Follow up
                      </Button>
                    </Grid>
                  </Grid>
                  <div className="mb-1 text-black text-black-50">
                    1 pending query
                  </div>
                  <div className="divider opacity-8 my-1 mx-2 mb-2" />
                  <Grid container spacing={0}>
                    <Grid item md={7}>
                      {currentUser.role === 'candidate' && (
                        <div className="font-weight-bold font-size-lg">
                          Pending Placements
                        </div>
                      )}
                      {(currentUser.role === 'agency' ||
                        currentUser.role === 'company') && (
                        <div className="font-weight-bold font-size-lg">
                          Interview request sent
                        </div>
                      )}
                    </Grid>
                    <Grid item md={5}>
                      <Button
                        size="small"
                        className="btn-primary ml-3"
                        variant="text">
                        Follow up
                      </Button>
                    </Grid>
                  </Grid>
                  <div className="mb-1 text-black text-black-50">
                    2 pending placements
                  </div>
                  <div className="divider opacity-8 my-1 mx-2 mb-2" />
                  <Grid container spacing={0}>
                    <Grid item md={7}>
                      {currentUser.role === 'candidate' && (
                        <div className="font-weight-bold font-size-lg">
                          Job Applications
                        </div>
                      )}
                      {(currentUser.role === 'agency' ||
                        currentUser.role === 'company') && (
                        <div className="font-weight-bold font-size-lg">
                          CV submitted
                        </div>
                      )}
                    </Grid>
                    <Grid item md={5}>
                      <Button
                        size="small"
                        className="btn-primary ml-3"
                        variant="text">
                        Follow up
                      </Button>
                    </Grid>
                  </Grid>
                  <div className="mb-1 text-black text-black-50">
                    5 applications
                  </div>
                  <div className="card-footer py-3 text-center">
                    <Button size="small" className="btn-primary" variant="text">
                      View more
                    </Button>
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card className="p-3 h-100" style={{ minHeight: '440px' }}>
                <div>
                  <b className="font-size-xxl">Today's Task Progress</b>
                  <div className="">
                    <GaugeChart
                      hideText
                      id="chartsGauges2A"
                      nrOfLevels={6}
                      colors={['#1bc943', '#f4772e', '#f83245']}
                      arcWidth={0.3}
                      percent={0.27}
                    />
                  </div>
                  <div className="card-content-overlay text-center">
                    <div className="mb-1 text-black text-black-50">
                      2 Tasks Completed <br />
                      10 Tasks Started <br />5 Tasks Pending
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="text-center">
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
