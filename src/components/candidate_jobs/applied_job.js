import React, { useState } from 'react';

import { Button, Grid, Card, LinearProgress, Table } from '@material-ui/core';

import { getCurrentUser } from '../../helper';
import { CircularProgressbar } from 'react-circular-progressbar';

import PostAddIcon from '@material-ui/icons/PostAdd';

export default function OnBoardDocument() {
  const [documents, setDocuments] = useState([]);
  const [currentUser] = useState(getCurrentUser());

  return (
    <>
      <div className="page-title">
        <PostAddIcon />
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
                className="circular-progress-primary"
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
                value={35}
                text={35}
                strokeWidth={8}
                className="circular-progress-danger"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">Unsuccessful</div>
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
                className="circular-progress-warning"
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
                className="circular-progress-success"
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
                className="circular-progress-success"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">Placements</div>
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
                  <th className="text-center">Requester</th>
                  <th className="text-left" style={{ width: 80 }}>
                    Job Title
                  </th>
                  <th className="text-center">Location</th>
                  <th className="text-center">Applied On</th>
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

      <div className="ads-wrapper mt-4">
        <iframe
          frameBorder="0"
          height="100"
          id="aswift_0"
          marginHeight="0"
          marginWidth="0"
          name="aswift_0"
          scrolling="no"
          src='https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-2280007608584385&amp;format=320x100&amp;output=html&amp;h=100&amp;slotname=8619412948&amp;adk=3820663941&amp;adf=2444517951&amp;w=320&amp;lmt=1480764428&amp;flash=23.0.0&amp;url=http%3A%2F%2Fafghanfashion.com%2Fen%2F&amp;wgl=1&amp;dt=1480764431906&amp;bpp=32&amp;bdt=2353&amp;fdt=107&amp;idt=1645&amp;shv=r20161128&amp;cbv=r20161117&amp;saldr=aa&amp;correlator=2085870981537&amp;frm=20&amp;ga_vid=748426410.1477631041&amp;ga_sid=1480764434&amp;ga_hid=2124941115&amp;ga_fc=0&amp;pv=2&amp;iag=3&amp;icsg=2&amp;nhd=1&amp;dssz=2&amp;mdo=0&amp;mso=0&amp;u_tz=330&amp;u_his=2&amp;u_java=0&amp;u_h=768&amp;u_w=1366&amp;u_ah=728&amp;u_aw=1366&amp;u_cd=24&amp;u_nplug=5&amp;u_nmime=7&amp;dff=arial&amp;dfs=13&amp;adx=202&amp;ady=2719&amp;biw=1349&amp;bih=431&amp;eid=33509839%2C575144605&amp;oid=3&amp;rx=0&amp;eae=0&amp;fc=16&amp;pc=1&amp;brdim=0%2C0%2C0%2C0%2C1366%2C0%2C1366%2C728%2C1366%2C431&amp;vis=1&amp;rsz=%7C%7CleEr%7C&amp;abl=CS&amp;ppjl=t&amp;pfx=0&amp;fu=16&amp;bc=1&amp;ifi=1&amp;xpc=pHL5cE1BG4&amp;p=http%3A//afghanfashion.com&amp;dtd=2076"'
          width="100%"></iframe>
      </div>
    </>
  );
}
