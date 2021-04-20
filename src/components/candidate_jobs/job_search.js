import React, { useState, useMemo } from 'react';

import {
  Grid,
  Card,
  InputAdornment,
  TextField,
  Button
} from '@material-ui/core';
import Select from 'react-select';

import PostAddIcon from '@material-ui/icons/PostAdd';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import logo1 from '../../assets/images/stock-photos/c-logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import countryList from 'react-select-country-list';

const jobtype = [
  {
    value: 'permanent',
    label: 'Permanent'
  },
  {
    value: 'contract',
    label: 'Contract'
  },
  {
    value: 'interim',
    label: 'Interim'
  },
  {
    value: 'part_time',
    label: 'Part Time'
  }
];
const jobposted = [
  {
    value: 'anytime',
    label: 'Anytime'
  },
  {
    value: 'last_3_days',
    label: 'Last 3 Days'
  },
  {
    value: 'last_week',
    label: 'Last Week'
  },
  {
    value: 'last_2-weeks',
    label: 'Last 2 Weeks'
  }
];

export default function OnBoardDocument() {
  const [value, setValue] = useState('');
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  const changeHandler1 = (value1) => {
    setValue1(value1);
  };
  const changeHandler2 = (value2) => {
    setValue2(value2);
  };

  return (
    <>
      <div className="page-title">
        <PostAddIcon />
        <div className="title">
          <h5 className="heading">Job Search</h5>
          <p>List of all the applied jobs</p>
        </div>
      </div>
      <Card className="card-box">
        <Grid container spacing={2}>
          <Grid item md={3} xs={4}>
            <div className="mb-3 mt-3 ml-3">
              <TextField
                variant="outlined"
                size="small"
                label="search a job"
                placeholder="e.g. 'nurse'"
                className="w-100"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchTwoToneIcon />
                    </InputAdornment>
                  ),
                  style: {
                    height: '37px'
                  }
                }}
              />
            </div>
          </Grid>
          <Grid item md={2} xs={4}>
            <div className="mb-3 mt-3">
              <Select
                options={options}
                value={value}
                onChange={changeHandler}
                placeholder="Location"
              />
            </div>
          </Grid>
          <Grid item md={2} xs={4}>
            <div className="mb-3 mt-3">
              <Select
                options={jobtype}
                value={value1}
                onChange={changeHandler1}
                placeholder="Job Type"
              />
            </div>
          </Grid>
          <Grid item md={2} xs={4}>
            <div className="mb-3 mt-3">
              <Select
                options={jobposted}
                value={value2}
                onChange={changeHandler2}
                placeholder="Date Posted"
              />
            </div>
          </Grid>
          <Grid item md={2} xs={4}>
            <div className="mb-3 mt-3 ml-5">
              <Button className="btn-neutral-info hover-scale-sm">
                <span className="px-2">Search</span>
              </Button>
            </div>
          </Grid>
        </Grid>
      </Card>

      <div className="title mt-3 pl-2"> 
        <h6 className="fh">Based on your profile and career interests</h6>
      </div>

      <div className="mt-3">
        <Grid container spacing={2}>
          <Grid item xl={3}>
            <div className="card card-custom gutter-b card-stretch bg-white btn rounded text-left p-4">
              <div className="d-flex flex-column justify-content-between">
                <Grid container spacing={4}>
                  <Grid item xl={6}>
                    <img
                      style={{ height: '50px', width: '130px' }}
                      className=""
                      alt="..."
                      src={logo1}
                    />
                  </Grid>
                  <Grid item xl={6}>
                    <div className="symbol symbol-lg-75 symbol-primary text-right">
                      <span className="text-muted f">
                        10-shotlisted <br />
                        2-Selected
                      </span>
                    </div>
                  </Grid>
                </Grid>
                <div className="d-flex flex-column"></div>
              </div>
              <div className="mt-5">
                <h6 className="mb-7 fh">UX Lead and Researcher</h6>
                <h6 className="mb-7 f">HexLab Corporation Pvt. ltd</h6>
                <span className="f text-muted">
                  {' '}
                  <FontAwesomeIcon icon={['fas', 'map-marker-alt']} /> Los
                  Angeles, California, USA
                </span>
                <p className="mt-1 f mt-0 text-muted">
                  Compentation: €8k - €10k
                </p>
              </div>
              <Button className="btn-neutral-info hover-scale-sm mt-2">
                <span className="px-2">
                  {' '}
                  <FontAwesomeIcon icon={['fas', 'heart']} />
                </span>
                <span> Save</span>
              </Button>
            </div>
          </Grid>

          <Grid item xl={3}>
            <div className="card card-custom gutter-b card-stretch bg-white btn rounded text-left p-4">
              <div className="d-flex flex-column justify-content-between">
                <Grid container spacing={4}>
                  <Grid item xl={6}>
                    <img
                      style={{ height: '50px', width: '130px' }}
                      className=""
                      alt="..."
                      src={logo1}
                    />
                  </Grid>
                  <Grid item xl={6}>
                    <div className="symbol symbol-lg-75 symbol-primary text-right">
                      <span className="text-muted f">
                        10-shotlisted <br />
                        2-Selected
                      </span>
                    </div>
                  </Grid>
                </Grid>
                <div className="d-flex flex-column"></div>
              </div>
              <div className="mt-5">
                <h6 className="mb-7 fh">UX Lead and Researcher</h6>
                <h6 className="mb-7 f">HexLab Corporation Pvt. ltd</h6>
                <span className="f text-muted">
                  {' '}
                  <FontAwesomeIcon icon={['fas', 'map-marker-alt']} /> Los
                  Angeles, California, USA
                </span>
                <p className="mt-1 f mt-0 text-muted">
                  Compentation: €8k - €10k
                </p>
              </div>
              <Button className="btn-neutral-info hover-scale-sm mt-2">
                <span className="px-2">
                  {' '}
                  <FontAwesomeIcon icon={['fas', 'heart']} />
                </span>
                <span> Save</span>
              </Button>
            </div>
          </Grid>

          <Grid item xl={3}>
            <div className="card card-custom gutter-b card-stretch bg-white btn rounded text-left p-4">
              <div className="d-flex flex-column justify-content-between">
                <Grid container spacing={4}>
                  <Grid item xl={6}>
                    <img
                      style={{ height: '50px', width: '130px' }}
                      className=""
                      alt="..."
                      src={logo1}
                    />
                  </Grid>
                  <Grid item xl={6}>
                    <div className="symbol symbol-lg-75 symbol-primary text-right">
                      <span className="text-muted f">
                        10-shotlisted <br />
                        2-Selected
                      </span>
                    </div>
                  </Grid>
                </Grid>
                <div className="d-flex flex-column"></div>
              </div>
              <div className="mt-5">
                <h6 className="mb-7 fh">UX Lead and Researcher</h6>
                <h6 className="mb-7 f">HexLab Corporation Pvt. ltd</h6>
                <span className="f text-muted">
                  {' '}
                  <FontAwesomeIcon icon={['fas', 'map-marker-alt']} /> Los
                  Angeles, California, USA
                </span>
                <p className="mt-1 f mt-0 text-muted">
                  Compentation: €8k - €10k
                </p>
              </div>
              <Button className="btn-neutral-info hover-scale-sm mt-2">
                <span className="px-2">
                  {' '}
                  <FontAwesomeIcon icon={['fas', 'heart']} />
                </span>
                <span> Save</span>
              </Button>
            </div>
          </Grid>

          <Grid item xl={3}>
            <div className="card card-custom gutter-b card-stretch bg-white btn rounded text-left p-4">
              <div className="d-flex flex-column justify-content-between">
                <Grid container spacing={4}>
                  <Grid item xl={6}>
                    <img
                      style={{ height: '50px', width: '130px' }}
                      className=""
                      alt="..."
                      src={logo1}
                    />
                  </Grid>
                  <Grid item xl={6}>
                    <div className="symbol symbol-lg-75 symbol-primary text-right">
                      <span className="text-muted f">
                        10-shotlisted <br />
                        2-Selected
                      </span>
                    </div>
                  </Grid>
                </Grid>
                <div className="d-flex flex-column"></div>
              </div>
              <div className="mt-5">
                <h6 className="mb-7 fh">UX Lead and Researcher</h6>
                <h6 className="mb-7 f">HexLab Corporation Pvt. ltd</h6>
                <span className="f text-muted">
                  {' '}
                  <FontAwesomeIcon icon={['fas', 'map-marker-alt']} /> Los
                  Angeles, California, USA
                </span>
                <p className="mt-1 f mt-0 text-muted">
                  Compentation: €8k - €10k
                </p>
              </div>
              <Button className="btn-neutral-info hover-scale-sm mt-2">
                <span className="px-2">
                  {' '}
                  <FontAwesomeIcon icon={['fas', 'heart']} />
                </span>
                <span> Save</span>
              </Button>
            </div>
          </Grid>
        </Grid>
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
