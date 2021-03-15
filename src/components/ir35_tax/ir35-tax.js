import React, { useState } from 'react';
import { Grid, Card, CardContent, Button, Radio } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

export default function IR35TaxComponent() {
  const [activeTab, setActiveTab] = useState('1');

  const [policyObj, setPolicyObj] = useState({
    limitedCompany: 'a',
    organization: 'b',
    director: 'a',
    reject: 'a',
    substitute: 'a',
    originallyAgreed: 'a',
    organisationDone: 'a',
    organisationHours: 'a',
    organisationWork: 'a',
    equipmentPay: 'a',
    vehicleCost: 'a',
    stationery: 'a',
    beforePay: 'a',
    paidWork: 'a',
    workerRight: 'a',
    corporateBenefits: 'a',
    suppliers: 'a',
    similarOrganisations: 'a',
    ownership: 'a',
    belongOrganisation: 'a',
    previousContract: 'a',
    immediately: 'a',
    availableWorking: 'a',
    months: 'a'
  });

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      {activeTab !== '1' && (
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
            {/* //Section 1 */}
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '1'
              })}
              index={1}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>
                    Does the worker provide their services through a limited
                    company, partnership or unincorporated association?
                  </h4>
                  <div className="text-f">
                    <p>These are also known as intermediaries.</p>
                    <p>
                      An ‘unincorporated association’ is an organisation set up
                      by a group of people for a reason other than to make a
                      profit. For example, a voluntary group or a sports club.
                    </p>
                  </div>
                  <div className="d-flex">
                    <Radio
                      checked={policyObj.limitedCompany === 'a'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, limitedCompany: 'a' });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3">Yes</span>

                    <Radio
                      checked={policyObj.limitedCompany === 'b'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, limitedCompany: 'b' });
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
                      setActiveTab('2');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>
            {/* //Section 2 */}
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '2'
              })}
              index={2}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>
                    Has the worker already started working for your
                    organisation?
                  </h4>
                  <div className="">
                    <ul>
                      <li>
                        <Radio
                          checked={policyObj.organization === 'a'}
                          onChange={() => {
                            setPolicyObj({ ...policyObj, organization: 'a' });
                          }}
                          value="a"
                          name="radio-button-demo"
                          aria-label="A"
                        />
                        <span>Yes</span>
                      </li>
                      <li>
                        <Radio
                          checked={policyObj.organization === 'b'}
                          onChange={() => {
                            setPolicyObj({ ...policyObj, organization: 'b' });
                          }}
                          value="b"
                          name="radio-button-demo"
                          aria-label="B"
                        />
                        <span>No</span>
                      </li>
                    </ul>
                  </div>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setActiveTab('3');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>
            {/* Section 3 */}
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '3'
              })}
              index={3}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>Will the worker be an ‘Office Holder’?</h4>
                  <div className="text-f">
                    <span>
                      This can include being a board member, treasurer, trustee,
                      company secretary or company director.
                    </span>
                  </div>
                  <div className="">
                    <ul>
                      <li>
                        <Radio
                          checked={policyObj.director === 'a'}
                          onChange={() => {
                            setPolicyObj({ ...policyObj, director: 'a' });
                          }}
                          value="a"
                          name="radio-button-demo"
                          aria-label="A"
                        />
                        <span>Yes</span>
                      </li>
                      <li>
                        <Radio
                          checked={policyObj.director === 'b'}
                          onChange={() => {
                            setPolicyObj({ ...policyObj, director: 'b' });
                          }}
                          value="b"
                          name="radio-button-demo"
                          aria-label="B"
                        />
                        <span>No</span>
                      </li>
                    </ul>
                  </div>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setActiveTab('4');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>
            {/* Section 4 */}
            {policyObj.organization === 'a' && (
              <div
                className={clsx('tab-item-wrapper', {
                  active: activeTab === '4'
                })}
                index={4}>
                <Grid container spacing={1} className="pt-3">
                  <Grid item xs={12}>
                    <h4>
                      Has the worker ever sent a substitute to do this work?
                    </h4>
                    <div className="text-f">
                      <span>
                        A substitute is someone the worker sends in their place
                        to do their role.
                      </span>
                    </div>
                    <Button
                      variant="contained"
                      onClick={() => {
                        setActiveTab('5');
                      }}
                      className="font-weight-bold btn-slack px-4 my-3">
                      Continue
                    </Button>
                  </Grid>
                </Grid>
              </div>
            )}
            {/* Section 4A */}
            {policyObj.organization === 'b' && (
              <div
                className={clsx('tab-item-wrapper', {
                  active: activeTab === '4'
                })}
                index={4}>
                <Grid container spacing={1} className="pt-3">
                  <Grid item xs={12}>
                    <h4>Do you have the right to reject a substitute?</h4>
                    <div className="text-f">
                      <span>
                        A substitute is someone the worker sends in their place
                        to do their role.
                      </span>
                      <span>
                        This can include rejecting a substitute even if they are
                        equally qualified, and meet your interviewing, vetting
                        and security clearance procedures.
                      </span>
                    </div>
                    <div className="d-flex">
                      <Radio
                        checked={policyObj.reject === 'a'}
                        onChange={() => {
                          setPolicyObj({ ...policyObj, reject: 'a' });
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3">Yes</span>

                      <Radio
                        checked={policyObj.reject === 'b'}
                        onChange={() => {
                          setPolicyObj({ ...policyObj, reject: 'b' });
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
                        setActiveTab('5');
                      }}
                      className="font-weight-bold btn-slack px-4 my-3">
                      Continue
                    </Button>
                  </Grid>
                </Grid>
              </div>
            )}

            {/* Section 5 */}
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '5'
              })}
              index={5}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>Did the worker pay their substitute?</h4>
                  <div className="text-f">
                    <span>
                      This includes payments made by the worker or their
                      business.
                    </span>
                  </div>
                  <div className="d-flex">
                    <Radio
                      checked={policyObj.substitute === 'a'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, substitute: 'a' });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3">Yes</span>

                    <Radio
                      checked={policyObj.substitute === 'b'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, substitute: 'b' });
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
                      setActiveTab('6');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>

            {/* Section 6 */}
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '6'
              })}
              index={6}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>
                    Does your organisation have the right to move the worker
                    from the task they originally agreed to do?
                  </h4>
                  <div className="text-f">
                    <span>
                      A worker taken on for general tasks, rather than one
                      specific task, might be moved as and when priorities
                      change. The client may not need the worker’s permission to
                      move them.
                    </span>
                    <br />
                    <a className="a-blue" href="javascript:void(0)">
                      Read more examples about the client’s control over what
                      the worker does (opens in a new window).
                    </a>
                  </div>
                  <div className="d-flex">
                    <Radio
                      checked={policyObj.originallyAgreed === 'a'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, originallyAgreed: 'a' });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3">Yes</span>

                    <Radio
                      checked={policyObj.originallyAgreed === 'b'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, originallyAgreed: 'b' });
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
                      setActiveTab('7');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>

            {/* Section 7 */}
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '7'
              })}
              index={7}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>
                    Does your organisation have the right to decide how the work
                    is done?
                  </h4>
                  <div className="text-f">
                    <span>
                      This can include your organisation instructing, guiding or
                      advising the way the task should be completed.
                    </span>
                    <span>
                      This is not relevant if it is highly skilled work. For
                      example, an airline pilot.
                    </span>
                    <br />
                    <a className="a-blue" href="javascript:void(0)">
                      Read more examples of how the work is done (opens in a new
                      window).
                    </a>
                  </div>
                  <div className="d-flex">
                    <Radio
                      checked={policyObj.organisationDone === 'a'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, organisationDone: 'a' });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3">Yes</span>

                    <Radio
                      checked={policyObj.organisationDone === 'b'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, organisationDone: 'b' });
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
                      setActiveTab('8');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>

            {/* Section 8 */}
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '8'
              })}
              index={8}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>
                    Does your organisation have the right to decide the worker’s
                    working hours?
                  </h4>

                  <div className="d-flex">
                    <Radio
                      checked={policyObj.organisationHours === 'a'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, organisationHours: 'a' });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3">Yes</span>

                    <Radio
                      checked={policyObj.organisationHours === 'b'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, organisationHours: 'b' });
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
                      setActiveTab('9');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>

            {/* Section 9 */}
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '9'
              })}
              index={9}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>
                    Does your organisation have the right to decide where the
                    worker does the work?
                  </h4>

                  <div className="d-flex">
                    <Radio
                      checked={policyObj.organisationWork === 'a'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, organisationWork: 'a' });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3">Yes</span>

                    <Radio
                      checked={policyObj.organisationWork === 'b'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, organisationWork: 'b' });
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
                      setActiveTab('10');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>

            {/* Section 10 */}
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '10'
              })}
              index={10}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>
                    Will the worker have to buy equipment before your
                    organisation pays them?
                  </h4>
                  <div className="text-f">
                    <span>
                      This can include heavy machinery or high-cost specialist
                      equipment used for this work. This does not include
                      laptops, tablets and phones.
                    </span>
                    <span>Vehicle costs are covered in the next question.</span>
                  </div>

                  <div className="d-flex">
                    <Radio
                      checked={policyObj.equipmentPay === 'a'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, equipmentPay: 'a' });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3">Yes</span>

                    <Radio
                      checked={policyObj.equipmentPay === 'b'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, equipmentPay: 'b' });
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
                      setActiveTab('11');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>

            {/* Section 11 */}
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '11'
              })}
              index={11}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>
                    Will the worker have to fund any vehicle costs before your
                    organisation pays them?
                  </h4>
                  <div className="text-f">
                    <span>
                      This can include purchasing, leasing, hiring, fuel and
                      other running costs for this work. This does not include
                      commuting or personal vehicle costs.
                    </span>
                  </div>

                  <div className="d-flex">
                    <Radio
                      checked={policyObj.vehicleCost === 'a'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, vehicleCost: 'a' });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3">Yes</span>

                    <Radio
                      checked={policyObj.vehicleCost === 'b'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, vehicleCost: 'b' });
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
                      setActiveTab('12');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>

            {/* Section 12 */}
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '12'
              })}
              index={12}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>
                    Will the worker have to buy materials before your
                    organisation pays them?
                  </h4>
                  <div className="text-f">
                    <span>
                      This can include items that form a lasting part of the
                      work, or are left behind when the worker leaves. This does
                      not include items like stationery.
                    </span>
                    <span>
                      This question is most likely to be relevant to the
                      construction industry.
                    </span>
                  </div>

                  <div className="d-flex">
                    <Radio
                      checked={policyObj.stationery === 'a'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, stationery: 'a' });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3">Yes</span>

                    <Radio
                      checked={policyObj.stationery === 'b'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, stationery: 'b' });
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
                      setActiveTab('13');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>

            {/* Section 13 */}
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '13'
              })}
              index={13}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>
                    Will the worker have to fund any other costs before your
                    organisation pays them?
                  </h4>
                  <div className="text-f">
                    <span>
                      This can include non-commuting travel or accommodation, or
                      external business premises for this work only.
                    </span>
                  </div>

                  <div className="d-flex">
                    <Radio
                      checked={policyObj.beforePay === 'a'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, beforePay: 'a' });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3">Yes</span>

                    <Radio
                      checked={policyObj.beforePay === 'b'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, beforePay: 'b' });
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
                      setActiveTab('14');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>

            {/* Section 14 */}
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '14'
              })}
              index={14}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>How will the worker be paid for this work?</h4>

                  <div className="d-flex">
                    <Radio
                      checked={policyObj.paidWork === 'a'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, paidWork: 'a' });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3">Yes</span>

                    <Radio
                      checked={policyObj.paidWork === 'b'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, paidWork: 'b' });
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
                      setActiveTab('15');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>

            {/* Section 15 */}
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '15'
              })}
              index={15}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>
                    If your organisation was not happy with the work, would the
                    worker have to put it right?{' '}
                  </h4>

                  <div className="d-flex">
                    <Radio
                      checked={policyObj.workerRight === 'a'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, workerRight: 'a' });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3">Yes</span>

                    <Radio
                      checked={policyObj.workerRight === 'b'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, workerRight: 'b' });
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
                      setActiveTab('16');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>

            {/* Section 16 */}
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '16'
              })}
              index={16}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>
                    Will you provide the worker with paid-for corporate
                    benefits?
                  </h4>
                  <div className="text-f">
                    <span>
                      This can include external gym memberships, health
                      insurance or retail discounts.
                    </span>
                  </div>

                  <div className="d-flex">
                    <Radio
                      checked={policyObj.corporateBenefits === 'a'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, corporateBenefits: 'a' });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3">Yes</span>

                    <Radio
                      checked={policyObj.corporateBenefits === 'b'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, corporateBenefits: 'b' });
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
                      setActiveTab('17');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>

            {/* Section 17 */}
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '17'
              })}
              index={17}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>
                    Will the worker have any management responsibilities for
                    your organisation?
                  </h4>
                  <div className="text-f">
                    <span>
                      This can include deciding how much to pay someone, hiring
                      or dismissing workers, and delivering appraisals.
                    </span>
                  </div>
                  <div className="d-flex">
                    <Radio
                      checked={policyObj.corporateBenefits === 'a'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, corporateBenefits: 'a' });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3">Yes</span>

                    <Radio
                      checked={policyObj.corporateBenefits === 'b'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, corporateBenefits: 'b' });
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
                      setActiveTab('18');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>

            {/* Section 18 */}
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '18'
              })}
              index={18}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>
                    How would the worker introduce themselves to your consumers
                    or suppliers?
                  </h4>

                  <div className="d-flex">
                    <Radio
                      checked={policyObj.suppliers === 'a'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, suppliers: 'a' });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3">Yes</span>

                    <Radio
                      checked={policyObj.suppliers === 'b'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, suppliers: 'b' });
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
                      setActiveTab('19');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>

            {/* Section 19 */}
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '19'
              })}
              index={19}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>
                    Does this contract stop the worker from doing similar work
                    for other organisations?
                  </h4>
                  <div className="text-f">
                    <span>This includes working for your competitors.</span>
                  </div>
                  <div className="d-flex">
                    <Radio
                      checked={policyObj.similarOrganisations === 'a'}
                      onChange={() => {
                        setPolicyObj({
                          ...policyObj,
                          similarOrganisations: 'a'
                        });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3">Yes</span>

                    <Radio
                      checked={policyObj.similarOrganisations === 'b'}
                      onChange={() => {
                        setPolicyObj({
                          ...policyObj,
                          similarOrganisations: 'b'
                        });
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
                      setActiveTab('20');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>

            {/* Section 20 */}
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '20'
              })}
              index={20}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>
                    Are there any ownership rights relating to this contract?
                  </h4>
                  <div className="text-f">
                    <span>
                      These types of rights are usually found in media, arts and
                      creative industry contracts. This includes all
                      intellectual property rights, copyright, trademarks,
                      patents, and image rights.
                    </span>
                  </div>
                  <div className="d-flex">
                    <Radio
                      checked={policyObj.ownership === 'a'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, ownership: 'a' });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3">Yes</span>

                    <Radio
                      checked={policyObj.ownership === 'b'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, ownership: 'b' });
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
                      setActiveTab('21');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>

            {/* Section 21 */}
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '21'
              })}
              index={21}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>
                    Does the contract state the rights to this work belong to
                    your organisation?
                  </h4>
                  <div className="text-f">
                    <span>
                      This does not include the option to buy the rights for a
                      separate fee.
                    </span>
                  </div>
                  <div className="d-flex">
                    <Radio
                      checked={policyObj.belongOrganisation === 'a'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, belongOrganisation: 'a' });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3">Yes</span>

                    <Radio
                      checked={policyObj.belongOrganisation === 'b'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, belongOrganisation: 'b' });
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
                      setActiveTab('22');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>

            {/* Section 22 */}
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '22'
              })}
              index={22}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>
                    Has the worker had a previous contract with your
                    organisation?
                  </h4>

                  <div className="d-flex">
                    <Radio
                      checked={policyObj.previousContract === 'a'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, previousContract: 'a' });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3">Yes</span>

                    <Radio
                      checked={policyObj.previousContract === 'b'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, previousContract: 'b' });
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
                      setActiveTab('23');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>

            {/* Section 23 */}
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '23'
              })}
              index={23}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>
                    Will this contract start immediately after the previous one
                    ended?
                  </h4>
                  <div className="text-f">
                    <span>
                      This does not include any holiday period between the two
                      contracts.
                    </span>
                  </div>
                  <div className="d-flex">
                    <Radio
                      checked={policyObj.immediately === 'a'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, immediately: 'a' });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3">Yes</span>

                    <Radio
                      checked={policyObj.immediately === 'b'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, immediately: 'b' });
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
                      setActiveTab('24');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>

            {/* Section 24 */}
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '24'
              })}
              index={24}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>
                    Will this work take up the majority of the worker’s
                    available working time?
                  </h4>
                  <div className="text-f">
                    <span>
                      This includes preparation or any other time necessary to
                      deliver the work, even if it is not referred to in the
                      contract.
                    </span>
                    <br />
                    <a className="a-blue" href="javascript:void(0)">
                      Read more about the worker’s available working time (opens
                      in a new window).
                    </a>
                  </div>
                  <div className="d-flex">
                    <Radio
                      checked={policyObj.availableWorking === 'a'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, availableWorking: 'a' });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3">Yes</span>

                    <Radio
                      checked={policyObj.availableWorking === 'b'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, availableWorking: 'b' });
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
                      setActiveTab('25');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>

            {/* Section 25 */}
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '25'
              })}
              index={25}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>
                    Has the worker done any self-employed work of a similar
                    nature for other clients in the last 12 months?
                  </h4>
                  <div className="text-f">
                    <span>
                      This only refers to work requiring similar skills,
                      responsibilities, knowledge, or ability.
                    </span>
                    <span>
                      Self-employed work is when it is the worker’s
                      responsibility to pay Income Tax and National Insurance
                      contributions on their earnings.
                    </span>
                  </div>
                  <div className="d-flex">
                    <Radio
                      checked={policyObj.months === 'a'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, months: 'a' });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3">Yes</span>

                    <Radio
                      checked={policyObj.months === 'b'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, months: 'b' });
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
                      setActiveTab('25');
                      console.log('policyObj', policyObj);
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
