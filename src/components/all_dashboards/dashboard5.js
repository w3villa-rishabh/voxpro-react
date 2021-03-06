import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Card, Button, ListItem, List } from '@material-ui/core';

import PerfectScrollbar from 'react-perfect-scrollbar';

import avatar3 from '../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../assets/images/avatars/avatar5.jpg';
import avatar2 from '../../assets/images/avatars/avatar6.jpg';
import clogo from '../../assets/images/stock-photos/c-logo.webp';
import clogo1 from '../../assets/images/stock-photos/company.png';

export default function LivePreviewExample() {
  return (
    <>
      <div className="">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card className="shadow-xxl">
              <div className="card-header d-flex align-items-center justify-content-between card-header-alt p-4">
                <div>
                  <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                    New Jobs Added
                  </h6>
                </div>
              </div>
              <div className="divider" />
              <div
                className="scroll-area shadow-overflow"
                style={{ height: '412px', borderRadius: 'inherit' }}>
                <PerfectScrollbar>
                  <List component="div" className="list-group-flush">
                    <ListItem className="d-flex justify-content-between align-items-center py-3">
                      <div className="d-flex align-items-center flex-column flex-sm-row">
                        <div>
                          <div className="bg-premium-dark text-center text-white font-size-xl btn-icon d-50 rounded-circle mb-3 mb-sm-0">
                            <FontAwesomeIcon icon={['fas', 'suitcase']} />
                          </div>
                        </div>
                        <div className="pl-0 pl-sm-3">
                          <div className="d-block text-center d-sm-flex align-items-center">
                            <span className="font-size-lg">
                              Business Analyst
                            </span>
                            <div className="badge badge-neutral-info text-info ml-2">
                              New
                            </div>
                          </div>
                          <p className="mb-0">HexLab Corporation Pvt Ltd.</p>
                          <p className="text-black-50 mb-0">
                            <FontAwesomeIcon
                              icon={['fas', 'map-marker-alt']}
                              className="font-size-lg mr-2"
                            />
                            Southampton, UK
                          </p>
                          <p className="mb-0">Permanent</p>
                          <p className="text-black-50 mb-0">
                            Salary: £8k - £10k
                          </p>
                        </div>
                      </div>
                      <div>
                        <Button size="small" className="btn-dark ml-4 mr-4">
                          View
                        </Button>
                        <FontAwesomeIcon
                          icon={['fas', 'heart']}
                          className="font-size-lg mr-2 mt-1 text-danger"
                        />
                      </div>
                    </ListItem>
                    <ListItem className="d-flex justify-content-between align-items-center py-3">
                      <div className="d-flex align-items-center flex-column flex-sm-row">
                        <div>
                          <div className="bg-warning text-center text-white font-size-xl btn-icon d-50 rounded-circle mb-3 mb-sm-0">
                            <FontAwesomeIcon icon={['fas', 'suitcase']} />
                          </div>
                        </div>
                        <div className="pl-0 pl-sm-3">
                          <div className="d-block text-center d-sm-flex align-items-center">
                            <span className="font-size-lg">
                              Business Analyst
                            </span>
                            <div className="badge badge-neutral-info text-info ml-2">
                              New
                            </div>
                          </div>
                          <p className="mb-0">HexLab Corporation Pvt Ltd.</p>
                          <p className="text-black-50 mb-0">
                            <FontAwesomeIcon
                              icon={['fas', 'map-marker-alt']}
                              className="font-size-lg mr-2"
                            />
                            London, UK
                          </p>
                          <p className="mb-0">Contract</p>
                          <p className="text-black-50 mb-0">
                            Salary: £8k - £10k
                          </p>
                        </div>
                      </div>
                      <div>
                        <Button size="small" className="btn-dark ml-4 mr-4">
                          View
                        </Button>
                        <FontAwesomeIcon
                          icon={['fas', 'heart']}
                          className="font-size-lg mr-2 mt-1 text-danger"
                        />
                      </div>
                    </ListItem>
                    <ListItem className="d-flex justify-content-between align-items-center py-3">
                      <div className="d-flex align-items-center flex-column flex-sm-row">
                        <div>
                          <div className="bg-white border-primary border-2 text-center text-primary font-size-xl d-50 rounded-circle mb-3 mb-sm-0">
                            <FontAwesomeIcon icon={['fas', 'suitcase']} />
                          </div>
                        </div>
                        <div className="pl-0 pl-sm-3">
                          <div className="d-block text-center d-sm-flex align-items-center">
                            <span className="font-size-lg">
                              Business Analyst
                            </span>
                            <div className="badge badge-neutral-info text-info ml-2">
                              New
                            </div>
                          </div>
                          <p className="mb-0">HexLab Corporation Pvt Ltd.</p>
                          <p className="text-black-50 mb-0">
                            <FontAwesomeIcon
                              icon={['fas', 'map-marker-alt']}
                              className="font-size-lg mr-2"
                            />
                            Norwich, UK
                          </p>
                          <p className="mb-0">Temporary</p>
                          <p className="text-black-50 mb-0">
                            Salary: £8k - £10k
                          </p>
                        </div>
                      </div>
                      <div>
                        <Button size="small" className="btn-dark ml-4 mr-4">
                          View
                        </Button>
                        <FontAwesomeIcon
                          icon={['fas', 'heart']}
                          className="font-size-lg mr-2 mt-1 text-danger"
                        />
                      </div>
                    </ListItem>
                    <ListItem className="d-flex justify-content-between align-items-center py-3">
                      <div className="d-flex align-items-center flex-column flex-sm-row">
                        <div>
                          <div className="bg-white border-primary border-2 text-center text-primary font-size-xl d-50 rounded-circle mb-3 mb-sm-0">
                            <FontAwesomeIcon icon={['fas', 'suitcase']} />
                          </div>
                        </div>
                        <div className="pl-0 pl-sm-3">
                          <div className="d-block text-center d-sm-flex align-items-center">
                            <span className="font-size-lg">
                              Business Analyst
                            </span>
                            <div className="badge badge-neutral-info text-info ml-2">
                              New
                            </div>
                          </div>
                          <p className="mb-0">HexLab Corporation Pvt Ltd.</p>
                          <p className="text-black-50 mb-0">
                            <FontAwesomeIcon
                              icon={['fas', 'map-marker-alt']}
                              className="font-size-lg mr-2"
                            />
                            Manchester, UK
                          </p>
                          <p className="mb-0">Permanent</p>
                          <p className="text-black-50 mb-0">
                            Salary: £8k - £10k
                          </p>
                        </div>
                      </div>
                      <div>
                        <Button size="small" className="btn-dark ml-4 mr-4">
                          View
                        </Button>
                        <FontAwesomeIcon
                          icon={['fas', 'heart']}
                          className="font-size-lg mr-2 mt-1 text-danger"
                        />
                      </div>
                    </ListItem>
                    <ListItem className="d-flex justify-content-between align-items-center py-3">
                      <div className="d-flex align-items-center flex-column flex-sm-row">
                        <div>
                          <div className="bg-white border-primary border-2 text-center text-primary font-size-xl d-50 rounded-circle mb-3 mb-sm-0">
                            <FontAwesomeIcon icon={['fas', 'suitcase']} />
                          </div>
                        </div>
                        <div className="pl-0 pl-sm-3">
                          <div className="d-block text-center d-sm-flex align-items-center">
                            <span className="font-size-lg">
                              Business Analyst
                            </span>
                            <div className="badge badge-neutral-info text-info ml-2">
                              New
                            </div>
                          </div>
                          <p className="mb-0">HexLab Corporation Pvt Ltd.</p>
                          <p className="text-black-50 mb-0">
                            <FontAwesomeIcon
                              icon={['fas', 'map-marker-alt']}
                              className="font-size-lg mr-2"
                            />
                            London, UK
                          </p>
                          <p className="mb-0">Contract</p>
                          <p className="text-black-50 mb-0">
                            Salary: £8k - £10k
                          </p>
                        </div>
                      </div>
                      <div>
                        <Button size="small" className="btn-dark ml-4 mr-4">
                          View
                        </Button>
                        <FontAwesomeIcon
                          icon={['fas', 'heart']}
                          className="font-size-lg mr-2 mt-1 text-danger"
                        />
                      </div>
                    </ListItem>
                  </List>
                </PerfectScrollbar>
              </div>
              <div className="card-footer p-3 text-center">
                <Button size="small" className="py-2 px-4 btn-primary">
                  <span className="btn-wrapper--label font-weight-bold">
                    View more items
                  </span>
                </Button>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} className="d-flex h-100">
            <Grid container spacing={2}>
              <Grid item xl={12}>
                <Card className="shadow-xxl">
                  <div className="card-header-alt px-4 pt-4 pb-2">
                    <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                      Agencies Recently Added
                    </h6>
                    {/* <p className="text-black-50 mb-0">Reports for what we sold this week.</p> */}
                  </div>
                  <div
                    className="scroll-area shadow-overflow"
                    style={{ height: '433px', borderRadius: 'inherit' }}>
                    <PerfectScrollbar options={{ wheelPropagation: false }}>
                      <List component="div" className="list-group-flush">
                        <ListItem className="d-flex justify-content-between align-items-center py-3">
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-2">
                              <div className="avatar-icon">
                                <img alt="..." src={clogo} />
                              </div>
                            </div>
                            <div>
                              <a
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-weight-bold text-black"
                                title="...">
                                Nolan Recruitment
                              </a>
                              <span className="text-black-50 d-block">
                                Automotive, Aviation, Building Services & FM
                              </span>
                            </div>
                          </div>
                          <Button size="small" className="btn-dark ml-4">
                            View
                          </Button>
                        </ListItem>
                        <ListItem className="d-flex justify-content-between align-items-center py-3">
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-2">
                              <div className="avatar-icon">
                                <img alt="..." src={clogo1} />
                              </div>
                            </div>
                            <div>
                              <a
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-weight-bold text-black"
                                title="...">
                                Adecco
                              </a>
                              <span className="text-black-50 d-block">
                                IT, technical, architecture, aerospace, railway
                                and oil / gas.
                              </span>
                            </div>
                          </div>
                          <Button size="small" className="btn-dark ml-4">
                            View
                          </Button>
                        </ListItem>
                        <ListItem className="d-flex justify-content-between align-items-center py-3">
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-2">
                              <div className="avatar-icon">
                                <img alt="..." src={clogo} />
                              </div>
                            </div>
                            <div>
                              <a
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-weight-bold text-black"
                                title="...">
                                Propel
                              </a>
                              <span className="text-black-50 d-block">
                                Advertising, Media, Mobile, Marketing
                              </span>
                            </div>
                          </div>
                          <Button size="small" className="btn-dark ml-4">
                            View
                          </Button>
                        </ListItem>
                        <ListItem className="d-flex justify-content-between align-items-center py-3">
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-2">
                              <div className="avatar-icon">
                                <img alt="..." src={clogo} />
                              </div>
                            </div>
                            <div>
                              <a
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-weight-bold text-black"
                                title="...">
                                Huntress Group
                              </a>
                              <span className="text-black-50 d-block">
                                Information technology, accounting and finance.
                              </span>
                            </div>
                          </div>
                          <Button size="small" className="btn-dark ml-4">
                            View
                          </Button>
                        </ListItem>
                        <ListItem className="d-flex justify-content-between align-items-center py-3">
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-2">
                              <div className="avatar-icon">
                                <img alt="..." src={clogo1} />
                              </div>
                            </div>
                            <div>
                              <a
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-weight-bold text-black"
                                title="...">
                                Satigo
                              </a>
                              <span className="text-black-50 d-block">
                                {' '}
                                Infrastructure, digital, change / transformation
                                and enterprise sales.
                              </span>
                            </div>
                          </div>
                          <Button size="small" className="btn-dark ml-4">
                            View
                          </Button>
                        </ListItem>
                        <ListItem className="d-flex justify-content-between align-items-center py-3">
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-2">
                              <div className="avatar-icon">
                                <img alt="..." src={clogo} />
                              </div>
                            </div>
                            <div>
                              <a
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-weight-bold text-black"
                                title="...">
                                Deerfoot IT Resources
                              </a>
                              <span className="text-black-50 d-block">
                                Information technology
                              </span>
                            </div>
                          </div>
                          <Button size="small" className="btn-dark ml-4">
                            View
                          </Button>
                        </ListItem>
                        <ListItem className="d-flex justify-content-between align-items-center py-3">
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-2">
                              <div className="avatar-icon">
                                <img alt="..." src={clogo1} />
                              </div>
                            </div>
                            <div>
                              <a
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-weight-bold text-black"
                                title="...">
                                Silicon Milk Roundabout
                              </a>
                              <span className="text-black-50 d-block">
                                Technology, Startups
                              </span>
                            </div>
                          </div>
                          <Button size="small" className="btn-dark ml-4">
                            View
                          </Button>
                        </ListItem>
                      </List>
                    </PerfectScrollbar>
                  </div>
                  <div className="card-footer p-3 text-center">
                    <Button size="small" color="primary" variant="contained">
                      <span className="btn-wrapper--label font-weight-bold">
                        View all Agencies
                      </span>
                      {/* <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </span> */}
                    </Button>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
