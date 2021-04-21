import React, { useState, useEffect } from 'react';

import {
  Card,
  Grid,
  Button,
  TextField,
  Table,
  Tooltip
} from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import AddsComponents from 'components/add_component';
import PerfectScrollbar from 'react-perfect-scrollbar';

import avatar2 from '../../assets/images/avatars/avatar2.jpg';

import avatar4 from '../../assets/images/avatars/avatar4.jpg';
import avatar7 from '../../assets/images/avatars/avatar7.jpg';

// function valuetext(value) {
//   return `${value}°C`;
// }

export default function CompaniesSearchComponent() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const handleWindowSizeChange = () => {
    console.log('window.innerWidth', window.innerWidth);
    setWidth(window.innerWidth);
  };

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
          <b className="heading">Search Companies</b>
        </div>
      </div>

      <Card className="px-3 pt-3">
        <Grid container spacing={2}>
          <Grid item md={3} xs={12}>
            <b>Category</b>
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
            <b>Manufacture</b>
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
            <b>Country</b>
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
                placeholder="Search by name of jobs active"
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
          <Card className="px-3 pt-3">
            <div className="card-header py-3">
              <div className="card-header--title font-size-lg">
                <b>Recent added jobs</b>
              </div>
            </div>

            <div className="table-responsive-md">
              <PerfectScrollbar>
                <Table className="table table-hover text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th className="bg-white text-left">Job ID</th>
                      <th className="bg-white">Role</th>
                      <th className="bg-white text-center">Company</th>
                      <th className="bg-white text-center">Created date</th>
                      <th className="bg-white text-center">View no of Jobs</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-weight-bold">#453</td>
                      <td>Role 1</td>
                      <td className="text-center">
                        <div
                          className="avatar-icon-wrapper avatar-icon-sm"
                          title="Lili Pemberton">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar2} />
                          </div>
                        </div>
                      </td>
                      <td className="text-center text-black-50">12/12/2020</td>
                      <td className="text-center">
                        <a
                          className="a-blue"
                          href="!#"
                          onClick={(e) => e.preventDefault()}>
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">#584</td>
                      <td>Role 2</td>
                      <td className="text-center">
                        <Tooltip title="Arvin Weston">
                          <div className="avatar-icon-wrapper avatar-icon-sm">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar4} />
                            </div>
                          </div>
                        </Tooltip>
                      </td>
                      <td className="text-center text-black-50">06/08/2022</td>
                      <td className="text-center">
                        <a
                          className="a-blue"
                          href="!#"
                          onClick={(e) => e.preventDefault()}>
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">#764</td>
                      <td>Role 3</td>
                      <td className="text-center">
                        <Tooltip title="Mali Rosario">
                          <div className="avatar-icon-wrapper avatar-icon-sm">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar7} />
                            </div>
                          </div>
                        </Tooltip>
                      </td>
                      <td className="text-center text-black-50">12/12/2020</td>
                      <td className="text-center">
                        <a
                          className="a-blue"
                          href="!#"
                          onClick={(e) => e.preventDefault()}>
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">#453</td>
                      <td>Role 4</td>
                      <td className="text-center">
                        <div
                          className="avatar-icon-wrapper avatar-icon-sm"
                          title="Marion Devine">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar7} />
                          </div>
                        </div>
                      </td>
                      <td className="text-center text-black-50">12/12/2020</td>
                      <td className="text-center">
                        <a
                          className="a-blue"
                          href="!#"
                          onClick={(e) => e.preventDefault()}>
                          View
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
      <AddsComponents />
    </>
  );
}
