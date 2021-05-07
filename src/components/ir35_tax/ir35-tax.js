import React, { useEffect, useState } from 'react';
import { Grid, Button, Radio } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import logo from '../../assets/images/voxpro-images/logo_vp.png';
import $ from 'jquery';

export default function IR35TaxComponent() {
  const [activeTab, setActiveTab] = useState('0');

  const [policyObj, setPolicyObj] = useState({
    noquestion: 'b',
    limitedCompany: 'a',
    ir35Question: [
      {
        heading: 'About you and the work',
        questions: [
          {
            activeTab: '0',
            question: `Do you provide your services through a limited company,
                      partnership or unincorporated association?`,
            candidateAnswer: 'Yes'
          }
        ]
      },
      {
        heading: 'Worker’s duties',
        questions: [
          {
            questionNo: 1,
            candidateQuestion: '',
            tabNo: ''
          }
        ]
      },
      {
        heading: 'Substitutes and helpers',
        questions: [
          {
            questionNo: 1,
            candidateQuestion:
              'Have you ever sent a substitute to do this work?',
            tabNo: ''
          }
        ]
      },
      {
        heading: 'Working arrangements',
        questions: [
          {
            questionNo: 1,
            candidateQuestion:
              'Have you ever sent a substitute to do this work?',
            tabNo: ''
          }
        ]
      },
      {
        heading: 'Worker’s financial risk',
        questions: [
          {
            questionNo: 1,
            candidateQuestion:
              'Have you ever sent a substitute to do this work?',
            tabNo: ''
          }
        ]
      },
      {
        heading: 'Worker’s involvement',
        questions: [
          {
            questionNo: 1,
            candidateQuestion:
              'Have you ever sent a substitute to do this work?',
            tabNo: ''
          }
        ]
      },
      {
        heading: 'Worker’s contracts',
        questions: [
          {
            questionNo: 1,
            candidateQuestion:
              'Have you ever sent a substitute to do this work?',
            tabNo: ''
          }
        ]
      }
    ],
    organization: 'b',
    director: 'a',
    reject: 'a',
    substitute: 'a',
    originallyAgreed: 'a',
    organisationWorkDone: 'a',
    payment: '',
    organisationHours: 'a',
    organisationWork: 'a',
    decideWorkingHours: 'a',
    decideWhereWorkIsDone: 'a',
    equipmentCosts: 'a',
    equipmentPay: 'a',
    vehicleCost: 'a',
    materialCost: 'a',
    otherCost: 'a',
    howWorkerIsPaid: 'a',
    putWorkRight: 'a',
    beforePay: 'a',
    paidWork: 'a',
    workerRight: 'a',
    corporateBenefits: 'a',
    managementResponsibilities: 'a',
    introduceWorker: 'a',
    noSimilarWork: 'a',
    suppliers: 'a',
    similarOrganisations: 'a',
    ownership: 'a',
    needPermission: 'a',
    clientOwnsRights: 'a',
    previousContract: 'a',
    belongOrganisation: 'a',
    immediately: 'a',
    availableWorking: 'a',
    months: 'a'
  });

  useEffect(() => {
    setTimeout(() => {
      $('.app-content--inner').addClass('remove-p');
      $('.app-footer').css('display', 'none');
    }, 0);
  });

  useEffect(() => {
    // componentWillUnmount
    return () => {
      setTimeout(() => {
        $('.app-content--inner').removeClass('remove-p');
        $('.app-footer').css('display', 'block');
      }, 0);
    };
  }, []);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  document.addEventListener('keydown', function (event) {
    if (event.code === 'Enter' && activeTab === '0') {
      setActiveTab('1');
    }
  });

  const submitQuestions = () => {
    console.log('submitQuestions', policyObj.ir35Question);
  };

  return (
    <div className="ir35-background text-white">
      <div className="img-bg"></div>

      <div className="font-12 position-relative p-3">
        {activeTab > '0' && (
          <div className="fh">
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
        {/* when no ir-35 */}
        {policyObj.noquestion === 'a' && (
          <div
            className={clsx('tab-item-wrapper no-scroll', {
              active: activeTab === '0'
            })}
            index={0}>
            <div className="text-center w-100 mt-5">
              <img alt="..." className="ir35-logo" src={logo} />
              <h4 className="font-weight-bold mt-3 fhhh">
                CHECK EMPLOYMENT STATUS FOR TAX
              </h4>
              <p className="mb-2 fhh">
                You have no pending IR35 questionnaire to complete.
              </p>
            </div>
          </div>
        )}
        {/* //Section 0 */}
        {policyObj.noquestion != 'a' && (
          <div
            className={clsx('tab-item-wrapper no-scroll', {
              active: activeTab === '0'
            })}
            index={0}>
            <div className="text-center w-100 mt-4">
              <img alt="..." className="ir35-logo" src={logo} />
              <h4 className="font-weight-bold mt-3 fhhh">
                CHECK EMPLOYMENT STATUS FOR TAX
              </h4>
              <p className="mb-2 fhh">Please answer all questions</p>
              <p className="mb-2 fh">Takes 7+ minutes</p>
              <Button
                size="large"
                variant="contained"
                onClick={() => {
                  setActiveTab('1');
                }}
                className="font-weight-bold btn-slack px-4 bg-color button-width">
                START
              </Button>
              <p className="fh">
                Press enter{' '}
                <FontAwesomeIcon icon={['fas', 'arrow-up']} className="angle" />
              </p>
              <div className="mt-10 font-weight-bold font-size-xs">
                <h6 className="font-weight-bold fhh">DISCLAIMER</h6>
                <p className="f">
                  Voxpro assumes no responsibility for the results of the test.
                  The result given is in accordance with HMRC tool which HMRC
                  stands by.
                </p>
                <span className="font-italic fhh">Warning</span>
                <br></br>
                <span className="line-height-md f">
                  This would not be the case if the information you have
                  provided was checked and found to be inaccurate.
                  <br></br>
                  HMRC will also not stand by results achieved through contrived
                  arrangements, designed to get a particular outcome from the
                  service. This would be treated as evidence of deliberate
                  non-compliance, which can attract higher associated penalties.
                </span>
              </div>
            </div>
            {/* <Grid container spacing={1} className="pt-3">
            <Grid item xs={12}>
              <h4>
                Does the worker provide their services through a limited
                company, partnership or unincorporated association?
              </h4>
              <div className="text-f">
                <p>These are also known as intermediaries.</p>
                <p>
                  An unincorporated association’ is an organisation set up by a
                  group of people for a reason other than to make a profit. For
                  example, a voluntary group or a sports club.
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
                className="font-weight-bold btn-slack px-4 my-3 bg-color">
                Continue
              </Button>
            </Grid>
          </Grid> */}
          </div>
        )}
        {/* //Section 1 */}
        <div
          className={clsx('tab-item-wrapper no-scroll', {
            active: activeTab === '1'
          })}
          index={1}>
          <Grid container spacing={1} className="pt-3">
            <Grid item xs={12}>
              <h6>About you and the work</h6>
              <h4>
                Do you provide your services through a limited company,
                partnership or unincorporated association?
              </h4>
              <div className="text-f">
                <p>These are also known as intermediaries.</p>
                <p>
                  An unincorporated association’ is an organisation set up by a
                  group of people for a reason other than to make a profit. For
                  example, a voluntary group or a sports club.
                </p>
              </div>
              <div>
                <ul>
                  <li>
                    <Radio
                      checked={policyObj.limitedCompany === 'a'}
                      onChange={() => {
                        let obj = policyObj;
                        obj.limitedCompany = 'a';
                        obj.ir35Question[0].questions[0] = {
                          activeTab: activeTab,
                          question: `Do you provide your services through a limited company,
                          partnership or unincorporated association?`,
                          candidateAnswer: 'Yes'
                        };

                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">Yes</span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.limitedCompany === 'b'}
                      onChange={() => {
                        let obj = policyObj;
                        obj.limitedCompany = 'b';
                        obj.ir35Question[0].questions[0] = {
                          activeTab: activeTab,
                          question: `Do you provide your services through a limited company,
                          partnership or unincorporated association?`,
                          candidateAnswer: 'No'
                        };

                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">No</span>
                  </li>
                </ul>
              </div>
              <Button
                size="large"
                variant="contained"
                onClick={() => {
                  setActiveTab('2');
                }}
                className="font-weight-bold btn-slack px-4 my-3 bg-color">
                Continue
              </Button>
            </Grid>
          </Grid>
        </div>
        {/* //Section 2 */}
        {policyObj.limitedCompany === 'a' && (
          <div
            className={clsx('tab-item-wrapper no-scroll', {
              active: activeTab === '2'
            })}
            index={2}>
            <Grid container spacing={1} className="pt-3">
              <Grid item xs={12}>
                <h6>About you and the work</h6>
                <h4>Have you already started working for this client?</h4>
                <div>
                  <ul>
                    <li>
                      <Radio
                        checked={policyObj.organization === 'a'}
                        onChange={() => {
                          // setPolicyObj({ ...policyObj, organization: 'a' });
                          let obj = policyObj;
                          obj.organization = 'a';
                          obj.ir35Question[0].questions[1] = {
                            activeTab: activeTab,
                            question: `Have you already started working for this client?`,
                            candidateAnswer: 'Yes'
                          };

                          setPolicyObj({ ...obj });
                        }}
                        value="a"
                        name="radio-button-demo"
                        aria-label="A"
                      />
                      <span className="fhh">Yes</span>
                    </li>
                    <li>
                      <Radio
                        checked={policyObj.organization === 'b'}
                        onChange={() => {
                          // setPolicyObj({ ...policyObj, organization: 'b' });
                          let obj = policyObj;
                          obj.organization = 'b';
                          obj.ir35Question[0].questions[1] = {
                            activeTab: activeTab,
                            question: `Have you already started working for this client?`,
                            candidateAnswer: 'No'
                          };

                          setPolicyObj({ ...obj });
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="fhh">No</span>
                    </li>
                  </ul>
                </div>
                <Button
                  size="large"
                  variant="contained"
                  onClick={() => {
                    setActiveTab('3');
                  }}
                  className="font-weight-bold btn-slack px-4 my-3 bg-color">
                  Continue
                </Button>
              </Grid>
            </Grid>
          </div>
        )}
        {/* section 2A */}
        {policyObj.limitedCompany === 'b' && (
          <div
            className={clsx('tab-item-wrapper no-scroll', {
              active: activeTab === '2'
            })}
            index={2}>
            <Grid container spacing={1} className="pt-3">
              <Grid item xs={12}>
                <h4>You need to start again</h4>
                <div className="text-f">
                  <p>
                    The{' '}
                    <a
                      href="https://www.gov.uk/guidance/understanding-off-payroll-working-ir35"
                      style={{ color: 'blue' }}
                      target="_blank">
                      {' '}
                      off-payroll working rules (IR35) (opens in a new window){' '}
                    </a>{' '}
                    can only apply if you are providing your services through an
                    intermediary.
                  </p>
                </div>
                <div className="text-f">
                  <p>
                    As you told us there is no intermediary involved, you need
                    to find out if this work is classed as employment or
                    self-employment for tax purposes.
                  </p>
                </div>

                <Button
                  size="large"
                  variant="contained"
                  onClick={() => {
                    let obj = policyObj;
                    obj.limitedCompany = 'a';
                    obj.ir35Question[0].questions = [];
                    obj.ir35Question[0].questions[0] = {
                      activeTab: '0',
                      question: `Do you provide your services through a limited company,
                      partnership or unincorporated association?`,
                      candidateAnswer: 'Yes'
                    };
                    setPolicyObj({ ...obj });
                    setActiveTab('0');
                  }}
                  className="font-weight-bold btn-slack px-4 my-3 bg-color">
                  Start Again
                </Button>
              </Grid>
            </Grid>
          </div>
        )}
        {/* Section 3 */}
        <div
          className={clsx('tab-item-wrapper no-scroll', {
            active: activeTab === '3'
          })}
          index={3}>
          <Grid container spacing={1} className="pt-3">
            <Grid item xs={12}>
              <h6>Worker’s duties</h6>
              <h4>Will you be an ‘Office Holder’?</h4>
              <div className="text-f">
                <span>
                  This can include being a board member, treasurer, trustee,
                  company secretary or company director.
                </span>
              </div>
              <div>
                <ul>
                  <li>
                    <Radio
                      checked={policyObj.director === 'a'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, director: 'a' });
                        let obj = policyObj;
                        obj.director = 'a';
                        obj.ir35Question[1].questions[0] = {
                          activeTab: activeTab,
                          question: `Will you be an ‘Office Holder’?`,
                          candidateAnswer: 'Yes'
                        };

                        setPolicyObj({ ...obj });
                      }}
                      value="a"
                      name="radio-button-demo"
                      aria-label="A"
                    />
                    <span className="mt-3 fhh">Yes</span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.director === 'b'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, director: 'b' });
                        let obj = policyObj;
                        obj.director = 'b';
                        obj.ir35Question[1].questions[0] = {
                          activeTab: activeTab,
                          question: `Will you be an ‘Office Holder’?`,
                          candidateAnswer: 'No'
                        };

                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">No</span>
                  </li>
                </ul>
              </div>
              <Button
                size="large"
                variant="contained"
                onClick={() => {
                  setActiveTab('4');
                }}
                className="font-weight-bold btn-slack px-4 my-3 bg-color">
                Continue
              </Button>
            </Grid>
          </Grid>
        </div>
        {/* Section 4 */}
        {policyObj.organization === 'a' && policyObj.director === 'b' && (
          <div
            className={clsx('tab-item-wrapper no-scroll', {
              active: activeTab === '4'
            })}
            index={4}>
            <Grid container spacing={1} className="pt-3">
              <Grid item xs={12}>
                <h6>Substitutes and helpers</h6>
                <h4>Have you ever sent a substitute to do this work?</h4>
                <div className="text-f">
                  <span>
                    A substitute is someone the worker sends in their place to
                    do their role.
                  </span>
                </div>
                <div className="mt-3">
                  <ul>
                    <li>
                      <Radio
                        checked={policyObj.substitute === 'a'}
                        onChange={() => {
                          // setPolicyObj({ ...policyObj, substitute: 'a' });
                          let obj = policyObj;
                          obj.substitute = 'a';
                          obj.ir35Question[2].questions[0] = {
                            activeTab: activeTab,
                            question: `Have you ever sent a substitute to do this work?`,
                            candidateAnswer: 'Yes, your client accepted them'
                          };

                          setPolicyObj({ ...obj });
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3 fhh">
                        Yes, your client accepted them
                      </span>
                    </li>
                    <li>
                      <Radio
                        checked={policyObj.substitute === 'b'}
                        onChange={() => {
                          // setPolicyObj({ ...policyObj, substitute: 'b' });
                          let obj = policyObj;
                          obj.substitute = 'b';
                          obj.ir35Question[2].questions[0] = {
                            activeTab: activeTab,
                            question: `Have you ever sent a substitute to do this work?`,
                            candidateAnswer:
                              'Yes, but your client did not accept them'
                          };

                          setPolicyObj({ ...obj });
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3 fhh">
                        Yes, but your client did not accept them
                      </span>
                    </li>
                    <li>
                      <Radio
                        checked={policyObj.substitute === 'c'}
                        onChange={() => {
                          // setPolicyObj({ ...policyObj, substitute: 'c' });
                          let obj = policyObj;
                          obj.substitute = 'c';
                          obj.ir35Question[2].questions[0] = {
                            activeTab: activeTab,
                            question: `Have you ever sent a substitute to do this work?`,
                            candidateAnswer: 'No, it has not happened'
                          };

                          setPolicyObj({ ...obj });
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3 fhh">No, it has not happened</span>
                    </li>
                  </ul>
                </div>
                <Button
                  size="large"
                  variant="contained"
                  onClick={() => {
                    setActiveTab('5');
                  }}
                  className="font-weight-bold btn-slack px-4 my-3 bg-color">
                  Continue
                </Button>
              </Grid>
            </Grid>
          </div>
        )}

        {/* Section 4A */}
        {policyObj.organization === 'b' && policyObj.director === 'b' && (
          <div
            className={clsx('tab-item-wrapper no-scroll', {
              active: activeTab === '4'
            })}
            index={4}>
            <Grid container spacing={1} className="pt-3">
              <Grid item xs={12}>
                <h6>Substitutes and helpers</h6>
                <h4>Does your client have the right to reject a substitute?</h4>
                <div className="text-f">
                  <span>
                    A substitute is someone the worker sends in their place to
                    do their role.
                  </span>
                  <span>
                    This can include rejecting a substitute even if they are
                    equally qualified, and meet your interviewing, vetting and
                    security clearance procedures.
                  </span>
                </div>
                <div>
                  <ul>
                    <li>
                      <Radio
                        checked={policyObj.reject === 'a'}
                        onChange={() => {
                          // setPolicyObj({ ...policyObj, reject: 'a' });
                          let obj = policyObj;
                          obj.reject = 'a';
                          obj.ir35Question[2].questions[1] = {
                            activeTab: activeTab,
                            question: `Does your client have the right to reject a substitute?`,
                            candidateAnswer: 'Yes'
                          };

                          setPolicyObj({ ...obj });
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3 fhh">Yes</span>
                    </li>
                    <li>
                      <Radio
                        checked={policyObj.reject === 'b'}
                        onChange={() => {
                          // setPolicyObj({ ...policyObj, reject: 'b' });
                          let obj = policyObj;
                          obj.reject = 'b';
                          obj.ir35Question[2].questions[1] = {
                            activeTab: activeTab,
                            question: `Does your client have the right to reject a substitute?`,
                            candidateAnswer: 'No'
                          };
                          setPolicyObj({ ...obj });
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3 fhh">No</span>
                    </li>
                  </ul>
                </div>
                <Button
                  size="large"
                  variant="contained"
                  onClick={() => {
                    setActiveTab('5');
                  }}
                  className="font-weight-bold btn-slack px-4 my-3 bg-color">
                  Continue
                </Button>
              </Grid>
            </Grid>
          </div>
        )}
        {/* section 4b */}
        {policyObj.director === 'a' && (
          <div
            className={clsx('tab-item-wrapper no-scroll', {
              active: activeTab === '4'
            })}
            index={4}>
            <div className="text-center w-100">
              <img alt="..." className="ir35-logo" src={logo} />
              <h4 className="font-weight-bold mt-3">
                CHECK EMPLOYMENT STATUS FOR TAX
              </h4>
              <p className="mb-2 fh mt-5">
                Your Answers has been successfully submitted for review
              </p>
              <p className="mb-2 fh"></p>

              {/* <Button
                size="medium"
                variant="contained"
                onClick={() => {
                  setActiveTab('1');
                }}
                className="font-weight-bold btn-slack px-4 bg-color button-width">
                Go to dashboard
              </Button> */}
              {/* <p className="fh">Press enter</p> */}
            </div>
          </div>
        )}
        {/* Section 5 */}
        {policyObj.reject === 'a' && (
          <div
            className={clsx('tab-item-wrapper no-scroll', {
              active: activeTab === '5'
            })}
            index={5}>
            <Grid container spacing={1} className="pt-3">
              <Grid item xs={12}>
                <h6>Working arrangements</h6>
                <h4>
                  Does your client have the right to move you from the task you
                  originally agreed to do?
                </h4>
                <div className="text-f">
                  <span>
                    A worker taken on for general tasks, rather than one
                    specific task, might be moved as and when priorities change.
                    The client may not need the worker’s permission to move
                    them.
                  </span>
                </div>
                <div className="text-f">
                  <span>
                    Read more examples about the client’s control over{' '}
                    <a
                      href="https://www.gov.uk/hmrc-internal-manuals/employment-status-manual/esm0521"
                      style={{ color: 'blue' }}
                      target="_blank">
                      {' '}
                      what the worker does (opens in a new window).{' '}
                    </a>{' '}
                  </span>
                </div>
                <div>
                  <ul>
                    <li>
                      <Radio
                        checked={policyObj.originallyAgreed === 'a'}
                        onChange={() => {
                          // setPolicyObj({ ...policyObj, originallyAgreed: 'a' });
                          let obj = policyObj;
                          obj.originallyAgreed = 'a';
                          obj.ir35Question[3].questions[0] = {
                            activeTab: activeTab,
                            question: `Does your client have the right to move you from the task you
                            originally agreed to do?`,
                            candidateAnswer: 'Yes'
                          };
                          setPolicyObj({ ...obj });
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3 fhh">Yes</span>
                    </li>
                    <li>
                      <Radio
                        checked={policyObj.originallyAgreed === 'b'}
                        onChange={() => {
                          // setPolicyObj({ ...policyObj, originallyAgreed: 'b' });
                          let obj = policyObj;
                          obj.originallyAgreed = 'b';
                          obj.ir35Question[3].questions[0] = {
                            activeTab: activeTab,
                            question: `Does your client have the right to move you from the task you
                            originally agreed to do?`,
                            candidateAnswer: 'No, you would have to agree'
                          };
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3 fhh">
                        No, you would have to agree
                      </span>
                    </li>
                    <li>
                      <Radio
                        checked={policyObj.originallyAgreed === 'c'}
                        onChange={() => {
                          // setPolicyObj({ ...policyObj, originallyAgreed: 'c' });
                          let obj = policyObj;
                          obj.originallyAgreed = 'c';
                          obj.ir35Question[3].questions[0] = {
                            activeTab: activeTab,
                            question: `Does your client have the right to move you from the task you
                            originally agreed to do?`,
                            candidateAnswer: `No, that would require a new contract or formal working
                              arrangement`
                          };
                          setPolicyObj({ ...obj });
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3 fhh">
                        No, that would require a new contract or formal working
                        arrangement
                      </span>
                    </li>
                  </ul>
                </div>
                <Button
                  size="large"
                  variant="contained"
                  onClick={() => {
                    setActiveTab('6');
                  }}
                  className="font-weight-bold btn-slack px-4 my-3 bg-color">
                  Continue
                </Button>
              </Grid>
            </Grid>
          </div>
        )}
        {/* section 5a */}
        {policyObj.reject === 'b' && (
          <div
            className={clsx('tab-item-wrapper no-scroll', {
              active: activeTab === '5'
            })}
            index={5}>
            <Grid container spacing={1} className="pt-3">
              <Grid item xs={12}>
                <h6>Substitutes and helpers</h6>
                <h4>Would you have to pay your substitute?</h4>
                <div className="text-f">
                  <span>
                    This includes payments made by the worker or their business.
                  </span>
                </div>
                <div>
                  <ul>
                    <li>
                      <Radio
                        checked={policyObj.payment === 'a'}
                        onChange={() => {
                          setPolicyObj({ ...policyObj, payment: 'a' });
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3 fhh">Yes</span>
                    </li>
                    <li>
                      <Radio
                        checked={policyObj.payment === 'b'}
                        onChange={() => {
                          setPolicyObj({ ...policyObj, payment: 'b' });
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3 fhh">No</span>
                    </li>
                  </ul>
                </div>
                <Button
                  size="large"
                  variant="contained"
                  onClick={() => {
                    setActiveTab('6');
                  }}
                  className="font-weight-bold btn-slack px-4 my-3 bg-color">
                  Continue
                </Button>
              </Grid>
            </Grid>
          </div>
        )}
        {/* Section 6 */}
        {(policyObj.originallyAgreed === 'a' ||
          policyObj.originallyAgreed === 'b' ||
          policyObj.originallyAgreed === 'c') && (
          <div
            className={clsx('tab-item-wrapper no-scroll', {
              active: activeTab === '6'
            })}
            index={6}>
            <Grid container spacing={1} className="pt-3">
              <Grid item xs={12}>
                <h6>Working arrangements</h6>
                <h4>
                  Does your client have the right to decide how the work is
                  done?
                </h4>
                <div className="text-f">
                  <span>
                    This can include your client instructing, guiding or
                    advising the way the task should be completed.
                  </span>
                  <br />
                  <span>
                    This is not relevant if it is highly skilled work. For
                    example, an airline pilot.
                  </span>
                  <a className="a-blue" href="javascript:void(0)">
                    Read more examples of how the work is done (opens in a new
                    window).
                  </a>
                </div>
                <div>
                  <ul>
                    <li>
                      <Radio
                        checked={policyObj.organisationWorkDone === 'a'}
                        onChange={() => {
                          let obj = policyObj;
                          obj.organisationWorkDone = 'a';
                          obj.ir35Question[3].questions[1] = {
                            activeTab: activeTab,
                            question: `Does your client have the right to decide how the work is
                            done?`,
                            candidateAnswer: `Yes`
                          };
                          setPolicyObj({ ...obj });
                          // setPolicyObj({
                          //   ...policyObj,
                          //   organisationWorkDone: 'a'
                          // });
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3 fhh">Yes</span>
                    </li>
                    <li>
                      <Radio
                        checked={policyObj.organisationWorkDone === 'b'}
                        onChange={() => {
                          // setPolicyObj({
                          //   ...policyObj,
                          //   organisationWorkDone: 'b'
                          // });
                          let obj = policyObj;
                          obj.organisationWorkDone = 'b';
                          obj.ir35Question[3].questions[1] = {
                            activeTab: activeTab,
                            question: `Does your client have the right to decide how the work is
                            done?`,
                            candidateAnswer: `No, you solely decide`
                          };
                          setPolicyObj({ ...obj });
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3 fhh">No, you solely decide</span>
                    </li>
                    <li>
                      <Radio
                        checked={policyObj.organisationWorkDone === 'c'}
                        onChange={() => {
                          // setPolicyObj({
                          //   ...policyObj,
                          //   organisationWorkDone: 'c'
                          // });
                          let obj = policyObj;
                          obj.organisationWorkDone = 'c';
                          obj.ir35Question[3].questions[1] = {
                            activeTab: activeTab,
                            question: `Does your client have the right to decide how the work is
                            done?`,
                            candidateAnswer: ` No, you and your client agree together`
                          };
                          setPolicyObj({ ...obj });
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3 fhh">
                        No, you and your client agree together
                      </span>
                    </li>
                    <li>
                      <Radio
                        checked={policyObj.organisationWorkDone === 'd'}
                        onChange={() => {
                          // setPolicyObj({
                          //   ...policyObj,
                          //   organisationWorkDone: 'd'
                          // });
                          let obj = policyObj;
                          obj.organisationWorkDone = 'd';
                          obj.ir35Question[3].questions[1] = {
                            activeTab: activeTab,
                            question: `Does your client have the right to decide how the work is
                            done?`,
                            candidateAnswer: `Not relevant, it is highly skilled work`
                          };
                          setPolicyObj({ ...obj });
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3 fhh">
                        Not relevant, it is highly skilled work
                      </span>
                    </li>
                  </ul>
                </div>
                <Button
                  size="large"
                  variant="contained"
                  onClick={() => {
                    setActiveTab('7');
                  }}
                  className="font-weight-bold btn-slack px-4 my-3 bg-color">
                  Continue
                </Button>
              </Grid>
            </Grid>
          </div>
        )}
        {/* Section 7 */}
        <div
          className={clsx('tab-item-wrapper no-scroll', {
            active: activeTab === '7'
          })}
          index={7}>
          <Grid container spacing={1} className="pt-3">
            <Grid item xs={12}>
              <h6>Working arrangements</h6>
              <h4>
                Does your client have the right to decide your working hours?
              </h4>
              <div>
                <ul>
                  <li>
                    <Radio
                      checked={policyObj.decideWorkingHours === 'a'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, decideWorkingHours: 'a' });
                        let obj = policyObj;
                        obj.decideWorkingHours = 'a';
                        obj.ir35Question[3].questions[2] = {
                          activeTab: activeTab,
                          question: `Does your client have the right to decide your working hours?`,
                          candidateAnswer: `Yes`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">Yes</span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.decideWorkingHours === 'b'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, decideWorkingHours: 'b' });
                        let obj = policyObj;
                        obj.decideWorkingHours = 'b';
                        obj.ir35Question[3].questions[2] = {
                          activeTab: activeTab,
                          question: `Does your client have the right to decide your working hours?`,
                          candidateAnswer: `No, you solely decide`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">No, you solely decide</span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.decideWorkingHours === 'c'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, decideWorkingHours: 'c' });
                        let obj = policyObj;
                        obj.decideWorkingHours = 'c';
                        obj.ir35Question[3].questions[2] = {
                          activeTab: activeTab,
                          question: `Does your client have the right to decide your working hours?`,
                          candidateAnswer: `No, you and your client agree`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">
                      No, you and your client agree
                    </span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.decideWorkingHours === 'd'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, decideWorkingHours: 'd' });
                        let obj = policyObj;
                        obj.decideWorkingHours = 'd';
                        obj.ir35Question[3].questions[2] = {
                          activeTab: activeTab,
                          question: `Does your client have the right to decide your working hours?`,
                          candidateAnswer: `No, the work is based on agreed deadlines`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">
                      No, the work is based on agreed deadlines
                    </span>
                  </li>
                </ul>
              </div>
              <Button
                size="large"
                variant="contained"
                onClick={() => {
                  setActiveTab('8');
                }}
                className="font-weight-bold btn-slack px-4 my-3 bg-color">
                Continue
              </Button>
            </Grid>
          </Grid>
        </div>
        {/* Section 8 */}
        <div
          className={clsx('tab-item-wrapper no-scroll', {
            active: activeTab === '8'
          })}
          index={8}>
          <Grid container spacing={1} className="pt-3">
            <Grid item xs={12}>
              <h6>Working arrangements</h6>
              <h4>
                Does your client have the right to decide where you do the work?
              </h4>

              <div>
                <ul>
                  <li>
                    <Radio
                      checked={policyObj.decideWhereWorkIsDone === 'a'}
                      onChange={() => {
                        // setPolicyObj({
                        //   ...policyObj,
                        //   decideWhereWorkIsDone: 'a'
                        // });
                        let obj = policyObj;
                        obj.decideWhereWorkIsDone = 'a';
                        obj.ir35Question[3].questions[3] = {
                          activeTab: activeTab,
                          question: `Does your client have the right to decide where you do the work?`,
                          candidateAnswer: `Yes`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">Yes</span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.decideWhereWorkIsDone === 'b'}
                      onChange={() => {
                        // setPolicyObj({
                        //   ...policyObj,
                        //   decideWhereWorkIsDone: 'b'
                        // });
                        let obj = policyObj;
                        obj.decideWhereWorkIsDone = 'b';
                        obj.ir35Question[3].questions[3] = {
                          activeTab: activeTab,
                          question: `Does your client have the right to decide where you do the work?`,
                          candidateAnswer: `No, you solely decide`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">No, you solely decide</span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.decideWhereWorkIsDone === 'c'}
                      onChange={() => {
                        // setPolicyObj({
                        //   ...policyObj,
                        //   decideWhereWorkIsDone: 'c'
                        // });
                        let obj = policyObj;
                        obj.decideWhereWorkIsDone = 'c';
                        obj.ir35Question[3].questions[3] = {
                          activeTab: activeTab,
                          question: `Does your client have the right to decide where you do the work?`,
                          candidateAnswer: `No, the task sets the location`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">
                      No, the task sets the location
                    </span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.decideWhereWorkIsDone === 'd'}
                      onChange={() => {
                        // setPolicyObj({
                        //   ...policyObj,
                        //   decideWhereWorkIsDone: 'd'
                        // });
                        let obj = policyObj;
                        obj.decideWhereWorkIsDone = 'd';
                        obj.ir35Question[3].questions[3] = {
                          activeTab: activeTab,
                          question: `Does your client have the right to decide where you do the work?`,
                          candidateAnswer: `No, some work has to be done in an agreed location and
                              some can be your choice`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">
                      No, some work has to be done in an agreed location and
                      some can be your choice
                    </span>
                  </li>
                </ul>
              </div>
              <Button
                size="large"
                variant="contained"
                onClick={() => {
                  setActiveTab('9');
                }}
                className="font-weight-bold btn-slack px-4 my-3 bg-color">
                Continue
              </Button>
            </Grid>
          </Grid>
        </div>
        {/* Section 9 */}
        <div
          className={clsx('tab-item-wrapper no-scroll', {
            active: activeTab === '9'
          })}
          index={9}>
          <Grid container spacing={1} className="pt-3">
            <Grid item xs={12}>
              <h6>Worker’s financial risk</h6>
              <h4>
                Will you have to buy equipment
                <br /> before your client pays you?
              </h4>
              <div>
                <div className="text-f">
                  <span>
                    This can include heavy machinery or high-cost specialist
                    equipment used <br /> for this work. This does not include
                    laptops, tablets and phones.
                  </span>
                </div>
                <div className="text-f">
                  <span>Vehicle costs are covered in the next question.</span>
                </div>
                <ul>
                  <li>
                    <Radio
                      checked={policyObj.equipmentCosts === 'a'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, equipmentCosts: 'a' });
                        let obj = policyObj;
                        obj.equipmentCosts = 'a';
                        obj.ir35Question[4].questions[0] = {
                          activeTab: activeTab,
                          question: `Will you have to buy equipment
                            <br /> before your client pays you?`,
                          candidateAnswer: `Yes`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">Yes</span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.equipmentCosts === 'b'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, equipmentCosts: 'b' });
                        let obj = policyObj;
                        obj.equipmentCosts = 'b';
                        obj.ir35Question[4].questions[0] = {
                          activeTab: activeTab,
                          question: `Will you have to buy equipment
                            <br /> before your client pays you?`,
                          candidateAnswer: `No`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">No</span>
                  </li>
                </ul>
              </div>
              <Button
                size="large"
                variant="contained"
                onClick={() => {
                  setActiveTab('10');
                }}
                className="font-weight-bold btn-slack px-4 my-3 bg-color">
                Continue
              </Button>
            </Grid>
          </Grid>
        </div>
        {/* Section 10 */}
        <div
          className={clsx('tab-item-wrapper no-scroll', {
            active: activeTab === '10'
          })}
          index={10}>
          <Grid container spacing={1} className="pt-3">
            <Grid item xs={12}>
              <h6>Worker’s financial risk</h6>
              <h4>
                Will you have to fund any vehicle <br /> costs before your
                client pays you?
              </h4>
              <div className="text-f">
                <span>
                  This can include purchasing, leasing, hiring, fuel and other
                  running costs <br /> for this work. This does not include
                  commuting or personal vehicle costs.
                </span>
              </div>

              <div>
                <ul>
                  <li>
                    <Radio
                      checked={policyObj.vehicleCost === 'a'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, vehicleCost: 'a' });
                        let obj = policyObj;
                        obj.vehicleCost = 'a';
                        obj.ir35Question[4].questions[1] = {
                          activeTab: activeTab,
                          question: `Will you have to buy equipment
                            <br /> before your client pays you?`,
                          candidateAnswer: `Yes`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">Yes</span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.vehicleCost === 'b'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, vehicleCost: 'b' });
                        let obj = policyObj;
                        obj.vehicleCost = 'b';
                        obj.ir35Question[4].questions[1] = {
                          activeTab: activeTab,
                          question: `Will you have to buy equipment
                            <br /> before your client pays you?`,
                          candidateAnswer: `No`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">No</span>
                  </li>
                </ul>
              </div>
              <Button
                size="large"
                variant="contained"
                onClick={() => {
                  setActiveTab('11');
                }}
                className="font-weight-bold btn-slack px-4 my-3 bg-color">
                Continue
              </Button>
            </Grid>
          </Grid>
        </div>
        {/* Section 11 */}
        <div
          className={clsx('tab-item-wrapper no-scroll', {
            active: activeTab === '11'
          })}
          index={11}>
          <Grid container spacing={1} className="pt-3">
            <Grid item xs={12}>
              <h6>Worker’s financial risk</h6>
              <h4>
                Will you have to buy materials before your client pays you?
              </h4>
              <div className="text-f">
                <span>
                  This can include items that form a lasting part of the work,
                  or are left <br /> behind when you leave. This does not
                  include items like stationery.
                </span>
                <span>
                  This question is most likely to be relevant to the
                  construction industry.
                </span>
              </div>

              <div>
                <ul>
                  <li>
                    <Radio
                      checked={policyObj.materialCost === 'a'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, materialCost: 'a' });
                        let obj = policyObj;
                        obj.materialCost = 'a';
                        obj.ir35Question[4].questions[2] = {
                          activeTab: activeTab,
                          question: `Will you have to buy materials before your client pays you?`,
                          candidateAnswer: `Yes`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">Yes</span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.materialCost === 'b'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, materialCost: 'b' });
                        let obj = policyObj;
                        obj.materialCost = 'b';
                        obj.ir35Question[4].questions[2] = {
                          activeTab: activeTab,
                          question: `Will you have to buy materials before your client pays you?`,
                          candidateAnswer: `No`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">No</span>
                  </li>
                </ul>
              </div>
              <Button
                size="large"
                variant="contained"
                onClick={() => {
                  setActiveTab('12');
                }}
                className="font-weight-bold btn-slack px-4 my-3 bg-color">
                Continue
              </Button>
            </Grid>
          </Grid>
        </div>
        {/* Section 12 */}
        <div
          className={clsx('tab-item-wrapper no-scroll', {
            active: activeTab === '12'
          })}
          index={12}>
          <Grid container spacing={1} className="pt-3">
            <Grid item xs={12}>
              <h6>Worker’s financial risk</h6>
              <h4>
                Will you have to fund any other costs <br /> before your client
                pays you?
              </h4>
              <div className="text-f">
                <span>
                  This can include non-commuting travel or accommodation, or
                  external <br /> business premises for this work only.
                </span>
              </div>

              <div>
                <ul>
                  <li>
                    <Radio
                      checked={policyObj.otherCost === 'a'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, otherCost: 'a' });
                        let obj = policyObj;
                        obj.otherCost = 'a';
                        obj.ir35Question[4].questions[3] = {
                          activeTab: activeTab,
                          question: `Will you have to fund any other costs <br /> before your client
                            pays you?`,
                          candidateAnswer: `Yes`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">Yes</span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.otherCost === 'b'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, otherCost: 'b' });
                        let obj = policyObj;
                        obj.otherCost = 'b';
                        obj.ir35Question[4].questions[3] = {
                          activeTab: activeTab,
                          question: `Will you have to fund any other costs <br /> before your client
                            pays you?`,
                          candidateAnswer: `No`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">No</span>
                  </li>
                </ul>
              </div>
              <Button
                size="large"
                variant="contained"
                onClick={() => {
                  setActiveTab('13');
                }}
                className="font-weight-bold btn-slack px-4 my-3 bg-color">
                Continue
              </Button>
            </Grid>
          </Grid>
        </div>
        {/* Section 13 */}
        <div
          className={clsx('tab-item-wrapper no-scroll', {
            active: activeTab === '13'
          })}
          index={13}>
          <Grid container spacing={1} className="pt-3">
            <Grid item xs={12}>
              <h6>Worker’s financial risk</h6>
              <h4>How will you be paid for this work?</h4>

              <div>
                <ul>
                  <li>
                    <Radio
                      checked={policyObj.howWorkerIsPaid === 'a'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, howWorkerIsPaid: 'a' });
                        let obj = policyObj;
                        obj.howWorkerIsPaid = 'a';
                        obj.ir35Question[4].questions[4] = {
                          activeTab: activeTab,
                          question: `Will you have to fund any other costs <br /> before your client
                            pays you?`,
                          candidateAnswer: `An hourly, daily or weekly rate`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">
                      An hourly, daily or weekly rate
                    </span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.howWorkerIsPaid === 'b'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, howWorkerIsPaid: 'b' });
                        let obj = policyObj;
                        obj.howWorkerIsPaid = 'b';
                        obj.ir35Question[4].questions[4] = {
                          activeTab: activeTab,
                          question: `Will you have to fund any other costs <br /> before your client
                            pays you?`,
                          candidateAnswer: `A fixed price for the project`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">
                      A fixed price for the project
                    </span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.howWorkerIsPaid === 'c'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, howWorkerIsPaid: 'c' });
                        let obj = policyObj;
                        obj.howWorkerIsPaid = 'c';
                        obj.ir35Question[4].questions[4] = {
                          activeTab: activeTab,
                          question: `Will you have to fund any other costs <br /> before your client
                            pays you?`,
                          candidateAnswer: `A fixed amount for each piece of work completed`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">
                      A fixed amount for each piece of work completed
                    </span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.howWorkerIsPaid === 'd'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, howWorkerIsPaid: 'd' });
                        let obj = policyObj;
                        obj.howWorkerIsPaid = 'd';
                        obj.ir35Question[4].questions[4] = {
                          activeTab: activeTab,
                          question: `Will you have to fund any other costs <br /> before your client
                            pays you?`,
                          candidateAnswer: `A percentage of the sales you generate`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">
                      A percentage of the sales you generate
                    </span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.howWorkerIsPaid === 'e'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, howWorkerIsPaid: 'e' });
                        let obj = policyObj;
                        obj.howWorkerIsPaid = 'e';
                        obj.ir35Question[4].questions[4] = {
                          activeTab: activeTab,
                          question: `Will you have to fund any other costs <br /> before your client
                            pays you?`,
                          candidateAnswer: `A percentage of your client’s profits or savings`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">
                      A percentage of your client’s profits or savings
                    </span>
                  </li>
                </ul>
              </div>
              <Button
                size="large"
                variant="contained"
                onClick={() => {
                  setActiveTab('14');
                }}
                className="font-weight-bold btn-slack px-4 my-3 bg-color">
                Continue
              </Button>
            </Grid>
          </Grid>
        </div>
        {/* Section 14 */}
        <div
          className={clsx('tab-item-wrapper no-scroll', {
            active: activeTab === '14'
          })}
          index={14}>
          <Grid container spacing={1} className="pt-3">
            <Grid item xs={12}>
              <h6>Worker’s financial risk</h6>
              <h4>
                If the client was not happy with your <br /> work, would you
                have to put it right?
              </h4>

              <div>
                <ul>
                  <li>
                    <Radio
                      checked={policyObj.putWorkRight === 'a'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, putWorkRight: 'a' });
                        let obj = policyObj;
                        obj.putWorkRight = 'a';
                        obj.ir35Question[4].questions[5] = {
                          activeTab: activeTab,
                          question: `If the client was not happy with your <br /> work, would you
                            have to put it right?`,
                          candidateAnswer: `Yes, unpaid and you would have extra costs that your
                              client <br /> would not pay for`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">
                      Yes, unpaid and you would have extra costs that your
                      client <br /> would not pay for
                    </span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.putWorkRight === 'b'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, putWorkRight: 'b' });
                        let obj = policyObj;
                        obj.putWorkRight = 'b';
                        obj.ir35Question[4].questions[5] = {
                          activeTab: activeTab,
                          question: `If the client was not happy with your <br /> work, would you
                            have to put it right?`,
                          candidateAnswer: `Yes, unpaid but your only cost would be losing the
                              opportunity <br /> to do other work`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">
                      Yes, unpaid but your only cost would be losing the
                      opportunity <br /> to do other work
                    </span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.putWorkRight === 'c'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, putWorkRight: 'b' });
                        let obj = policyObj;
                        obj.putWorkRight = 'c';
                        obj.ir35Question[4].questions[5] = {
                          activeTab: activeTab,
                          question: `If the client was not happy with your <br /> work, would you
                            have to put it right?`,
                          candidateAnswer: `Yes, you would fix it in your usual hours at your usual
                              rate or fee`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">
                      Yes, you would fix it in your usual hours at your usual
                      rate or fee
                    </span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.putWorkRight === 'e'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, putWorkRight: 'b' });
                        let obj = policyObj;
                        obj.putWorkRight = 'e';
                        obj.ir35Question[4].questions[5] = {
                          activeTab: activeTab,
                          question: `If the client was not happy with your <br /> work, would you
                            have to put it right?`,
                          candidateAnswer: `No, the work is time-specific or for a single event`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">
                      No, the work is time-specific or for a single event
                    </span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.putWorkRight === 'f'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, putWorkRight: 'e' });
                        let obj = policyObj;
                        obj.putWorkRight = 'f';
                        obj.ir35Question[4].questions[5] = {
                          activeTab: activeTab,
                          question: `If the client was not happy with your <br /> work, would you
                            have to put it right?`,
                          candidateAnswer: `No`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">No</span>
                  </li>
                </ul>
              </div>
              <Button
                size="large"
                variant="contained"
                onClick={() => {
                  setActiveTab('15');
                }}
                className="font-weight-bold btn-slack px-4 my-3 bg-color">
                Continue
              </Button>
            </Grid>
          </Grid>
        </div>
        {/* Section 15 */}
        <div
          className={clsx('tab-item-wrapper no-scroll', {
            active: activeTab === '15'
          })}
          index={15}>
          <Grid container spacing={1} className="pt-3">
            <Grid item xs={12}>
              <h6>Worker’s involvement</h6>
              <h4>
                Will your client provide you with paid-for corporate benefits?
              </h4>
              <div className="text-f">
                <span>
                  This can include external gym memberships, health insurance or
                  retail discounts.
                </span>
              </div>

              <div>
                <ul>
                  <li>
                    <Radio
                      checked={policyObj.corporateBenefits === 'a'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, corporateBenefits: 'a' });
                        let obj = policyObj;
                        obj.corporateBenefits = 'a';
                        obj.ir35Question[5].questions[0] = {
                          activeTab: activeTab,
                          question: `Will your client provide you with paid-for corporate benefits?`,
                          candidateAnswer: `Yes`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">Yes</span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.corporateBenefits === 'b'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, corporateBenefits: 'b' });
                        let obj = policyObj;
                        obj.corporateBenefits = 'b';
                        obj.ir35Question[5].questions[0] = {
                          activeTab: activeTab,
                          question: `Will your client provide you with paid-for corporate benefits?`,
                          candidateAnswer: `No`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">No</span>
                  </li>
                </ul>
              </div>
              <Button
                size="large"
                variant="contained"
                onClick={() => {
                  setActiveTab('16');
                }}
                className="font-weight-bold btn-slack px-4 my-3 bg-color">
                Continue
              </Button>
            </Grid>
          </Grid>
        </div>
        {/* Section 16 */}
        <div
          className={clsx('tab-item-wrapper no-scroll', {
            active: activeTab === '16'
          })}
          index={16}>
          <Grid container spacing={1} className="pt-3">
            <Grid item xs={12}>
              <h6>Worker’s involvement</h6>
              <h4>
                Will you have any management responsibilities for your client?
              </h4>
              <div className="text-f">
                <span>
                  This can include deciding how much to pay someone, hiring or
                  dismissing workers, and delivering appraisals.
                </span>
              </div>
              <div>
                <ul>
                  <li>
                    <Radio
                      checked={policyObj.managementResponsibilities === 'a'}
                      onChange={() => {
                        // setPolicyObj({
                        //   ...policyObj,
                        //   managementResponsibilities: 'a'
                        // });
                        let obj = policyObj;
                        obj.managementResponsibilities = 'a';
                        obj.ir35Question[5].questions[1] = {
                          activeTab: activeTab,
                          question: `Will you have any management responsibilities for your client?`,
                          candidateAnswer: `Yes`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">Yes</span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.managementResponsibilities === 'b'}
                      onChange={() => {
                        // setPolicyObj({
                        //   ...policyObj,
                        //   managementResponsibilities: 'b'
                        // });
                        let obj = policyObj;
                        obj.managementResponsibilities = 'b';
                        obj.ir35Question[5].questions[1] = {
                          activeTab: activeTab,
                          question: `Will you have any management responsibilities for your client?`,
                          candidateAnswer: `No`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">No</span>
                  </li>
                </ul>
              </div>
              <Button
                size="large"
                variant="contained"
                onClick={() => {
                  setActiveTab('17');
                }}
                className="font-weight-bold btn-slack px-4 my-3 bg-color">
                Continue
              </Button>
            </Grid>
          </Grid>
        </div>
        {/* Section 17 */}
        <div
          className={clsx('tab-item-wrapper no-scroll', {
            active: activeTab === '17'
          })}
          index={17}>
          <Grid container spacing={1} className="pt-3">
            <Grid item xs={12}>
              <h6>Worker’s involvement</h6>
              <h4>
                How would you introduce yourself to your client’s consumers or
                suppliers?
              </h4>
              <div>
                <ul>
                  <li>
                    <Radio
                      checked={policyObj.introduceWorker === 'a'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, introduceWorker: 'a' });
                        let obj = policyObj;
                        obj.introduceWorker = 'a';
                        obj.ir35Question[5].questions[2] = {
                          activeTab: activeTab,
                          question: `How would you introduce yourself to your client’s consumers or
                            suppliers?`,
                          candidateAnswer: `You work for your client`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">You work for your client</span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.introduceWorker === 'b'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, introduceWorker: 'b' });
                        let obj = policyObj;
                        obj.introduceWorker = 'b';
                        obj.ir35Question[5].questions[2] = {
                          activeTab: activeTab,
                          question: `How would you introduce yourself to your client’s consumers or
                            suppliers?`,
                          candidateAnswer: `You are an independent worker acting on your client’s
                              behalf`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">
                      You are an independent worker acting on your client’s
                      behalf
                    </span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.introduceWorker === 'c'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, introduceWorker: 'c' });
                        let obj = policyObj;
                        obj.introduceWorker = 'c';
                        obj.ir35Question[5].questions[2] = {
                          activeTab: activeTab,
                          question: `How would you introduce yourself to your client’s consumers or
                            suppliers?`,
                          candidateAnswer: `You work for your own business`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">
                      You work for your own business
                    </span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.introduceWorker === 'd'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, introduceWorker: 'd' });
                        let obj = policyObj;
                        obj.introduceWorker = 'c';
                        obj.ir35Question[5].questions[2] = {
                          activeTab: activeTab,
                          question: `How would you introduce yourself to your client’s consumers or
                            suppliers?`,
                          candidateAnswer: `This would not happen`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">This would not happen</span>
                  </li>
                </ul>
              </div>
              <Button
                size="large"
                variant="contained"
                onClick={() => {
                  setActiveTab('18');
                }}
                className="font-weight-bold btn-slack px-4 my-3 bg-color">
                Continue
              </Button>
            </Grid>
          </Grid>
        </div>
        {/* worker's involvement done */}
        {/* worker's contract started */}
        {/* Section 18 */}
        <div
          className={clsx('tab-item-wrapper no-scroll', {
            active: activeTab === '18'
          })}
          index={18}>
          <Grid container spacing={1} className="pt-3">
            <Grid item xs={12}>
              <h6>Worker’s contracts</h6>
              <h4>
                Does this contract stop you from doing similar work for other
                clients?
              </h4>

              <div>
                <ul>
                  <li>
                    <Radio
                      checked={policyObj.noSimilarWork === 'a'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, noSimilarWork: 'a' });
                        let obj = policyObj;
                        obj.noSimilarWork = 'a';
                        obj.ir35Question[6].questions[0] = {
                          activeTab: activeTab,
                          question: `Does this contract stop you from doing similar work for other
                            clients?`,
                          candidateAnswer: `Yes`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">Yes</span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.noSimilarWork === 'b'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, noSimilarWork: 'b' });
                        let obj = policyObj;
                        obj.noSimilarWork = 'b';
                        obj.ir35Question[6].questions[0] = {
                          activeTab: activeTab,
                          question: `Does this contract stop you from doing similar work for other
                            clients?`,
                          candidateAnswer: `No`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">No</span>
                  </li>
                </ul>
              </div>
              <Button
                size="large"
                variant="contained"
                onClick={() => {
                  setActiveTab('19');
                }}
                className="font-weight-bold btn-slack px-4 my-3 bg-color">
                Continue
              </Button>
            </Grid>
          </Grid>
        </div>
        {/* Section 19 a*/}
        {policyObj.noSimilarWork === 'a' && (
          <div
            className={clsx('tab-item-wrapper no-scroll', {
              active: activeTab === '19'
            })}
            index={19}>
            <Grid container spacing={1} className="pt-3">
              <Grid item xs={12}>
                <h6>Worker’s contracts</h6>
                <h4>
                  Are there any ownership rights relating to this contract?
                </h4>
                <div className="text-f">
                  <span>
                    These types of rights are usually found in media, arts and
                    creative <br /> industry contracts. This includes all
                    intellectual property rights, <br /> copyright, trademarks,
                    patents, and image rights.
                  </span>
                </div>
                <div>
                  <ul>
                    <li>
                      <Radio
                        checked={policyObj.ownership === 'a'}
                        onChange={() => {
                          // setPolicyObj({
                          //   ...policyObj,
                          //   ownership: 'a'
                          // });
                          let obj = policyObj;
                          obj.ownership = 'a';
                          obj.ir35Question[6].questions[1] = {
                            activeTab: activeTab,
                            question: `Are there any ownership rights relating to this contract?`,
                            candidateAnswer: `Yes`
                          };
                          setPolicyObj({ ...obj });
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3 fhh">Yes</span>
                    </li>
                    <li>
                      <Radio
                        checked={policyObj.ownership === 'b'}
                        onChange={() => {
                          // setPolicyObj({
                          //   ...policyObj,
                          //   ownership: 'b'
                          // });
                          let obj = policyObj;
                          obj.ownership = 'b';
                          obj.ir35Question[6].questions[1] = {
                            activeTab: activeTab,
                            question: `Are there any ownership rights relating to this contract?`,
                            candidateAnswer: `No`
                          };
                          setPolicyObj({ ...obj });
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3 fhh">No</span>
                    </li>
                  </ul>
                </div>
                <Button
                  size="large"
                  variant="contained"
                  onClick={() => {
                    setActiveTab('20');
                  }}
                  className="font-weight-bold btn-slack px-4 my-3 bg-color">
                  Continue
                </Button>
              </Grid>
            </Grid>
          </div>
        )}
        {/* Section 19 b*/}
        {policyObj.noSimilarWork === 'b' && (
          <div
            className={clsx('tab-item-wrapper no-scroll', {
              active: activeTab === '19'
            })}
            index={19}>
            <Grid container spacing={1} className="pt-3">
              <Grid item xs={12}>
                <h6>Worker’s contracts</h6>
                <h4>
                  Are you required to ask permission to work for other clients?
                </h4>
                <div>
                  <ul>
                    <li>
                      <Radio
                        checked={policyObj.needPermission === 'a'}
                        onChange={() => {
                          // setPolicyObj({
                          //   ...policyObj,
                          //   needPermission: 'a'
                          // });
                          let obj = policyObj;
                          obj.needPermission = 'a';
                          obj.ir35Question[6].questions[2] = {
                            activeTab: activeTab,
                            question: `Are you required to ask permission to work for other clients?`,
                            candidateAnswer: `Yes`
                          };
                          setPolicyObj({ ...obj });
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3 fhh">Yes</span>
                    </li>
                    <li>
                      <Radio
                        checked={policyObj.needPermission === 'b'}
                        onChange={() => {
                          // setPolicyObj({
                          //   ...policyObj,
                          //   needPermission: 'b'
                          // });
                          let obj = policyObj;
                          obj.needPermission = 'b';
                          obj.ir35Question[6].questions[2] = {
                            activeTab: activeTab,
                            question: `Are you required to ask permission to work for other clients?`,
                            candidateAnswer: `No`
                          };
                          setPolicyObj({ ...obj });
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3 fhh">No</span>
                    </li>
                  </ul>
                </div>
                <Button
                  size="large"
                  variant="contained"
                  onClick={() => {
                    setActiveTab('20');
                  }}
                  className="font-weight-bold btn-slack px-4 my-3 bg-color">
                  Continue
                </Button>
              </Grid>
            </Grid>
          </div>
        )}
        {/* Section 20  */}
        {(policyObj.needPermission === 'a' ||
          policyObj.needPermission === 'b') &&
          policyObj.ownership === '' && (
            <div
              className={clsx('tab-item-wrapper no-scroll', {
                active: activeTab === '20'
              })}
              index={20}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h6>Worker’s contracts</h6>
                  <h4>
                    Are there any ownership rights relating to this contract?
                  </h4>
                  <div className="text-f">
                    <span>
                      These types of rights are usually found in media, arts and
                      creative <br /> industry contracts. This includes all
                      intellectual property rights, <br /> copyright,
                      trademarks, patents, and image rights.
                    </span>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <Radio
                          checked={policyObj.ownership === 'a'}
                          onChange={() => {
                            // setPolicyObj({
                            //   ...policyObj,
                            //   ownership: 'a'
                            // });
                            let obj = policyObj;
                            obj.ownership = 'a';
                            obj.ir35Question[6].questions[3] = {
                              activeTab: activeTab,
                              question: `Are there any ownership rights relating to this contract?`,
                              candidateAnswer: `Yes`
                            };
                            setPolicyObj({ ...obj });
                          }}
                          value="b"
                          name="radio-button-demo"
                          aria-label="B"
                        />
                        <span className="mt-3 fhh">Yes</span>
                      </li>
                      <li>
                        <Radio
                          checked={policyObj.ownership === 'b'}
                          onChange={() => {
                            // setPolicyObj({
                            //   ...policyObj,
                            //   ownership: 'b'
                            // });
                            let obj = policyObj;
                            obj.ownership = 'b';
                            obj.ir35Question[6].questions[3] = {
                              activeTab: activeTab,
                              question: `Are there any ownership rights relating to this contract?`,
                              candidateAnswer: `No`
                            };
                            setPolicyObj({ ...obj });
                          }}
                          value="b"
                          name="radio-button-demo"
                          aria-label="B"
                        />
                        <span className="mt-3 fhh">No</span>
                      </li>
                    </ul>
                  </div>
                  <Button
                    size="large"
                    variant="contained"
                    onClick={() => {
                      setActiveTab('20');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3 bg-color">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>
          )}

        {/* Section 20a */}
        {policyObj.ownership === 'a' && (
          <div
            className={clsx('tab-item-wrapper no-scroll', {
              active: activeTab === '20'
            })}
            index={20}>
            <Grid container spacing={1} className="pt-3">
              <Grid item xs={12}>
                <h6>Worker’s contracts</h6>
                <h4>
                  Does the contract state the rights to this work belong to your
                  client?
                </h4>
                <div className="text-f">
                  <span>
                    This does not include the option to buy the rights for a
                    separate fee.
                  </span>
                </div>
                <div>
                  <ul>
                    <li>
                      <Radio
                        checked={policyObj.clientOwnsRights === 'a'}
                        onChange={() => {
                          // setPolicyObj({ ...policyObj, clientOwnsRights: 'a' });
                          let obj = policyObj;
                          obj.clientOwnsRights = 'a';
                          obj.ir35Question[6].questions[4] = {
                            activeTab: activeTab,
                            question: `Does the contract state the rights to this work belong to your
                              client?`,
                            candidateAnswer: `Yes`
                          };
                          setPolicyObj({ ...obj });
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3 fhh">Yes</span>
                    </li>
                    <li>
                      <Radio
                        checked={policyObj.clientOwnsRights === 'b'}
                        onChange={() => {
                          // setPolicyObj({ ...policyObj, clientOwnsRights: 'b' });
                          let obj = policyObj;
                          obj.clientOwnsRights = 'b';
                          obj.ir35Question[6].questions[4] = {
                            activeTab: activeTab,
                            question: `Does the contract state the rights to this work belong to your
                              client?`,
                            candidateAnswer: `No`
                          };
                          setPolicyObj({ ...obj });
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3 fhh">No</span>
                    </li>
                  </ul>
                </div>
                <Button
                  size="large "
                  variant="contained"
                  onClick={() => {
                    setActiveTab('21');
                  }}
                  className="font-weight-bold btn-slack px-4 my-3 bg-color">
                  Continue
                </Button>
              </Grid>
            </Grid>
          </div>
        )}
        {/* Section 20 b */}
        {policyObj.ownership === 'b' && (
          <div
            className={clsx('tab-item-wrapper no-scroll', {
              active: activeTab === '20'
            })}
            index={20}>
            <Grid container spacing={1} className="pt-3">
              <Grid item xs={12}>
                <h6>Worker’s contracts</h6>
                <h4>Have you had a previous contract with this client?</h4>
                <div>
                  <ul>
                    <li>
                      <Radio
                        checked={policyObj.previousContract === 'a'}
                        onChange={() => {
                          // setPolicyObj({ ...policyObj, previousContract: 'a' });
                          let obj = policyObj;
                          obj.previousContract = 'a';
                          obj.ir35Question[6].questions[5] = {
                            activeTab: activeTab,
                            question: `Have you had a previous contract with this client?`,
                            candidateAnswer: `Yes`
                          };
                          setPolicyObj({ ...obj });
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3 fhh">Yes</span>
                    </li>
                    <li>
                      <Radio
                        checked={policyObj.previousContract === 'b'}
                        onChange={() => {
                          // setPolicyObj({ ...policyObj, previousContract: 'b' });
                          let obj = policyObj;
                          obj.previousContract = 'b';
                          obj.ir35Question[6].questions[5] = {
                            activeTab: activeTab,
                            question: `Have you had a previous contract with this client?`,
                            candidateAnswer: `No`
                          };
                          setPolicyObj({ ...obj });
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3 fhh">No</span>
                    </li>
                  </ul>
                </div>
                <Button
                  size="large "
                  variant="contained"
                  onClick={() => {
                    setActiveTab('21');
                  }}
                  className="font-weight-bold btn-slack px-4 my-3 bg-color">
                  Continue
                </Button>
              </Grid>
            </Grid>
          </div>
        )}
        {/* Section 21 */}
        <div
          className={clsx('tab-item-wrapper no-scroll', {
            active: activeTab === '21'
          })}
          index={21}>
          <Grid container spacing={1} className="pt-3">
            <Grid item xs={12}>
              <h6>Worker’s Contract</h6>
              <h4>Have you had a previous contract with this client?</h4>
              <div>
                <ul>
                  <li>
                    <Radio
                      checked={policyObj.belongOrganisation === 'a'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, belongOrganisation: 'a' });
                        let obj = policyObj;
                        obj.belongOrganisation = 'a';
                        obj.ir35Question[6].questions[6] = {
                          activeTab: activeTab,
                          question: `Have you had a previous contract with this client?`,
                          candidateAnswer: `Yes`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">Yes</span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.belongOrganisation === 'b'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, belongOrganisation: 'b' });
                        let obj = policyObj;
                        obj.belongOrganisation = 'b';
                        obj.ir35Question[6].questions[6] = {
                          activeTab: activeTab,
                          question: `Have you had a previous contract with this client?`,
                          candidateAnswer: `No`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">No</span>
                  </li>
                </ul>
              </div>
              <Button
                size="large"
                variant="contained"
                onClick={() => {
                  setActiveTab('22');
                }}
                className="font-weight-bold btn-slack px-4 my-3 bg-color">
                Continue
              </Button>
            </Grid>
          </Grid>
        </div>
        {/* Section 22 */}
        <div
          className={clsx('tab-item-wrapper no-scroll', {
            active: activeTab === '22'
          })}
          index={22}>
          <Grid container spacing={1} className="pt-3">
            <Grid item xs={12}>
              <h6>Worker’s Contract</h6>
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
              <div>
                <ul>
                  <li>
                    <Radio
                      checked={policyObj.previousContract === 'a'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, previousContract: 'a' });
                        let obj = policyObj;
                        obj.previousContract = 'a';
                        obj.ir35Question[6].questions[7] = {
                          activeTab: activeTab,
                          question: `Will this contract start immediately after the previous one
                              ended?`,
                          candidateAnswer: `Yes`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">Yes</span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.previousContract === 'b'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, previousContract: 'b' });
                        let obj = policyObj;
                        obj.previousContract = 'b';
                        obj.ir35Question[6].questions[7] = {
                          activeTab: activeTab,
                          question: `Will this contract start immediately after the previous one
                              ended?`,
                          candidateAnswer: `No`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">No</span>
                  </li>
                </ul>
              </div>
              <Button
                size="large"
                variant="contained"
                onClick={() => {
                  setActiveTab('23');
                }}
                className="font-weight-bold btn-slack px-4 my-3 bg-color">
                Continue
              </Button>
            </Grid>
          </Grid>
        </div>
        {/* Section 23 */}
        <div
          className={clsx('tab-item-wrapper no-scroll', {
            active: activeTab === '23'
          })}
          index={23}>
          <Grid container spacing={1} className="pt-3">
            <Grid item xs={12}>
              <h6>Worker’s Contract</h6>
              <h4>
                Will this work take up the majority of your available working
                time?
              </h4>
              <div className="text-f">
                <span>
                  This includes preparation or any other time necessary to
                  deliver the work, even if it is not referred to in the
                  contract.
                </span>
                <br />
                <a className="a-blue" href="javascript:void(0)">
                  Read more about the worker’s available working time (opens in
                  a new window).
                </a>
              </div>
              <div>
                <ul>
                  <li>
                    <Radio
                      checked={policyObj.availableWorking === 'a'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, availableWorking: 'a' });
                        let obj = policyObj;
                        obj.availableWorking = 'a';
                        obj.ir35Question[6].questions[8] = {
                          activeTab: activeTab,
                          question: `Will this work take up the majority of your available working
                              time?`,
                          candidateAnswer: `Yes`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">Yes</span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.availableWorking === 'b'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, availableWorking: 'b' });
                        let obj = policyObj;
                        obj.availableWorking = 'b';
                        obj.ir35Question[6].questions[8] = {
                          activeTab: activeTab,
                          question: `Will this work take up the majority of your available working
                              time?`,
                          candidateAnswer: `No`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">No</span>
                  </li>
                </ul>
              </div>
              <Button
                size="large"
                variant="contained"
                onClick={() => {
                  setActiveTab('24');
                }}
                className="font-weight-bold btn-slack px-4 my-3 bg-color">
                Continue
              </Button>
            </Grid>
          </Grid>
        </div>
        {/* Section 24 */}
        <div
          className={clsx('tab-item-wrapper no-scroll', {
            active: activeTab === '24'
          })}
          index={24}>
          <Grid container spacing={1} className="pt-3">
            <Grid item xs={12}>
              <h6>Worker’s Contract</h6>
              <h4>
                Have you done any self-employed work of a similar nature for
                other clients in the last 12 months?
              </h4>
              <div className="text-f">
                <span>
                  This only refers to work requiring similar skills,
                  responsibilities, knowledge, or ability.
                </span>
                <span>
                  Self-employed work is when it is your responsibility to pay
                  Income Tax and National Insurance contributions on your
                  earnings.
                </span>
              </div>
              <div>
                <ul>
                  <li>
                    <Radio
                      checked={policyObj.months === 'a'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, months: 'a' });
                        let obj = policyObj;
                        obj.months = 'a';
                        obj.ir35Question[6].questions[9] = {
                          activeTab: activeTab,
                          question: `Will this work take up the majority of your available working
                              time?`,
                          candidateAnswer: `Yes`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">Yes</span>
                  </li>
                  <li>
                    <Radio
                      checked={policyObj.months === 'b'}
                      onChange={() => {
                        // setPolicyObj({ ...policyObj, months: 'b' });
                        let obj = policyObj;
                        obj.months = 'b';
                        obj.ir35Question[6].questions[9] = {
                          activeTab: activeTab,
                          question: `Will this work take up the majority of your available working
                              time?`,
                          candidateAnswer: `No`
                        };
                        setPolicyObj({ ...obj });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3 fhh">No</span>
                  </li>
                </ul>
              </div>
              <Button
                size="large"
                variant="contained"
                onClick={() => {
                  setActiveTab('25');
                  console.log('policyObj', policyObj);
                }}
                className="font-weight-bold btn-slack px-4 my-3 bg-color">
                Continue
              </Button>
            </Grid>
          </Grid>
        </div>
        {/* Section 25 */}

        <div
          className={clsx('tab-item-wrapper no-scroll', {
            active: activeTab === '25'
          })}
          index={25}>
          <div className="text-center w-100">
            <img alt="..." className="ir35-logo" src={logo} />
            <h4 className="font-weight-bold mt-3">
              CHECK EMPLOYMENT STATUS FOR TAX
            </h4>
            <p className="mb-2 fh mt-5">
              Your Answers has been successfully submitted for review
            </p>
            <p className="mb-2 fh"></p>

            <Button
              size="medium"
              variant="contained"
              onClick={submitQuestions}
              className="font-weight-bold btn-slack px-4 bg-color button-width">
              Submit
            </Button>

            {/* <Button
                size="medium"
                variant="contained"
                onClick={() => {
                  setActiveTab('1');
                }}
                className="font-weight-bold btn-slack px-4 bg-color button-width">
                Go to dashboard
              </Button> */}
            {/* <p className="fh">Press enter</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
