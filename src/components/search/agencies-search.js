import React, { useState } from 'react';

import { Card, Grid, Button, TextField, Table } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import AddsComponents from 'components/add_component';
import PerfectScrollbar from 'react-perfect-scrollbar';

import clogo from '../../assets/images/stock-photos/c-logo.webp';
import clogo1 from '../../assets/images/stock-photos/company.png';
import { getCurrentUser } from 'helper';

export default function AgenciesSearchComponent() {
  const [currentUser] = useState(getCurrentUser());

  // const [value, setValue] = useState('');
  // const options = useMemo(() => countryList().getData(), []);

  // const changeHandler = (value) => {
  //   setValue(value);
  // };
  // const [value1, setValue1] = useState('');
  // const [value2, setValue2] = useState('');

  // const changeHandler1 = (value1) => {
  //   setValue1(value1);
  // };
  // const changeHandler2 = (value2) => {
  //   setValue2(value2);
  // };

  // const [value_range1, setValueRange1] = useState([10, 40]);
  // const [value_range2, setValueRange2] = useState([20, 37]);
  // const [value_range3, setValueRange3] = useState([10, 77]);
  // const [value_range4, setValueRange4] = useState([20, 57]);

  // const handleChange1 = (event, newValue) => {
  //   setValueRange1(newValue);
  // };

  // const handleChange2 = (event, newValue) => {
  //   setValueRange2(newValue);
  // };

  // const handleChange3 = (event, newValue) => {
  //   setValueRange3(newValue);
  // };

  // const handleChange4 = (event, newValue) => {
  //   setValueRange4(newValue);
  // };

  return (
    <>
      <div className="page-title">
        <WorkIcon />
        <div className="title pt-3">
          <b className="heading">Search Agencies</b>
        </div>
      </div>

      <Card className="px-3 pt-3">
        <Grid container spacing={2}>
          <Grid item md={3} xs={12}>
            <b>Name</b>
            <div className="mb-3 mt-2">
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search by name"
                className="w-100"
                InputProps={{
                  style: {
                    height: '37px'
                  }
                }}
              />
            </div>
          </Grid>
          <Grid item md={3} xs={12}>
            <b>Industry</b>
            <div className="mb-3 mt-2">
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search by industry"
                className="w-100"
                InputProps={{
                  style: {
                    height: '37px'
                  }
                }}
              />
            </div>
          </Grid>
          <Grid item md={3} xs={12}>
            <b>Location</b>
            <div className="mb-3 mt-2">
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search by location"
                className="w-100"
                InputProps={{
                  style: {
                    height: '37px'
                  }
                }}
              />
            </div>
          </Grid>
          <Grid item md={3} xs={12}>
            <b>Jobs</b>
            <div className="mb-3 mt-2">
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search by number of jobs active"
                className="w-100"
                InputProps={{
                  style: {
                    height: '37px'
                  }
                }}
              />
            </div>
            {/* <b>Price Range</b>
            <div className="range-meter">
              <Slider
                value={value_range4}
                onChange={handleChange4}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
              />
            </div> */}
          </Grid>
        </Grid>
        <div className="divider opacity-8 my-1 mx-2" />
        <div className="card-footer float-right">
          <Button className="btn-primary">Search now</Button>
        </div>
      </Card>

      <Grid container spacing={2} className="mt-2">
        <Grid item xs={12} sm={12}>
          <Card className="">
            <div className="card-header">
              <div className="card-header--title font-size-lg">
                <b>Agencies recently added</b>
              </div>
            </div>

            <div className="table-responsive-md">
              <PerfectScrollbar>
                <Table className="table table-hover text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th className="text-left">Added On</th>
                      <th>Agency Name</th>
                      <th className="text-center">Logo</th>
                      <th className="text-center">Location</th>
                      <th className="text-center">Industry</th>
                      <th className="text-center">No of jobs active</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-weight-bold">12/12/2020</td>
                      <td>Helpful Headhunt</td>
                      <td className="text-center">
                        <div
                          className="avatar-icon-wrapper avatar-icon-sm"
                          title="Lili Pemberton">
                          <div className="avatar-icon">
                            <img alt="..." src={clogo1} />
                          </div>
                        </div>
                      </td>
                      <td className="text-center text-black-50">
                        Manchester, UK
                      </td>
                      <td className="text-center">IT Industry</td>
                      <td className="text-center">20</td>
                      <td className="text-center">
                        <a
                          className="a-blue"
                          href="!#"
                          onClick={(e) => e.preventDefault()}>
                          View Profile
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">10/12/2020</td>
                      <td>Accurafind</td>
                      <td className="text-center">
                        <div
                          className="avatar-icon-wrapper avatar-icon-sm"
                          title="Lili Pemberton">
                          <div className="avatar-icon">
                            <img alt="..." src={clogo} />
                          </div>
                        </div>
                      </td>
                      <td className="text-center text-black-50">London, UK</td>
                      <td className="text-center">Biotechnology</td>
                      <td className="text-center">15</td>
                      <td className="text-center">
                        <a
                          className="a-blue"
                          href="!#"
                          onClick={(e) => e.preventDefault()}>
                          View Profile
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">05/12/2020</td>
                      <td>Right Recruiting</td>
                      <td className="text-center">
                        <div
                          className="avatar-icon-wrapper avatar-icon-sm"
                          title="Lili Pemberton">
                          <div className="avatar-icon">
                            <img alt="..." src={clogo1} />
                          </div>
                        </div>
                      </td>
                      <td className="text-center text-black-50">
                        Billingham, UK
                      </td>
                      <td className="text-center">E-commerce</td>
                      <td className="text-center">12</td>
                      <td className="text-center">
                        <a
                          className="a-blue"
                          href="!#"
                          onClick={(e) => e.preventDefault()}>
                          View Profile
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">21/11/2020</td>
                      <td>Career Co.</td>
                      <td className="text-center">
                        <div
                          className="avatar-icon-wrapper avatar-icon-sm"
                          title="Lili Pemberton">
                          <div className="avatar-icon">
                            <img alt="..." src={clogo} />
                          </div>
                        </div>
                      </td>
                      <td className="text-center text-black-50">London, UK</td>
                      <td className="text-center">Media and Entertainment</td>
                      <td className="text-center">10</td>
                      <td className="text-center">
                        <a
                          className="a-blue"
                          href="!#"
                          onClick={(e) => e.preventDefault()}>
                          View Profile
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </PerfectScrollbar>
            </div>
            <div className="card-footer py-3 text-center">
              <Button
                size="small"
                className="btn-outline-second"
                variant="text">
                View more
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
      {currentUser.role === 'candidate' && <AddsComponents />}
    </>
  );
}
