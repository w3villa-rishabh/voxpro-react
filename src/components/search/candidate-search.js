import React from 'react';

import { Card, Grid, Button, TextField, Table } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';

import PerfectScrollbar from 'react-perfect-scrollbar';

export default function CandidateSearchComponent() {
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
          <b className="heading">Search Candidates</b>
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
            <b>Job Title</b>
            <div className="mb-3 mt-2">
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search by job title"
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
            <b>Availability</b>
            <div className="mb-3 mt-2">
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search by candidate availability"
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
                <b>Candidates recently added</b>
              </div>
            </div>

            <div className="table-responsive-md">
              <PerfectScrollbar>
                <Table className="table table-hover text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th className="text-left">Added On</th>
                      <th className="text-center">Name</th>
                      <th className="text-center">Location</th>
                      <th className="text-center">Job Title</th>
                      <th className="text-center">Availability</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-weight-bold">12/12/2020</td>
                      <td className="text-center">Deepak Kumar</td>
                      <td className="text-center text-black-50">
                        Manchester, UK
                      </td>
                      <td className="text-center">IT Analyst</td>
                      <td className="text-center">Immediately</td>
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
                      <td className="text-center">Akshay Sharma</td>
                      <td className="text-center text-black-50">London, UK</td>
                      <td className="text-center">Software Developer</td>
                      <td className="text-center">
                        Availabile from 20/01/2021
                      </td>
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
                      <td className="text-center">Rohit Wasan</td>
                      <td className="text-center text-black-50">
                        Billingham, UK
                      </td>
                      <td className="text-center">Business Developer</td>
                      <td className="text-center">Unavailable</td>
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
                      <td className="text-center">Rishabh Pandey</td>
                      <td className="text-center text-black-50">London, UK</td>
                      <td className="text-center">Business Analyst</td>
                      <td className="text-center">Immediately</td>
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
    </>
  );
}
