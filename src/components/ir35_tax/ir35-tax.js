import React, { useState } from 'react';
import { Grid, Card, CardContent, Button, Radio } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

export default function IR35TaxComponent() {
  const [activeTab, setActiveTab] = useState('0');
  const [selectedValue, setSelectedValue] = useState('a');
  const [workSection, setWorkSection] = useState('');
  const [clientWorkSection, setClientWorkSection] = useState('');
  const [limitedCompany, setLimitedCompany] = useState('a');
  const [orgWorkSection, setOrgWorkSection] = useState('a');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      {activeTab !== '0' && (
        <div>
          <FontAwesomeIcon icon={['fas', 'angle-left']} className="mr-2" />
          <a
            href="javascript:void(0)"
            onClick={() => {
              const tabNo = parseInt(activeTab) - 1;
              toggle(tabNo.toString());
            }}>
            Back
          </a>
        </div>
      )}
      <Card>
        <CardContent>
          <div className="font-12">
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '0'
              })}
              index={0}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4 className="fa-3x">Disclaimer</h4>
                  <div>
                    <span className="fa-2x">
                      HMRC will stand by the result you get from this tool.
                    </span>
                  </div>
                  <div className="d-flex">
                    <div className="d-flex align-items-center">
                      <FontAwesomeIcon
                        icon={['fas', 'info-circle']}
                        className="fa-3x"
                      />
                      <div className="pl-3 text-f pt-3">
                        <p className="d-block">
                          This would not be the case if the information you have
                          provided was checked and found to be inaccurate.
                        </p>
                        <p className="d-block">
                          HMRC will also not stand by results achieved through
                          contrived arrangements, designed to get a particular
                          outcome from the service. This would be treated as
                          evidence of deliberate non-compliance, which can
                          attract higher associated penalties.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setActiveTab('1');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3">
                    Accept and continue
                  </Button>
                </Grid>
              </Grid>
            </div>
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '1'
              })}
              index={1}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <span className="font-size-md text-black-50">
                    About you and the work
                  </span>
                  <h4>What do you want to find out?</h4>
                  <div className="">
                    <ul>
                      <li>
                        <Radio
                          checked={selectedValue === 'a'}
                          onChange={() => {
                            setSelectedValue('a');
                          }}
                          value="a"
                          name="radio-button-demo"
                          aria-label="A"
                        />
                        <span>
                          If the off-payroll working rules (IR35) apply to a
                          contract
                        </span>
                      </li>
                      <li>
                        <Radio
                          checked={selectedValue === 'b'}
                          onChange={() => {
                            setSelectedValue('b');
                          }}
                          value="b"
                          name="radio-button-demo"
                          aria-label="B"
                        />
                        <span>
                          If some work is classed as employment or
                          self-employment for tax purposes
                        </span>
                      </li>
                    </ul>
                  </div>
                  <Button
                    variant="contained"
                    onClick={() => {
                      toggle('2');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '2'
              })}
              index={2}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <span className="font-size-md text-black-50">
                    About you and the work
                  </span>
                  <h4>Who are you?</h4>
                  <div className="">
                    <ul>
                      <li>
                        <Radio
                          checked={workSection === 'a'}
                          onChange={() => {
                            setWorkSection('a');
                          }}
                          value="a"
                          name="radio-button-demo"
                          aria-label="A"
                        />
                        <span>Worker</span>
                      </li>
                      <li>
                        <Radio
                          checked={workSection === 'b'}
                          onChange={() => {
                            setWorkSection('b');
                          }}
                          value="b"
                          name="radio-button-demo"
                          aria-label="B"
                        />
                        <span>Hirer</span>
                      </li>
                      {selectedValue === 'a' && (
                        <li>
                          <Radio
                            checked={workSection === 'c'}
                            onChange={() => {
                              setWorkSection('c');
                            }}
                            value="b"
                            name="radio-button-demo"
                            aria-label="B"
                          />
                          <span>Agency</span>
                        </li>
                      )}
                    </ul>
                  </div>
                  <Button
                    variant="contained"
                    onClick={() => {
                      toggle('3');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>

            {selectedValue === 'a' && (
              <div
                className={clsx('tab-item-wrapper', {
                  active: activeTab === '3'
                })}
                index={3}>
                <Grid container spacing={1} className="pt-3">
                  <Grid item xs={12}>
                    <h4>Continue as the worker to check a determination</h4>
                    <div className="d-flex">
                      <span>
                        It is the not the agency’s responsibility to determine
                        if the off-payroll working rules (IR35) apply to a
                        contract or other period of work. You can continue as if
                        you are the worker to check a determination.
                      </span>
                    </div>
                    <Button
                      variant="contained"
                      onClick={() => {
                        toggle('4');
                      }}
                      className="font-weight-bold btn-slack px-4 my-3">
                      Continue
                    </Button>
                  </Grid>
                </Grid>
              </div>
            )}

            {selectedValue === 'b' && (
              <div
                className={clsx('tab-item-wrapper', {
                  active: activeTab === '3'
                })}
                index={3}>
                <Grid container spacing={1} className="pt-3">
                  <Grid item xs={12}>
                    <span className="font-size-md text-black-50">
                      About you and the work
                    </span>
                    <h4>
                      Does the worker provide their services through a limited
                      company, partnership or unincorporated association?
                    </h4>
                    <div className="d-flex">
                      <Radio
                        checked={limitedCompany === 'a'}
                        onChange={() => {
                          setLimitedCompany('a');
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3">Yes</span>

                      <Radio
                        checked={limitedCompany === 'b'}
                        onChange={() => {
                          setLimitedCompany('b');
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3">No</span>
                    </div>
                    <Button
                      variant="contained"
                      onClick={() => {
                        toggle('4');
                      }}
                      className="font-weight-bold btn-slack px-4 my-3">
                      Continue
                    </Button>
                  </Grid>
                </Grid>
              </div>
            )}

            {limitedCompany === 'a' && selectedValue === 'b' && (
              <div
                className={clsx('tab-item-wrapper', {
                  active: activeTab === '4'
                })}
                index={4}>
                <Grid container spacing={1} className="pt-3">
                  <Grid item xs={12}>
                    <span className="font-size-md text-black-50">
                      You need to start again
                    </span>
                    <h4>
                      When a worker is providing their services through an
                      intermediary, you need to find out if the off-payroll
                      working rules (IR35) (opens in a new window) apply.
                    </h4>

                    <Button
                      variant="contained"
                      onClick={() => {
                        toggle('0');
                      }}
                      className="font-weight-bold btn-slack px-4 my-3">
                      Start again
                    </Button>
                  </Grid>
                </Grid>
              </div>
            )}

            {limitedCompany === 'b' && (
              <div
                className={clsx('tab-item-wrapper', {
                  active: activeTab === '4'
                })}
                index={4}>
                <Grid container spacing={1} className="pt-3">
                  <Grid item xs={12}>
                    <span className="font-size-md text-black-50">
                      About you and the work
                    </span>
                    <h4>
                      Has the worker already started working for your
                      organisation?
                    </h4>
                    <div className="d-flex">
                      <Radio
                        checked={orgWorkSection === 'a'}
                        onChange={() => {
                          setOrgWorkSection('a');
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3">Yes</span>

                      <Radio
                        checked={orgWorkSection === 'b'}
                        onChange={() => {
                          setOrgWorkSection('b');
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3">No</span>
                    </div>
                    <Button
                      variant="contained"
                      onClick={() => {
                        toggle('5');
                      }}
                      className="font-weight-bold btn-slack px-4 my-3">
                      Continue
                    </Button>
                  </Grid>
                </Grid>
              </div>
            )}

            {selectedValue === 'a' && (
              <div
                className={clsx('tab-item-wrapper', {
                  active: activeTab === '4'
                })}
                index={4}>
                <Grid container spacing={1} className="pt-3">
                  <Grid item xs={12}>
                    <span className="font-size-md text-black-50">
                      About you and the work
                    </span>
                    <h4>Have you already started working for this client?</h4>
                    <div className="d-flex">
                      <Radio
                        checked={clientWorkSection === 'a'}
                        onChange={() => {
                          setClientWorkSection('a');
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3">Yes</span>

                      <Radio
                        checked={clientWorkSection === 'b'}
                        onChange={() => {
                          setClientWorkSection('b');
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3">No</span>
                    </div>
                    <Button
                      variant="contained"
                      onClick={() => {
                        toggle('5');
                      }}
                      className="font-weight-bold btn-slack px-4 my-3">
                      Continue
                    </Button>
                  </Grid>
                </Grid>
              </div>
            )}

            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '5'
              })}
              index={5}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <span className="font-size-md text-black-50">
                    Worker’s duties
                  </span>
                  <h4>Will you be an ‘Office Holder’?</h4>
                  <div className="text-f">
                    <span>
                      This can include being a board member, treasurer, trustee,
                      company secretary or company director.
                    </span>
                    <span>
                      Read more about{' '}
                      <a href="javascript:void(0)">
                        Office Holders (opens in a new window).
                      </a>
                    </span>
                  </div>

                  <div className="d-flex">
                    <Radio
                      checked={clientWorkSection === 'a'}
                      onChange={() => {
                        setClientWorkSection('a');
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3">Yes</span>

                    <Radio
                      checked={clientWorkSection === 'b'}
                      onChange={() => {
                        setClientWorkSection('b');
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3">No</span>
                  </div>
                  <Button
                    variant="contained"
                    onClick={() => {
                      // toggle('4');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
