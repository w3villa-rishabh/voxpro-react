import React, { useState } from 'react';
import { Grid, Card, CardContent, Button, Radio } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { PageTitle } from '../../layout-components';

export default function IR35TaxComponent() {
  const [activeTab, setActiveTab] = useState('1');
 
  
  let getResults = () => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {"version":"2.4","correlationID":"session-3708fabd-fc1c-4bcb-99b2-96eada65e34e","interview":{"setup":{"endUserRole":"endClient","hasContractStarted":false,"provideServices":"soleTrader"},"exit":{"officeHolder":false},"personalService":{"possibleSubstituteRejection":"wouldNotReject","possibleSubstituteWorkerPay":false},"control":{"engagerMovingWorker":"canMoveWorkerWithoutPermission","workerDecidingHowWorkIsDone":"noWorkerInputAllowed","whenWorkHasToBeDone":"workerDecideSchedule","workerDecideWhere":"workerChooses"},"financialRisk":{"workerProvidedMaterials":true,"workerProvidedEquipment":false,"workerUsedVehicle":false,"workerHadOtherExpenses":false,"expensesAreNotRelevantForRole":false,"workerMainIncome":"incomeFixed","paidForSubstandardWork":"outsideOfHoursNoCharge"},"partAndParcel":{"workerReceivesBenefits":true,"workerAsLineManager":true,"contactWithEngagerCustomer":true,"workerRepresentsEngagerBusiness":"workAsBusiness"},"businessOnOwnAccount":{}}}
  };
    fetch("https://33f5fa4cb21b.ngrok.io/cest-decision/decide", requestOptions)
    .then(res => res.json())
    .then(
      (result) => {
        debugger
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        debugger
      }
    )

  };

  

  const [policyObj, setPolicyObj] = useState({
    first: 'a',
    endUserRole: 'a',
    determination: 'a',
    limitedCompany: 'yes',
    startedWorking: 'a',
    officeHolder: 'true',
    rightToReject: 'a',
    payYouSubstitue: 'a',
    sentSubstitute: 'a',
    rightToDecide: 'a',
    workingHours: 'a',
    whereUDoTheWork: 'a'
    
  });

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
       <PageTitle
        titleHeading="IR 35 Questioner"
        titleDescription= "Please answer all the questions"
      /> 
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
            {/* //Section 0 Disclaimer ----> done*/}

            <div
              className={clsx('tab-item-wrapper no-scroll', {
                active: activeTab === '0'
              })}
              index={0}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h3>
                    Disclaimer
                  </h3>
                  <div className="text-f">
                    <span>
                      HMRC will stand by the result you get from this tool.
                    </span>
                    <br/>
                   
                    <span>
                      Warning: This would not be the case if the information you have provided was checked and found to be inaccurate.
                    </span>
                  </div>
                  <br/>
                  <div className="text-f">
                    <h4>
                      HMRC will also not stand by results achieved through contrived arrangements, designed to get a particular outcome from the service. This would be treated as evidence of deliberate non-compliance, which can attract higher associated penalties.
                    </h4>
                  </div>
                  
                  <Button
                    variant="contained"
                    onClick={() => {
                      setActiveTab('1');
                    }} 
                    className="font-weight-bold btn-slack px-4 my-3 bg-color">
                    Accept and Continue
                  </Button>
                </Grid>
              </Grid>
            </div>

            {/* //Section 1 First Question */} 
            {/* this section is clear */}

            <div
              className={clsx('tab-item-wrapper no-scroll', {
                active: activeTab === '1'
              })}
              index={1}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>
                  What do you want to find out?
                  </h4>
                  <div className="text-f">
                    <p>About you and the work.</p>
                  </div>
                  <div className="">
                    <Radio
                      checked={policyObj.first === 'a'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, first: 'a' });
                      }}
                      value="a"
                      name="radio-button-demo"
                      aria-label="A"
                    />
                    <span className="mt-3"> If the off-payroll working rules (IR35) apply to a contract</span>
                    <br/>
                    <Radio
                      checked={policyObj.first === 'b'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, first: 'b' });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3"> If some work is classed as employment or self-employment for tax purposes</span>
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
              </Grid>
            </div>

             {/* //Section 2 second Question same for all anser selected above only 1 options reduces for agency when we choose 2nd option above*/}
             {/* this section is also clear */}

             <div
              className={clsx('tab-item-wrapper no-scroll', {
                active: activeTab === '2'
              })}
              index={2}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>
                    Who Are You?
                  </h4>
                  <div className="text-f">
                    <p>About you and the work.</p>
                  </div>
                  <div className="">
                    <ul>
                      <li>
                        <Radio
                          checked={policyObj.endUserRole === 'a'}
                          onChange={() => {
                            setPolicyObj({ ...policyObj, endUserRole: 'a' });
                          }}
                          value="a"
                          name="radio-button-demo"
                          aria-label="A"
                        />
                        <span>Worker</span>
                      </li>
                      <li>
                        <Radio
                          checked={policyObj.endUserRole === 'b'}
                          onChange={() => {
                            setPolicyObj({ ...policyObj, endUserRole: 'b' });
                          }}
                          value="b"
                          name="radio-button-demo"
                          aria-label="B"
                        />
                        <span>Hirer</span>
                      </li>
                    {policyObj.first === 'a' && (
                      <li>
                        <Radio
                          checked={policyObj.endUserRole === 'c'}
                          onChange={() => {
                            setPolicyObj({ ...policyObj, endUserRole: 'c' });
                          }}
                          value="c"
                          name="radio-button-demo"
                          aria-label="C"
                        />
                        <span>Agency</span>
                      </li>
                    )}
                    </ul>
                  </div>
                  <Button
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

            {/* //Section 3 third Question veries for all answer selected above */}
    
            {policyObj.endUserRole === 'a' && (
            <div
              className={clsx('tab-item-wrapper no-scroll', {
                active: activeTab === '3'
              })}
              index={3}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>What do you want to do?</h4>
                  <div className="text-f">
                    <p>About you and the work.</p>
                  </div>
                  <div className="">
                    <ul>
                      <li>
                        <Radio
                          checked={policyObj.determination === 'a'}
                          onChange={() => {
                            setPolicyObj({ ...policyObj, determination: 'a' });
                          }}
                          value="a"
                          name="radio-button-demo"
                          aria-label="A"
                        />
                        <span>Make a new determination</span>
                      </li>

                      {/*tab change in this*/}
                      <li>
                        <Radio
                          checked={policyObj.determination === 'b'}
                          onChange={() => {
                            setPolicyObj({ ...policyObj, determination: 'b' });
                          }}
                          value="b"
                          name="radio-button-demo"
                          aria-label="B"
                        />
                        <span>Check a determination</span>
                      </li>
                    </ul>
                  </div>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setActiveTab("4");
                    }}
                    className="font-weight-bold btn-slack px-4 my-3 bg-color">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>
            )}

            {/* Section 3A */}
            {policyObj.endUserRole === 'b' && (
            <div
              className={clsx('tab-item-wrapper no-scroll', {
                active: activeTab === '4'
              })}
              index={3}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>Does the worker provide their services through a limited company, partnership or unincorporated association?</h4>
                  <div className="text-f">
                    <p>About you and the work.</p>
                  </div>
                  <div className="text-f">
                    <p>These are also known as intermediaries.</p>
                  </div>
                  <div className="text-f">
                    <p>An ‘unincorporated association’ is an organisation set up by a group of people for a reason other than to make a profit. For example, a voluntary group or a sports club.</p>
                  </div>
                  <div className="">
                    <ul>
                      <li>
                        <Radio
                          checked={policyObj.provideServices === 'a'}
                          onChange={() => {
                            setPolicyObj({ ...policyObj, provideServices: 'a' });
                          }}
                          value="a"
                          name="radio-button-demo"
                          aria-label="A"
                        />
                        <span>Yes</span>
                      </li>

                      {/*tab change in this*/}
                      <li>
                        <Radio
                          checked={policyObj.provideServices === 'b'}
                          onChange={() => {
                            setPolicyObj({ ...policyObj, provideServices: 'b' });
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
                      setActiveTab('');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3 bg-color">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>
            )}
            {/* Section 3B */}
            {policyObj.endUserRole === 'c' && (
            <div
              className={clsx('tab-item-wrapper no-scroll', {
                active: activeTab === '3'
              })}
              index={3}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>Continue as the worker to check a determination</h4>
                  <div className="text-f">
                    <p></p>
                  </div>
                  <div className="text-f">
                    <p>It is the not the agency’s responsibility to determine if the off-payroll working rules (IR35) apply to a contract or other period of work. You can continue as if you are the worker to check a determination.</p>
                  </div>
                  
                  <Button
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
        

          {/* Section 4 */}
          {policyObj.determination === 'a' && (
              <div
                className={clsx('tab-item-wrapper no-scroll', {
                  active: activeTab === '4'
                })}
                index={4}>
                <Grid container spacing={1} className="pt-3">
                  <Grid item xs={12}>
                    <h4>
                     Do you provide your services through a limited company, partnership or unincorporated associations?
                    </h4>
                    <div className="text-f">
                      <p>About you and the work.</p>
                    </div>
                    <div className="text-f">
                      <span>
                        These are also known as intermediaries.
                      </span>
                    </div>
                    <div className="text-f">
                      <span>
                      An ‘unincorporated association’ is an organisation set up by a group of people for a reason other than to make a profit. For example, a voluntary group or a sports club.
                      </span>
                    </div>

                    <div className="">
                    <ul>
                      <li>
                        <Radio
                          checked={policyObj.limitedCompany === 'yes'}
                          onChange={() => {
                            setPolicyObj({ ...policyObj, limitedCompany: 'yes' });
                          }}
                          value="b"
                          name="radio-button-demo"
                          aria-label="B"
                        />
                        <span>Yes</span>
                      </li>
                      <li>
                        <Radio
                          checked={policyObj.limitedCompany === 'no'}
                          onChange={() => {
                            setPolicyObj({ ...policyObj, limitedCompany: 'no' });
                          }}
                          value="no"
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
                        setActiveTab('5');
                      }}
                      className="font-weight-bold btn-slack px-4 my-3 bg-color">
                      Continue
                    </Button>
                  </Grid>
                </Grid>
              </div>
            )}

      
          {/* Section 4A  */}
          {policyObj.determination === 'b' && (
             <div
             className={clsx('tab-item-wrapper no-scroll', {
               active: activeTab === '4'
             })}
             index={4}>
             <Grid container spacing={1} className="pt-3">
               <Grid item xs={12}>
                 <h4>Have you already started working for this client?</h4>
                 <div className="text-f">
                     <p>About you and the work.</p>
                   </div>
                 <div className="d-flex">
                   <Radio
                     checked={policyObj.startedWorking === 'a'}
                     onChange={() => {
                       setPolicyObj({ ...policyObj, startedWorking: 'a' });
                     }}
                     value="b"
                     name="radio-button-demo"
                     aria-label="B"
                   />
                   <span className="mt-3">Yes</span>

                   <Radio
                     checked={policyObj.startedWorking === 'b'}
                     onChange={() => {
                       setPolicyObj({ ...policyObj, startedWorking: 'b' });
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
                   className="font-weight-bold btn-slack px-4 my-3 bg-color">
                   Continue
                 </Button>
               </Grid>
             </Grid>
           </div>
           )}


          {/* section 5 --> this section is for Limited company -- yes (Section 5) */}
            {policyObj.limitedCompany === 'yes' && (
            <div
              className={clsx('tab-item-wrapper no-scroll', {
                active: activeTab === '5'
              })}
              index={5}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>Have you already started working for this client?</h4>
                  <div className="text-f">
                      <p>About you and the work.</p>
                    </div>
                  <div className="d-flex">
                    <Radio
                      checked={policyObj.startedWorking === 'a'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, startedWorking: 'a' });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3">Yes</span>

                    <Radio
                      checked={policyObj.startedWorking === 'b'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, startedWorking: 'b' });
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
                    className="font-weight-bold btn-slack px-4 my-3 bg-color">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>
            )}

            {/* Section 5A */}
            {policyObj.limitedCompany === 'no' && (
            <div
              className={clsx('tab-item-wrapper no-scroll', {
                active: activeTab === '5'
              })}
              index={5}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>You need to start again</h4>
                  <div className="text-f">
                      <p>
                      The <a href="https://www.gov.uk/guidance/understanding-off-payroll-working-ir35" style={{color: "blue"}} target="_blank" > off-payroll working rules (IR35) (opens in a new window) </a> can only apply if you are providing your services through an intermediary.
                      </p> 
                    </div>
                    <div className="text-f">
                      <p>
                      As you told us there is no intermediary involved, you need to find out if this work is classed as employment or self-employment for tax purposes.
                      </p>
                    </div>
                 
                  <Button
                    variant="contained"
                    onClick={() => {
                      setActiveTab('0');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3 bg-color">
                    Start Again
                  </Button>
                </Grid>
              </Grid>
            </div>
            )}
            
            {/* section 6  Office Holder ---> this comes after section 5 Stared worked */}
            <div
              className={clsx('tab-item-wrapper no-scroll', {
                active: activeTab === '6'
              })}
              index={6}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>
                    Will you be an ‘Office Holder’?
                  </h4>
                  <div className="text-f">
                      <p>Worker’s duties.</p>
                    </div>
                  <div className="text-f">
                    <span>
                    This can include being a board member, treasurer, trustee, company secretary or company director.
                    </span>
                    <br />
                    <a className="a-blue" href="javascript:void(0)">
                    Read more about Office Holders (opens in a new window).
                    </a>
                  </div>
                  <div className="d-flex">
                    <Radio
                      checked={policyObj.officeHolder === 'true'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, officeHolder: 'true' });
                      }}
                      value="b"
                      name="radio-button-demo"
                      aria-label="B"
                    />
                    <span className="mt-3">Yes</span>

                    <Radio
                      checked={policyObj.officeHolder === 'false'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, officeHolder: 'false' });
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
                    className="font-weight-bold btn-slack px-4 my-3 bg-color">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </div>


            {/* section 7 display result is office holder is true section 6 */}
            {policyObj.officeHolder === 'true' && (
              <div
                className={clsx('tab-item-wrapper no-scroll', {
                  active: activeTab === '7'
                })}
                index={7}>
                <Grid container spacing={1} className="pt-3">
                  <Grid item xs={12}>
                    <h4> Off-payroll working rules (IR35) apply</h4>
                    <h4> Why you are getting this result</h4>
                    <div className="text-f">
                      <span>
                        In the ‘Worker’s Duties’ section, you answered that you will perform office holder duties. This means you are classed as employed for tax purposes for this work.
                      </span>
                    </div>
                    <br/>

                    <h4> What you should do next </h4>
                    <div className="text-f">
                      <span>
                      You told us you are providing your services through an intermediary, such as a limited company, partnership, or unincorporated body. Your intermediary needs to operate PAYE on your earnings.
                      </span>
                      <span>
                      It is important that you keep a copy of this determination for your records. 
                      </span>
                    </div>
                 
                    <Button
                      variant="contained"
                      onClick={() => {
                        setActiveTab('26');
                      }}
                      className="font-weight-bold btn-slack px-4 my-3 bg-color">
                      Get a Copy of this result
                    </Button>
                  </Grid>
                </Grid>
              </div>
            )}
            {/* section 7 A more questiuons if office holder is false and started working is false from section 6 */}
            {policyObj.officeHolder === 'false' && policyObj.startedWorking === 'b' && (
               <div
               className={clsx('tab-item-wrapper no-scroll', {
                 active: activeTab === '7'
               })}
               index={7}>
                <Grid container spacing={1} className="pt-3">
                  <Grid item xs={12}>
                    <h4>Does your client have the right to reject a substitute?</h4>
                    <div className="text-f">
                      <p>Substitutes and helpers</p>
                    </div>
                    <div className="text-f">
                      <p>A substitute is someone you send in your place to do your role.</p>
                    </div>
                    <div className="text-f">
                      <p>This can include rejecting a substitute even if they are equally qualified, and meet your client’s interviewing, vetting and security clearance procedures.</p>
                    </div>

                   <div className="d-flex">
                     <Radio
                       checked={policyObj.rightToReject === 'a'}
                       onChange={() => {
                         setPolicyObj({ ...policyObj, rightToReject: 'a' });
                       }}
                       value="b"
                       name="radio-button-demo"
                       aria-label="B"
                     />
                     <span className="mt-3">Yes</span>
 
                     <Radio
                       checked={policyObj.rightToReject === 'b'}
                       onChange={() => {
                         setPolicyObj({ ...policyObj, rightToReject: 'b' });
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
                     className="font-weight-bold btn-slack px-4 my-3 bg-color">
                     Continue
                   </Button>
                 </Grid>
               </Grid>
             </div>
            )}
            {/* section 7b if officeholder is false and started working is true  */}
            {policyObj.officeHolder === 'false' && policyObj.startedWorking === 'a' && (
               <div
               className={clsx('tab-item-wrapper no-scroll', {
                 active: activeTab === '7'
               })}
               index={7}>
                <Grid container spacing={1} className="pt-3">
                  <Grid item xs={12}>
                    <h4>Have you ever sent a substitute to do this work?</h4>
                    <div className="text-f">
                      <p>Substitutes and helpers</p>
                    </div>
                    <div className="text-f">
                      <p>A substitute is someone you send in your place to do your role.</p>
                    </div>

                   <div className="d-flex">
                     <Radio
                       checked={policyObj.sentSubstitute === 'a'}
                       onChange={() => {
                         setPolicyObj({ ...policyObj, sentSubstitute: 'a' });
                       }}
                       value="b"
                       name="radio-button-demo"
                       aria-label="B"
                     />
                     <span className="mt-3">Yes, your client accepted them</span>
 
                     <Radio
                       checked={policyObj.sentSubstitute === 'b'}
                       onChange={() => {
                         setPolicyObj({ ...policyObj, sentSubstitute: 'b' });
                       }}
                       value="b"
                       name="radio-button-demo"
                       aria-label="B"
                     />
                     <span className="mt-3">Yes, but your client did not accept them</span>

                     <Radio
                       checked={policyObj.sentSubstitute === 'c'}
                       onChange={() => {
                         setPolicyObj({ ...policyObj, sentSubstitute: 'c' });
                       }}
                       value="c"
                       name="radio-button-demo"
                       aria-label="C"
                     />
                     <span className="mt-3"> No, it has not happened</span>
                   </div>
                   <Button
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
            )}

          {/* Section 8--> right to mive from task moveFromtask it comes when after rightToReject is yes section 7 */}
          {policyObj.rightToReject === 'a' && (
               <div
               className={clsx('tab-item-wrapper no-scroll', {
                 active: activeTab === '8'
               })}
               index={8}>
                <Grid container spacing={1} className="pt-3">
                  <Grid item xs={12}>
                    <h4>Does your client have the right to move you from the task you originally agreed to do?</h4>
                    <div className="text-f">
                      <p>Working arrangements</p>
                    </div>
                    <div className="text-f">
                      <p>A worker taken on for general tasks, rather than one specific task, might be moved as and when priorities change. The client may not need the worker’s permission to move them.</p>
                    </div>
                    <div className="text-f">
                      <p>Read more examples about the client’s control over <a href="https://www.gov.uk/hmrc-internal-manuals/employment-status-manual/esm0521" style={{color: "blue"}} target="_blank" >  what the worker does (opens in a new window) </a>.</p>
                    </div>

                   <div className="">
                     <Radio
                       checked={policyObj.moveFromtask === 'a'}
                       onChange={() => {
                         setPolicyObj({ ...policyObj, moveFromtask: 'a' });
                       }}
                       value="b"
                       name="radio-button-demo"
                       aria-label="B"
                     />
                     <span className="mt-3">Yes</span>
 
                     <Radio
                       checked={policyObj.moveFromtask === 'b'}
                       onChange={() => {
                         setPolicyObj({ ...policyObj, moveFromtask: 'b' });
                       }}
                       value="b"
                       name="radio-button-demo"
                       aria-label="B"
                     />
                     <span className="mt-3"> No, you would have to agree</span>
                     <Radio
                       checked={policyObj.moveFromtask === 'c'}
                       onChange={() => {
                         setPolicyObj({ ...policyObj, moveFromtask: 'c' });
                       }}
                       value="c"
                       name="radio-button-demo"
                       aria-label="C"
                     />
                     <span className="mt-3">  No, that would require a new contract or formal working arrangement</span>
                   </div>
                   <Button
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
            )}

          {/* Section 8A it comes when after rightToReject is no  section 7 */}
            {policyObj.rightToReject === 'b' && (
                  <div
                  className={clsx('tab-item-wrapper no-scroll', {
                    active: activeTab === '8'
                  })}
                  index={8}>
                   <Grid container spacing={1} className="pt-3">
                     <Grid item xs={12}>
                       <h4>Would you have to pay your substitute?</h4>
                       <div className="text-f">
                         <p>Substitutes and helpers</p>
                       </div>
                       <div className="text-f">
                         <p>This would include payments made by you or your business.</p>
                       </div>
   
                      <div className="">
                        <Radio
                          checked={policyObj.payYouSubstitue === 'a'}
                          onChange={() => {
                            setPolicyObj({ ...policyObj, payYouSubstitue: 'a' });
                          }}
                          value="b"
                          name="radio-button-demo"
                          aria-label="B"
                        />
                        <span className="mt-3">Yes</span>
    
                        <Radio
                          checked={policyObj.payYouSubstitue === 'b'}
                          onChange={() => {
                            setPolicyObj({ ...policyObj, payYouSubstitue: 'b' });
                          }}
                          value="b"
                          name="radio-button-demo"
                          aria-label="B"
                        />
                        <span className="mt-3"> No</span>
                      </div>
                      <Button
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
               )}

          {/* Section 9 --> rightToDecide  it comes when after movefromTask all option will move you to this tab */}
               <div
               className={clsx('tab-item-wrapper no-scroll', {
                 active: activeTab === '9'
               })}
               index={9}>
               <Grid container spacing={1} className="pt-3">
                 <Grid item xs={12}>
                   <h4>Does your client have the right to decide how the work is done?</h4>
                    <div className="text-f">
                       <p>Working arrangements</p>
                    </div>
                    <div className="text-f">
                       <p>This can include your client instructing, guiding or advising the way the task should be completed.</p>
                    </div>
                    <div className="text-f">
                       <p>This is not relevant if it is highly skilled work. For example, an airline pilot.</p>
                    </div>
                    <div className="text-f">
                       <p>Read more examples of <a href="https://www.gov.uk/hmrc-internal-manuals/employment-status-manual/esm0527" style={{color: "blue"}} target="_blank" > how the work is done (opens in a new window) </a>.</p>
                    </div>
                   <div className="d-flex">
                     <Radio
                       checked={policyObj.rightToDecide === 'a'}
                       onChange={() => {
                         setPolicyObj({ ...policyObj, rightToDecide: 'a' });
                       }}
                       value="b"
                       name="radio-button-demo"
                       aria-label="B"
                     />
                     <span className="mt-3">Yes</span>
 
                     <Radio
                       checked={policyObj.rightToDecide === 'b'}
                       onChange={() => {
                         setPolicyObj({ ...policyObj, rightToDecide: 'b' });
                       }}
                       value="b"
                       name="radio-button-demo"
                       aria-label="B"
                     />
                     <span className="mt-3">No, you solely decide</span>

                     <Radio
                       checked={policyObj.rightToDecide === 'c'}
                       onChange={() => {
                         setPolicyObj({ ...policyObj, rightToDecide: 'c' });
                       }}
                       value="c"
                       name="radio-button-demo"
                       aria-label="C"
                     />
                     <span className="mt-3"> No, you and your client agree together</span>

                     <Radio
                       checked={policyObj.rightToDecide === 'd'}
                       onChange={() => {
                         setPolicyObj({ ...policyObj, rightToDecide: 'd' });
                       }}
                       value="d"
                       name="radio-button-demo"
                       aria-label="D"
                     />
                     <span className="mt-3"> Not relevant, it is highly skilled work </span>
                   </div>
                   <Button
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
            {policyObj.rightToDecide === 'a' && (
             <div
               className={clsx('tab-item-wrapper no-scroll', {
                 active: activeTab === '10'
               })}
               index={10}>
               <Grid container spacing={1} className="pt-3">
                 <Grid item xs={12}>
                   <h4>Does your client have the right to decide your working hours?</h4>
                    <div className="text-f">
                       <p>Working arrangements</p>
                    </div>
                    <div className="d-flex">
                      <Radio
                        checked={policyObj.workingHours === 'a'}
                        onChange={() => {
                          setPolicyObj({ ...policyObj, workingHours: 'a' });
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3">Yes</span>
 
                     <Radio
                       checked={policyObj.workingHours === 'b'}
                       onChange={() => {
                         setPolicyObj({ ...policyObj, workingHours: 'b' });
                       }}
                       value="b"
                       name="radio-button-demo"
                       aria-label="B"
                     />
                     <span className="mt-3">No, you solely decide</span>

                     <Radio
                       checked={policyObj.workingHours === 'c'}
                       onChange={() => {
                         setPolicyObj({ ...policyObj, workingHours: 'c' });
                       }}
                       value="c"
                       name="radio-button-demo"
                       aria-label="C"
                     />
                     <span className="mt-3"> No, you and your client agree together</span>

                     <Radio
                       checked={policyObj.workingHours === 'd'}
                       onChange={() => {
                         setPolicyObj({ ...policyObj, workingHours: 'd' });
                       }}
                       value="d"
                       name="radio-button-demo"
                       aria-label="D"
                     />
                     <span className="mt-3">No, the work is based on agreed deadlines </span>
                   </div>
                   <Button
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
            )}

            {/* Section 11 */}

            {policyObj.workingHours === 'a' && (
             <div
               className={clsx('tab-item-wrapper no-scroll', {
                 active: activeTab === '11'
               })}
               index={11}>
               <Grid container spacing={1} className="pt-3">
                 <Grid item xs={12}>
                   <h4>Does your client have the right to decide where you do the work?</h4>
                    <div className="text-f">
                       <p>Working arrangements</p>
                    </div>
                    <div className="d-flex">
                      <Radio
                        checked={policyObj.whereUDoTheWork === 'a'}
                        onChange={() => {
                          setPolicyObj({ ...policyObj, whereUDoTheWork: 'a' });
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3">Yes</span>
 
                     <Radio
                       checked={policyObj.whereUDoTheWork === 'b'}
                       onChange={() => {
                         setPolicyObj({ ...policyObj, whereUDoTheWork: 'b' });
                       }}
                       value="b"
                       name="radio-button-demo"
                       aria-label="B"
                     />
                     <span className="mt-3">No, you solely decide</span>

                     <Radio
                       checked={policyObj.whereUDoTheWork === 'c'}
                       onChange={() => {
                         setPolicyObj({ ...policyObj, whereUDoTheWork: 'c' });
                       }}
                       value="c"
                       name="radio-button-demo"
                       aria-label="C"
                     />
                     <span className="mt-3"> No, the task sets the location </span>

                     <Radio
                       checked={policyObj.whereUDoTheWork === 'd'}
                       onChange={() => {
                         setPolicyObj({ ...policyObj, whereUDoTheWork: 'd' });
                       }}
                       value="d"
                       name="radio-button-demo"
                       aria-label="D"
                     />
                     <span className="mt-3"> No, some work has to be done in an agreed location and some can be your choice </span>
                   </div>
                   <Button
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
            )}


              {/* Section 12 */}

              {policyObj.workingHours === 'a' && (
             <div
               className={clsx('tab-item-wrapper no-scroll', {
                 active: activeTab === '12'
               })}
               index={12}>
               <Grid container spacing={1} className="pt-3">
                 <Grid item xs={12}>
                   <h4>Will you have to buy equipment before your client pays you?</h4>
                    <div className="text-f">
                       <p>Worker’s financial risk</p>
                    </div>
                    
                    <div className="text-f">
                      <p>This can include heavy machinery or high-cost specialist equipment used for this work. This does not include laptops, tablets and phones.
                      </p>
                    </div>


                    <div className="d-flex">
                      <Radio
                        checked={policyObj.whereUDoTheWork === 'a'}
                        onChange={() => {
                          setPolicyObj({ ...policyObj, whereUDoTheWork: 'a' });
                        }}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                      />
                      <span className="mt-3">Yes</span>
 
                     <Radio
                       checked={policyObj.whereUDoTheWork === 'b'}
                       onChange={() => {
                         setPolicyObj({ ...policyObj, whereUDoTheWork: 'b' });
                       }}
                       value="b"
                       name="radio-button-demo"
                       aria-label="B"
                     />
                     <span className="mt-3">No, you solely decide</span>

                     <Radio
                       checked={policyObj.whereUDoTheWork === 'c'}
                       onChange={() => {
                         setPolicyObj({ ...policyObj, whereUDoTheWork: 'c' });
                       }}
                       value="c"
                       name="radio-button-demo"
                       aria-label="C"
                     />
                     <span className="mt-3"> No, the task sets the location </span>

                     <Radio
                       checked={policyObj.whereUDoTheWork === 'd'}
                       onChange={() => {
                         setPolicyObj({ ...policyObj, whereUDoTheWork: 'd' });
                       }}
                       value="d"
                       name="radio-button-demo"
                       aria-label="D"
                     />
                     <span className="mt-3"> No, some work has to be done in an agreed location and some can be your choice </span>
                   </div>
                   <Button
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
            )}








              {/* Section 26 */}
              <div
              className={clsx('tab-item-wrapper no-scroll', {
                active: activeTab === '26'
              })}
              index={25}>
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h4>
                  Do you want to add some details to this document?
                  </h4>
                  <div className="text-f">
                    <span>
                    For example, contract information, job title or hiring department.
                    </span>
                    <span>
                    You will get a document that shows today’s date and time of completion, your answers and your result. This is for your records only, HMRC will not keep these details.
                    </span>
                  </div>
                  <div className="d-flex">
                    <Radio
                      checked={policyObj.add_details === 'a'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, add_details: 'a' });
                      }}
                      value="a"
                      name="radio-button-demo"
                      aria-label="A"
                    />
                    <span className="mt-3">Yes</span>

                    <Radio
                      checked={policyObj.add_details === 'b'}
                      onChange={() => {
                        setPolicyObj({ ...policyObj, add_details: 'b' });
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
                      getResults();
                    }}
                    className="font-weight-bold btn-slack px-4 my-3 bg-color">
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
