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

  const [activeTab, setActiveTab] = useState(1);
  const [nextQuestion, setNextQuestion] = useState(0);

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
    originallyAgreed: '',
    organisationWorkDone: '',
    payment: '',
    organisationHours: '',
    organisationWork: '',
    decideWorkingHours: '',
    decideWhereWorkIsDone: '',
    equipmentCosts: '',
    equipmentPay: '',
    vehicleCost: '',
    materialCost: '',
    otherCost: '',
    howWorkerIsPaid: '',
    putWorkRight: '',
    beforePay: '',
    paidWork: '',
    workerRight: '',
    corporateBenefits: '',
    managementResponsibilities: '',
    introduceWorker: '',
    noSimilarWork: '',
    suppliers: '',
    similarOrganisations: '',
    ownership: '',
    needPermission: '',
    clientOwnsRights: '',
    previousContract: '',
    belongOrganisation: '',
    immediately: '',
    availableWorking: '',
    months: '',
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

  // Accepts the array and key
  const groupBy = (array, key) => {
    // Return the end result
    return array.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. Else create an array and push the object
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
      return result;
    }, {}); // empty object is the initial value for result object
  };

  const goBack = () => {
    return history.goBack();
  };

  const toggle = (tab) => {
    if (tab === 1) {
      goBack();
    }
    if (tab >= activeTab) {
      console.log('next tab', tab);
    } else {
      policyObj[selectQuestion] = '';
      setPolicyObj({ ...policyObj });
      console.log('previous tab', tab);
    }
    if (activeTab !== tab) setActiveTab(tab);
  };

  document.addEventListener('keydown', function (event) {
    if (event.code === 'Enter' && activeTab === 0) {
      setActiveTab(1);
    }
  });

  const submitQuestions = () => {
    console.log('submitQuestions', policyObj.ir35Question);
    toast.dismiss();
    setDoSubmit(true);
    // Group by color as key to the person array
    let updateArray = groupBy(questions, 'heading');
    props.onLoadIr35QuestionsComplete(updateArray);
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
        {/* //Question Section*/}

        {questions.map((question, index) => (
          <>
            {index + 1 === activeTab && (
              <>
                <div className="fh">
                  <FontAwesomeIcon
                    icon={['fas', 'angle-left']}
                    className="mr-2"
                  />
                  <a
                    href="javascript:void(0)"
                    onClick={() => {
                      question.candidateSelect = false;
                      question.options.map((x) => (x.candidateSelect = false));
                      toggle(question.previous);
                    }}>
                    Back
                  </a>
                </div>
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
                              checked={option.candidateSelect}
                              onChange={() => {
                                question.options.map(
                                  (x) => (x.candidateSelect = false)
                                );
                                option.candidateSelect = true;
                                setNextQuestion(option.next);
                              }}
                              value={option.value}
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
                        question.candidateSelect = true;
                        if (nextQuestion === 2 || nextQuestion === 6) {
                          goBack();
                        }
                        toggle(parseInt(nextQuestion));
                      }}
                      className="font-weight-bold btn-slack px-4 my-3 bg-color">
                      Continue
                    </Button>
                  </Grid>
                </Grid>
              </>
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
