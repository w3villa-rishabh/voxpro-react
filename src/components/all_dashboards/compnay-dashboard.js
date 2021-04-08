import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Card,
  Button,
  CardContent,
  Table,
  TextField,
  LinearProgress,
  Tooltip
} from '@material-ui/core';

import { connect } from 'react-redux';
import { setHeaderDrawerToggle } from '../../reducers/ThemeOptions';
import Chart from 'react-apexcharts';
import PerfectScrollbar from 'react-perfect-scrollbar';
import clsx from 'clsx';

import avatar3 from '../../assets/images/avatars/avatar3.jpg';
import avatar7 from '../../assets/images/avatars/avatar7.jpg';

import people2 from '../../assets/images/stock-photos/people-3.jpg';
import people1 from '../../assets/images/stock-photos/people-2.jpg';

const CompanyDashboard = (props) => {
  const options = {
    tooltip: {
      enabled: false,
      enabledOnSeries: undefined,
      shared: false,
      followCursor: false,
      intersect: false,
      inverseOrder: false,
      custom: undefined,
      fillSeriesColor: false,
      theme: false,
      style: {
        fontSize: '12px',
        fontFamily: undefined
      },
      onDatasetHover: {
        highlightDataSeries: false
      },
      x: {
        show: false,
        format: 'dd MMM',
        formatter: undefined
      },
      y: {
        formatter: undefined,
        title: {
          formatter: (seriesName) => seriesName
        }
      },
      z: {
        formatter: undefined,
        title: 'Size: '
      },
      marker: {
        show: false
      }
    },
    colors: ['#7189da'],
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
        endingShape: 'arrow'
      }
    },
    stroke: {
      width: [4, 0, 0]
    },
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    markers: {
      size: 6,
      strokeWidth: 3,
      fillOpacity: 0,
      strokeOpacity: 0,
      hover: {
        size: 8
      }
    },
    yaxis: {
      tickAmount: 5,
      min: 0,
      max: 100
    },
    grid: {
      strokeDashArray: '5',
      borderColor: 'rgba(125, 138, 156, 0.3)',
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    }
  };

  const series = [
    {
      data: [30, 40, 25, 50, 49, 21, 70, 51]
    }
  ];

  const options1 = {
    tooltip: {
      enabled: false,
      enabledOnSeries: undefined,
      shared: false,
      followCursor: false,
      intersect: false,
      inverseOrder: false,
      custom: undefined,
      fillSeriesColor: false,
      theme: false,
      style: {
        fontSize: '12px',
        fontFamily: undefined
      },
      onDatasetHover: {
        highlightDataSeries: false
      },
      x: {
        show: false,
        format: 'dd MMM',
        formatter: undefined
      },
      y: {
        formatter: undefined,
        title: {
          formatter: (seriesName) => seriesName
        }
      },
      z: {
        formatter: undefined,
        title: 'Size: '
      },
      marker: {
        show: false
      }
    },
    colors: ['#f83245'],
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
        endingShape: 'arrow'
      }
    },
    stroke: {
      width: [4, 0, 0]
    },
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    markers: {
      size: 6,
      strokeWidth: 3,
      fillOpacity: 0,
      strokeOpacity: 0,
      hover: {
        size: 8
      }
    },
    yaxis: {
      tickAmount: 5,
      min: 0,
      max: 100
    },
    grid: {
      strokeDashArray: '5',
      borderColor: 'rgba(125, 138, 156, 0.3)',
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    }
  };

  const series1 = [
    {
      data: [30, 40, 25, 50, 49, 21, 70, 51]
    }
  ];

  const options2 = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
        endingShape: 'arrow'
      }
    },
    stroke: {
      width: [4, 0, 0]
    },
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    markers: {
      size: 6,
      strokeWidth: 3,
      fillOpacity: 0,
      strokeOpacity: 0,
      hover: {
        size: 8
      }
    },
    yaxis: {
      tickAmount: 5,
      min: 0,
      max: 100
    },
    grid: {
      strokeDashArray: '5',
      borderColor: 'rgba(125, 138, 156, 0.3)',
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    }
  };
  const series2 = [44, 55];

  const [inputBg, setInputBg] = useState(false);
  const toggleInputBg = () => setInputBg(!inputBg);

  const { headerDrawerToggle, setHeaderDrawerToggle } = props;

  const toogleHeaderDrawer = () => {
    setHeaderDrawerToggle(!headerDrawerToggle);
  };

  const { headerSearchHover, setHeaderSearchHover } = props;

  const toggleHeaderSearchHover = () => {
    setHeaderSearchHover(!headerSearchHover);
  };

  return (
    <>
      <div className="mb-spacing-2">
        <Grid container spacing={2} className="mb-3">
          <Grid item xs={12} sm={3}>
            <Card className="bg-serious-blue text-center  p-3">
              <h5 className="font-weight-bold font-size-lg color-white mb-0">
                1,658
              </h5>
              <p className="opacity-8 mt-3 color-white">Live jobs</p>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card className="bg-tempting-azure text-center p-3">
              <h5 className="font-weight-bold font-size-lg color-white mb-0">
                550+
              </h5>
              <p className="opacity-8 mt-3 color-white">Offer</p>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card className="bg-ripe-malin text-center  p-3">
              <h5 className="font-weight-bold font-size-lg color-white mb-0">
                5,657
              </h5>
              <p className="opacity-8 mt-3 color-white">
                Placements outstanding
              </p>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card className="bg-sunny-morning text-center p-3">
              <h5 className="font-weight-bold font-size-lg color-white mb-0">
                26+
              </h5>
              <p className="opacity-8 mt-3 color-white">Task</p>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card className="card-box p-4 text-center h-100">
              {/* <div className="card-tr-actions">
                <Button
                  variant="text"
                  className="p-0 d-30 border-0 btn-transition-none text-primary"
                  disableRipple>
                  <FontAwesomeIcon
                    icon={['fas', 'ellipsis-h']}
                    className="font-size-lg"
                  />
                </Button>
              </div> */}
              <Grid container spacing={0}>
                <Grid
                  item
                  md={6}
                  className="d-flex justify-content-center pb-4 pb-md-0 mb-4 mb-md-0">
                  <div className="divider-v divider-v-md" />
                  <div>
                    <div className="line-height-normal d-flex align-items-center justify-content-center text-uppercase text-black-50 pb-3">
                      <span className="font-weight-bold text-primary font-size-xs">
                        New Connections
                      </span>
                    </div>
                    <div className="d-flex justify-content-center">
                      <Chart
                        options={options2}
                        series={series2}
                        type="donut"
                        width="210"
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item md={6} className="justify-content-center pl-4">
                  <div className="line-height-normal d-flex align-items-center justify-content-center text-uppercase text-black-50 pb-3">
                    <span className="font-weight-bold text-primary font-size-xs">
                      Recent Connections
                    </span>
                  </div>
                  <div className="mb-4">
                    <div className="line-height-1">
                      <span className="font-size-lg font-weight-bold pr-3">
                        54,126
                      </span>
                      <span className="text-black-50">dribbble.com</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="flex-grow-1">
                        <LinearProgress
                          variant="determinate"
                          value={50}
                          className="progress-bar-rounded progress-xs progress-bar-success"
                        />
                      </div>
                      <div className="text-success font-weight-bold pl-3">
                        50%
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="line-height-1">
                      <span className="font-size-lg font-weight-bold pr-3">
                        12,345
                      </span>
                      <span className="text-black-50">amazon.com</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="flex-grow-1">
                        <LinearProgress
                          variant="determinate"
                          value={76}
                          className="progress-bar-info progress-xs progress-bar-rounded"
                        />
                      </div>
                      <div className="text-info font-weight-bold pl-3">76%</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="line-height-1">
                      <span className="font-size-lg font-weight-bold pr-3">
                        34,985
                      </span>
                      <span className="text-black-50">facebook.com</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="flex-grow-1">
                        <LinearProgress
                          variant="determinate"
                          value={87}
                          className="progress-bar-first progress-bar-rounded progress-xs"
                        />
                      </div>
                      <div className="text-first font-weight-bold pl-3">
                        87%
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="line-height-1">
                      <span className="font-size-lg font-weight-bold pr-3">
                        76,381
                      </span>
                      <span className="text-black-50">youtube.com</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="flex-grow-1">
                        <LinearProgress
                          variant="determinate"
                          value={59}
                          className="progress-bar-danger progress-bar-rounded progress-xs"
                        />
                      </div>
                      <div className="text-danger font-weight-bold pl-3">
                        59%
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <Card className="card-box p-4 text-center">
                  <Grid container spacing={0}>
                    <Grid
                      item
                      md={6}
                      className="d-flex justify-content-center pb-4 pb-md-0 mb-4 mb-md-0">
                      <div className="divider-v divider-v-md" />
                      <div>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <div className="d-flex py-1 align-items-center">
                              <div className="d-40 rounded border-0 card-icon-wrapper flex-shrink-0 bg-brand-discord text-white btn-icon text-center mr-3">
                                <FontAwesomeIcon icon={['fas', 'gem']} />
                              </div>
                              <div className="ml-1 font-size-xxl">23</div>
                            </div>
                          </Grid>
                          <Grid item xs={12}>
                            <div className="text-center">
                              Agencies Connections
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                    <Grid item md={6} className="justify-content-center pl-4">
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <div className="d-flex py-1 align-items-center">
                            <div className="d-40 rounded border-0 card-icon-wrapper flex-shrink-0 bg-warning text-white btn-icon text-center mr-3">
                              <FontAwesomeIcon icon={['fas', 'clock']} />
                            </div>
                            <div className="ml-1 font-size-xxl">23</div>
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <div className="text-center">
                            Candidates Connections
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Card className="card-box p-3 text-center">
                  <div className="d-flex align-items-center">
                    <div className="d-40 rounded-circle bg-brand-discord text-white mr-3 text-center">
                      <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
                    </div>
                    <div>
                      <div className="text-black-50 text-left">IR35</div>
                      <div className="text-left font-size-xxl">2362</div>
                    </div>
                  </div>
                  <Chart options={options} series={series} type="line" />
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card className="card-box p-3 text-center">
                  <div className="d-flex align-items-center">
                    <div className="d-40 rounded-circle bg-brand-instagram text-white mr-3 text-center">
                      <FontAwesomeIcon icon={['fas', 'gift']} />
                    </div>
                    <div>
                      <div className="text-black-50 text-left">
                        Outboxing docs
                      </div>
                      <div className="text-left font-size-xxl">935</div>
                    </div>
                  </div>
                  <Chart options={options1} series={series1} type="line" />
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Card>
              <div className="app-inner-content-layout">
                {/* <div
                onClick={toogleHeaderDrawer}
                className={clsx('app-drawer-overlay', {
                  'is-active': headerDrawerToggle
                })}
              /> */}
                <div className="app-drawer-content-message">
                  <Tooltip arrow title="Close drawer" placement="left">
                    <Button
                      size="small"
                      onClick={toogleHeaderDrawer}
                      className="close-drawer-btn bg-white p-0 d-40"
                      id="CloseDrawerTooltip">
                      <div
                        className={clsx(
                          'navbar-toggler hamburger hamburger--elastic',
                          {
                            'is-active': headerDrawerToggle
                          }
                        )}>
                        <span className="hamburger-box">
                          <span className="hamburger-inner" />
                        </span>
                      </div>
                    </Button>
                  </Tooltip>

                  <div className="shadow-overflow">
                    <PerfectScrollbar>
                      <div className="p-2 scroll-menu">
                        <TextField
                          onFocus={toggleHeaderSearchHover}
                          onBlur={toggleHeaderSearchHover}
                          id="header-search-input"
                          name="header-search-input"
                          type="search"
                          placeholder="Search conversations.."
                          variant="outlined"
                          style={{
                            background: 'white',
                            'margin-bottom': '10px'
                          }}
                        />
                        <div className="py-4">
                          <FontAwesomeIcon
                            icon={['far', 'clock']}
                            className="font-size-sm text-warning"
                          />
                          <b className="text-warning ml-1">Pending</b>
                        </div>
                        <ul>
                          <li className="pending-card">
                            <b>Jerome Macoy</b>
                            <p className="mb-0 text-black-50">
                              So I need new sheets and..
                            </p>
                          </li>
                          <li className="pending-card">
                            <b>Jerome Macoy</b>
                            <p className="mb-0 text-black-50">
                              So I need new sheets and..
                            </p>
                          </li>
                          <li className="pending-card">
                            <b>Jerome Macoy</b>
                            <p className="mb-0 text-black-50">
                              So I need new sheets and..
                            </p>
                          </li>
                          <li className="pending-card">
                            <b>Jerome Macoy</b>
                            <p className="mb-0 text-black-50">
                              So I need new sheets and..
                            </p>
                          </li>
                        </ul>
                        <div className="py-4">
                          <FontAwesomeIcon
                            icon={['far', 'comments']}
                            className="font-size-sm text-info"
                          />
                          <b className="text-info ml-1">Active conversions</b>
                        </div>
                        <ul>
                          <li className="active-card">
                            <b>Jerome Macoy</b>
                            <p className="mb-0 text-black-50">
                              So I need new sheets and..
                            </p>
                          </li>
                          <li className="active-card">
                            <b>Jerome Macoy</b>
                            <p className="mb-0 text-black-50">
                              So I need new sheets and..
                            </p>
                          </li>
                          <li className="active-card">
                            <b>Jerome Macoy</b>
                            <p className="mb-0 text-black-50">
                              So I need new sheets and..
                            </p>
                          </li>
                          <li className="active-card">
                            <b>Jerome Macoy</b>
                            <p className="mb-0 text-black-50">
                              So I need new sheets and..
                            </p>
                          </li>
                        </ul>
                        <div className="py-4">
                          <FontAwesomeIcon
                            icon={['far', 'comment-alt']}
                            className="font-size-sm text-success"
                          />
                          <b className="text-success ml-1">
                            Resolved conversations
                          </b>
                        </div>
                        <ul>
                          <li className="resolved-card">
                            <b>Jerome Macoy</b>
                            <p className="mb-0 text-black-50">
                              So I need new sheets and..
                            </p>
                          </li>
                          <li className="resolved-card">
                            <b>Jerome Macoy</b>
                            <p className="mb-0 text-black-50">
                              So I need new sheets and..
                            </p>
                          </li>
                          <li className="resolved-card">
                            <b>Jerome Macoy</b>
                            <p className="mb-0 text-black-50">
                              So I need new sheets and..
                            </p>
                          </li>
                          <li className="resolved-card">
                            <b>Jerome Macoy</b>
                            <p className="mb-0 text-black-50">
                              So I need new sheets and..
                            </p>
                          </li>
                        </ul>
                      </div>
                    </PerfectScrollbar>
                  </div>
                </div>
                <div className="app-inner-content-layout--main order-3 order-lg-2 card-box remove-border-box bg-secondary">
                  <PerfectScrollbar>
                    <div className="card-header rounded-0 bg-white border-bottom">
                      <div className="card-header--title">
                        <div className="app-drawer-wrapper-message">
                          <Button
                            size="small"
                            onClick={toogleHeaderDrawer}
                            className={clsx(
                              'btn-transition-none navbar-toggler bg-transparent p-0 hamburger hamburger--elastic',
                              { 'is-active': headerDrawerToggle }
                            )}
                            disableRipple>
                            <span className="hamburger-box">
                              <span className="hamburger-inner" />
                            </span>
                          </Button>
                          <div className="ml-3 mt-3">
                            <b>Messenger</b>
                            <p>Talking to Kate</p>
                          </div>
                        </div>
                      </div>
                      {/* <div className="card-header--actions">
                        <Tooltip title="Add in conversation">
                          <Button
                            size="small"
                            className="btn-first btn-pill d-40 p-0">
                            <FontAwesomeIcon icon={['fas', 'plus']} />
                          </Button>
                        </Tooltip>
                      </div> */}
                    </div>
                    <div className="chat-wrapper-message p-3">
                      <div className="chat-item p-2 mb-2">
                        <div className="align-box-row">
                          <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                            <div className="avatar-icon rounded-circle shadow-none">
                              <img alt="..." src={avatar7} />
                            </div>
                          </div>
                          <div>
                            <div className="chat-box bg-gray-400 text-second">
                              <p>Hello, John.</p>
                              <p>This is Kenny. How are you?</p>
                            </div>
                            <small className="mt-2 d-block text-black-50">
                              <FontAwesomeIcon
                                icon={['far', 'clock']}
                                className="mr-1 opacity-5"
                              />
                              11:01 AM | Yesterday
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="chat-item chat-item-reverse p-2 mb-2">
                        <div className="align-box-row flex-row-reverse">
                          <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                            <div className="avatar-icon rounded-circle shadow-none">
                              <img alt="..." src={avatar3} />
                            </div>
                          </div>
                          <div>
                            <div className="chat-box bg-gray-400 text-second">
                              <p>Hey, Kate.</p>
                              <p>
                                I'm attaching the pictures you requested below:
                              </p>
                              <Card className="mt-3 mb-2 pt-2 pb-2 text-center">
                                <div>
                                  <a
                                    href="#/"
                                    onClick={(e) => e.preventDefault()}>
                                    <img
                                      alt="..."
                                      className="img-fluid rounded m-1 shadow-sm"
                                      src={people1}
                                      width="54"
                                    />
                                  </a>
                                  <a
                                    href="#/"
                                    onClick={(e) => e.preventDefault()}>
                                    <img
                                      alt="..."
                                      className="img-fluid rounded m-1 shadow-sm"
                                      src={people2}
                                      width="54"
                                    />
                                  </a>
                                </div>
                              </Card>
                            </div>
                            <small className="mt-2 d-block text-black-50">
                              <FontAwesomeIcon
                                icon={['far', 'clock']}
                                className="mr-1 opacity-5"
                              />
                              11:01 AM | Yesterday
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="chat-item p-2 mb-2">
                        <div className="align-box-row">
                          <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                            <div className="avatar-icon rounded-circle shadow-none">
                              <img alt="..." src={avatar7} />
                            </div>
                          </div>
                          <div>
                            <div className="chat-box bg-gray-400 text-second">
                              <p>Thanks.</p>
                              <p>Really appreciate it!</p>
                            </div>
                            <small className="mt-2 d-block text-black-50">
                              <FontAwesomeIcon
                                icon={['far', 'clock']}
                                className="mr-1 opacity-5"
                              />
                              11:01 AM | Yesterday
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="chat-item p-2 mb-2">
                        <div className="align-box-row">
                          <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                            <div className="avatar-icon rounded-circle shadow-none">
                              <img alt="..." src={avatar7} />
                            </div>
                          </div>
                          <div>
                            <div className="chat-box bg-gray-400 text-second">
                              <p>Bye for now, talk to you later.</p>
                            </div>
                            <small className="mt-2 d-block text-black-50">
                              <FontAwesomeIcon
                                icon={['far', 'clock']}
                                className="mr-1 opacity-5"
                              />
                              11:01 AM | Yesterday
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="chat-item chat-item-reverse p-2 mb-2">
                        <div className="align-box-row flex-row-reverse">
                          <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                            <div className="avatar-icon rounded-circle shadow-none">
                              <img alt="..." src={avatar3} />
                            </div>
                          </div>
                          <div>
                            <div className="chat-box bg-gray-400 text-second">
                              <p>Almost forgot about your tasks.</p>
                              <p>
                                <b>Check the links below:</b>
                              </p>
                              <Card className="bg-second p-1 mt-3 mb-2">
                                <div className="text-center py-2">
                                  <Tooltip title="Menu example">
                                    <Button
                                      className="btn-link p-0 btn-icon bg-ripe-malin d-inline-block text-center text-white font-size-xl d-40 rounded-circle border-0 m-2"
                                      id="MenuExampleTooltip111">
                                      <FontAwesomeIcon
                                        icon={['far', 'gem']}
                                        className="font-size-sm"
                                      />
                                    </Button>
                                  </Tooltip>
                                  <Tooltip title="Menu example">
                                    <Button
                                      className="btn-link p-0 btn-icon bg-grow-early d-inline-block text-center text-white font-size-xl d-40 rounded-circle border-0 m-2"
                                      id="MenuExampleTooltip118">
                                      <FontAwesomeIcon
                                        icon={['far', 'building']}
                                        className="font-size-sm"
                                      />
                                    </Button>
                                  </Tooltip>
                                  <Tooltip title="Menu example">
                                    <Button
                                      className="btn-link p-0 btn-icon bg-arielle-smile d-inline-block text-center text-white font-size-xl d-40 rounded-circle border-0 m-2"
                                      id="MenuExampleTooltip125">
                                      <FontAwesomeIcon
                                        icon={['far', 'chart-bar']}
                                        className="font-size-sm"
                                      />
                                    </Button>
                                  </Tooltip>
                                </div>
                              </Card>
                            </div>
                            <small className="mt-2 d-block text-black-50">
                              <FontAwesomeIcon
                                icon={['far', 'clock']}
                                className="mr-1 opacity-5"
                              />
                              11:03 AM | Yesterday
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white">
                      <div className="card-footer p-0">
                        {/* <div className="divider" /> */}
                        <div
                          className={clsx(
                            'd-flex align-items-center transition-base px-4 py-2',
                            { 'bg-secondary': inputBg }
                          )}>
                          <div className="avatar-icon-wrapper avatar-initials mr-3">
                            <div className="avatar-icon bg-neutral-dark text-black">
                              H
                            </div>
                            <div
                              className="badge badge-success badge-position badge-position--bottom-center badge-circle"
                              title="Badge bottom center">
                              Online
                            </div>
                          </div>
                          <TextField
                            variant="outlined"
                            size="small"
                            className="bg-white w-100"
                            classes={{ root: 'input-border-0' }}
                            id="input-with-icon-textfield225-1"
                            placeholder="Write your message here..."
                            onFocus={toggleInputBg}
                            onBlur={toggleInputBg}
                          />
                          <div className="avatar-icon-wrapper avatar-initials mr-3 send-btn">
                            <FontAwesomeIcon
                              icon={['fas', 'paper-plane']}
                              className="font-size-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </PerfectScrollbar>
                </div>
              </div>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Card className="card-box">
              <div className="card-header pr-2">
                <div className="card-header--title">
                  <h5>List of jobs</h5>
                </div>
              </div>
              <CardContent>
                <div className="table-responsive-md">
                  <Table className="table table-borderless table-hover text-nowrap mb-0">
                    <thead>
                      <tr>
                        <th>Job ID</th>
                        <th className="text-left">Agency</th>
                        <th className="text-center">Start</th>
                        <th className="text-center">Date</th>
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1111</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div>
                              <a
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-weight-bold text-black"
                                title="...">
                                Bussiness Analyst
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral-warning text-warning px-4">
                            Contract
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="px-4">12/05/2021</div>
                        </td>
                        <td className="text-center">
                          <Button
                            size="small"
                            className="btn-link d-30 p-0 btn-icon hover-scale-sm">
                            <FontAwesomeIcon
                              icon={['fas', 'ellipsis-h']}
                              className="font-size-lg"
                            />
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>1112</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div>
                              <a
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-weight-bold text-black"
                                title="...">
                                Ops Analyst
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral-warning text-warning px-4">
                            Permanent
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="px-4">10/02/2021</div>
                        </td>
                        <td className="text-center">
                          <Button
                            size="small"
                            className="btn-link d-30 p-0 btn-icon hover-scale-sm">
                            <FontAwesomeIcon
                              icon={['fas', 'ellipsis-h']}
                              className="font-size-lg"
                            />
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>1113</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div>
                              <a
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-weight-bold text-black"
                                title="...">
                                Data Analyst
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral-warning text-warning px-4">
                            Permanent
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="px-4">12/05/2021</div>
                        </td>
                        <td className="text-center">
                          <Button
                            size="small"
                            className="btn-link d-30 p-0 btn-icon hover-scale-sm">
                            <FontAwesomeIcon
                              icon={['fas', 'ellipsis-h']}
                              className="font-size-lg"
                            />
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  headerDrawerToggle: state.ThemeOptions.headerDrawerToggle
});

const mapDispatchToProps = (dispatch) => ({
  setHeaderDrawerToggle: (enable) => dispatch(setHeaderDrawerToggle(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDashboard);
