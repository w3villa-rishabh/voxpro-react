/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Grid, Button, Radio } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { connect } from 'react-redux';
import logo from '../../assets/images/voxpro-images/logo_vp.png';
import $ from 'jquery';
import { toast } from 'react-toastify';
import ir35Question from './ir35Questions';
import api from '../../api';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import questions from './new-patern';

import { getIr35QuestionsSuccess } from '../../reducers/ThemeOptions';

const IR35TaxComponent = (props) => {
  const history = useHistory();

  const [activeTab, setActiveTab] = useState('0');
  const [doSubmit, setDoSubmit] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const location = useLocation();
  let selectQuestion = '';

  const [policyObj, setPolicyObj] = useState({
    limitedCompany: '',
    hasContractStarted: '',
    director: '',
    reject: '',
    substitute: '',
    payYourSubstitute: '',
    signinficantAmountWork: '',
    originallyAgreed: 'a',
    organisationWorkDone: 'a',
    payment: 'a',
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
    months: 'a',
    ir35Question: ir35Question,
    noquestion: 'b'
  });

  useEffect(() => {
    setTimeout(() => {
      $('.app-content--inner').addClass('remove-p');
      $('.app-footer').css('display', 'none');
    }, 0);
  });

  useEffect(() => {
    const editQuestion = JSON.parse(localStorage.getItem('editQuestion'));
    console.log(location.state);
    if (!!editQuestion && !!location.state) {
      const ir35Questions = props.ir35Questions;
      setPolicyObj({ ...ir35Questions });
      toggle(editQuestion.activeTab);
      setEditMode(true);
    } else {
      localStorage.removeItem('editQuestion');
    }
  }, [props.ir35Questions]);

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
    if (parseInt(tab) >= parseInt(activeTab)) {
      console.log('next tab', tab);
    } else {
      policyObj[selectQuestion] = '';
      setPolicyObj({ ...policyObj });
      console.log('previous tab', tab);
    }
    if (activeTab !== tab) setActiveTab(tab);
  };

  const updateQuestion = (question) => {
    console.log('updateQuestion', question);
    selectQuestion = question;
    return true;
  };

  document.addEventListener('keydown', function (event) {
    if (event.code === 'Enter' && activeTab === '0') {
      setActiveTab('1');
    }
  });

  const submitQuestions = () => {
    console.log('submitQuestions', policyObj.ir35Question);
    toast.dismiss();
    setDoSubmit(true);
    props.onLoadIr35QuestionsComplete(policyObj);
    if (editMode) {
      return history.goBack();
    }
    api
      .post('/api/v1/ir_answers', {
        ir_answer: JSON.stringify(policyObj)
      })
      .then((response) => {
        setDoSubmit(false);
        if (response.data.success) {
          setActiveTab('0');
          toast.success(response.data.message);
          console.log('success');
        } else {
          toast.error(response.data.message);
          console.log('not success');
        }
      })
      .catch(() => {
        setDoSubmit(false);
        toast.error('Something went wrong');
      });
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
        {policyObj.noquestion !== 'a' && (
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
                  toggle('1');
                }}
                className="font-weight-bold btn-slack px-4 bg-color button-width">
                START
              </Button>
              <p className="fh">
                Press enter
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
          </div>
        )}
        {/* //Section 1 */}

        {questions.map((question, index) => (
          <>
            {index + 1 === 1 && (
              <Grid container spacing={1} className="pt-3">
                <Grid item xs={12}>
                  <h6>{question.heading}</h6>
                  <h4>{question.question}</h4>
                  <div className="text-f">
                    <p>{question.p1}</p>
                    <p>{question.p2}</p>
                  </div>
                  <div>
                    <ul>
                      {question.options.map((option, i) => (
                        <li>
                          <Radio
                            // checked={policyObj.limitedCompany === 'a'}
                            // onChange={() => {
                            //   let obj = policyObj;
                            //   obj.limitedCompany = 'a';
                            //   obj.ir35Question[0].questions[0] = {
                            //     limitedCompany: 'a',
                            //     activeTab: activeTab,
                            //     question: `Do you provide your services through a limited company,
                            // partnership or unincorporated association?`,
                            //     candidateAnswer: 'Yes'
                            //   };

                            //   setPolicyObj({ ...obj });
                            // }}
                            value="a"
                            name="radio-button-demo"
                            aria-label="A"
                          />
                          <span className="mt-3 fhh">{option.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    size="large"
                    variant="contained"
                    onClick={() => {
                      toggle('2');
                    }}
                    className="font-weight-bold btn-slack px-4 my-3 bg-color">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            )}
          </>
        ))}

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
              disabled={doSubmit}
              onClick={submitQuestions}
              className="font-weight-bold btn-slack px-4 bg-color button-width">
              Submit
            </Button>

            {/* <Button
                size="medium"
                variant="contained"
                onClick={() => {
                  toggle('1');
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
};

const mapStateToProps = (state) => ({
  ir35Questions: state.ThemeOptions.ir35Questions
});

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadIr35QuestionsComplete: (question) => {
      dispatch(getIr35QuestionsSuccess(question));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IR35TaxComponent);
