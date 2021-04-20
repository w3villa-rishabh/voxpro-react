import React, { useState } from 'react';

import { Button, Grid, Card, LinearProgress, Table } from '@material-ui/core';

import { getCurrentUser } from '../../helper';
import { CircularProgressbar } from 'react-circular-progressbar';

import WorkIcon from '@material-ui/icons/Work';
import AddsComponents from 'components/add_component';

export default function OnBoardDocument() {
  const [documents, setDocuments] = useState([]);
  const [currentUser] = useState(getCurrentUser());

  return (
    <>
      <div className="page-title">
        <WorkIcon />
        <div className="title">
          <h5 className="heading">Jobs Applied</h5>
          <p>List of all the applied jobs</p>
        </div>
      </div>

      <Grid container spacing={2}>
        <Grid item md={2} xs={4}>
          <Card className="card-box">
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={56}
                text={56}
                strokeWidth={8}
                className="circular-progress-first"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">Job Applied</div>
            </div>
          </Card>
        </Grid>

        <Grid item md={2} xs={4}>
          <Card className="card-box">
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={20}
                text={20}
                strokeWidth={8}
                className="circular-progress-first"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">Shotlisted</div>
            </div>
          </Card>
        </Grid>

        <Grid item md={2} xs={4}>
          <Card className="card-box">
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={30}
                text={30}
                strokeWidth={8}
                className="circular-progress-first"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">Interviews </div>
            </div>
          </Card>
        </Grid>

        <Grid item md={2} xs={4}>
          <Card className="card-box">
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={22}
                text={22}
                strokeWidth={8}
                className="circular-progress-first"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">Offers</div>
            </div>
          </Card>
        </Grid>

        <Grid item md={2} xs={4}>
          <Card className="card-box">
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={25}
                text={25}
                strokeWidth={8}
                className="circular-progress-first"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">Placements</div>
            </div>
          </Card>
        </Grid>

        <Grid item md={2} xs={4}>
          <Card className="card-box">
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={35}
                text={35}
                strokeWidth={8}
                className="circular-progress-first"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">Unsuccessful</div>
            </div>
          </Card>
        </Grid>
      </Grid>
      <div className="pt-3">
        <Card className="card-box mb-spacing-6-x2">
          <div className="card-header">
            <div className="card-header--title font-size-lg"></div>
            {/* <div className="card-header--actions">
            <Tooltip title="Add new">
              <Button size="small" className="btn-link px-1">
                <FontAwesomeIcon
                  icon={['fas', 'plus']}
                  className="text-success font-size-lg"
                />
              </Button>
            </Tooltip>
            <Tooltip title="Close">
              <Button size="small" className="btn-link px-1">
                <FontAwesomeIcon
                  icon={['fas', 'times']}
                  className="text-danger font-size-lg"
                />
              </Button>
            </Tooltip>
          </div> */}
          </div>
          <div className="table-responsive-md">
            <Table className="table table-hover text-nowrap mb-0">
              <thead>
                <tr>
                  <th className="text-center">Job ID</th>
                  <th className="text-center">Hirer</th>
                  <th className="text-left" style={{ width: 80 }}>
                    Job Title
                  </th>
                  <th className="text-center">Location</th>
                  <th className="text-center">Date Applied</th>
                  <th className="text-center">Job status</th>
                  <th className="text-center">Stage of application</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-weight-bold text-center">#0001</td>
                  <td className="text-center">Headhunters</td>
                  <td>Software Developer</td>
                  <td className="text-center">Uk</td>
                  <td className="text-center">14 Feb 2020</td>
                  <td className="text-center">14 Feb 2020</td>
                  <td className="text-center">
                    <LinearProgress
                      variant="determinate"
                      className="progress-sm progress-bar-success"
                      value={90}
                    />
                    <div className="font-size-sm text-center text-black-50 pt-1">
                      Completed
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="font-weight-bold text-center">#0002</td>
                  <td className="text-center">Career Appear</td>
                  <td>Software Developer</td>
                  <td className="text-center">Uk</td>
                  <td className="text-center">14 Feb 2020</td>
                  <td className="text-center">14 Feb 2020</td>
                  <td>
                    <LinearProgress
                      variant="determinate"
                      value={55}
                      className="progress-bar-animated progress-bar-striped progress-sm progress-bar-danger"
                    />
                    <div className="font-size-sm text-black-50 pt-1">
                      Overdue
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="font-weight-bold text-center">#0003</td>
                  <td className="text-center">Starting Stars</td>
                  <td>Software Developer</td>
                  <td className="text-center">Uk</td>
                  <td className="text-center">14 Feb 2020</td>
                  <td className="text-center">14 Feb 2020</td>
                  <td>
                    <LinearProgress
                      variant="determinate"
                      value={51}
                      className="progress-sm progress-bar-warning"
                    />
                    <div className="font-size-sm text-black-50 pt-1">
                      Pending
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="font-weight-bold text-center">#0004</td>
                  <td className="text-center">Humble Hunters</td>
                  <td>Software Developer</td>
                  <td className="text-center">Uk</td>
                  <td className="text-center">14 Feb 2020</td>
                  <td className="text-center">14 Feb 2020</td>
                  <td>
                    <LinearProgress
                      variant="determinate"
                      className="progress-sm progress-bar-first"
                      value={76}
                    />
                    <div className="font-size-sm text-black-50 pt-1">
                      In progress
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="card-footer py-3 text-center">
            <Button size="small" className="btn-outline-second" variant="text">
              View more entries
            </Button>
          </div>
        </Card>
      </div>

      <AddsComponents />
    </>
  );
}
