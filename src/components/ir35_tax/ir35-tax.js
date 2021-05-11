/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
  Grid,
  Button,
  Radio,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { connect } from 'react-redux';
import logo from '../../assets/images/voxpro-images/logo_vp.png';
import $ from 'jquery';
import _ from 'lodash';
import { toast } from 'react-toastify';
import api from '../../api';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { getCurrentUser } from 'helper';

import {
  getIr35QuestionsSuccess,
  setNextQuestion,
  onIr35Questions,
  setChecked,
  setEditMode
} from '../../reducers/ThemeOptions';

const IR35TaxComponent = (props) => {
  const history = useHistory();
  const [currentUser] = useState(getCurrentUser());
  const [activeTab, setActiveTab] = useState(1);
  const [finalSubmit, setFinalSubmit] = useState(false);
  const [open, setOpen] = useState(false);

  const [doSubmit, setDoSubmit] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      $('.app-content--inner').addClass('remove-p');
      $('.app-footer').css('display', 'none');
    }, 0);
  });

  useEffect(() => {
    const editQuestion = JSON.parse(localStorage.getItem('editQuestion'));
    if (!!editQuestion && !!location.state) {
      console.log(location.state);
      // const ir35Questions = props.ir35Questions;
      // setPolicyObj({ ...ir35Questions });
      // setCheck(editQuestion.value);
      toggle(editQuestion.index);
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

  const goBack = () => {
    return history.goBack();
  };

  const goBackView = () => {
    return history.push('/view-ir35-query');
  };

  const toggle = (tab) => {
    if (tab < 1) {
      goBack();
    }
    if (tab >= activeTab) {
      console.log('next tab', tab);
    } else {
      console.log('previous tab', tab);
    }
    if (activeTab !== tab) setActiveTab(tab);
  };

  document.addEventListener('keydown', function (event) {
    if (event.code === 'Enter' && activeTab === 0) {
      setActiveTab(1);
    }
  });

  // Accepts the array and key
  const groupBy = (array) => {
    // Return the end result
    return (
      _.chain(array)
        .filter((a) => a.options.length !== 0)
        // Group the elements of Array based on `heading` property
        .groupBy('heading')
        // `key` is group's name (heading), `value` is the array of objects
        .map((value, key) => ({ heading: key, questions: value }))
        .value()
    );
  };

  const submitQuestions = () => {
    toast.dismiss();
    setDoSubmit(true);
    // Group by heading as key to the person array
    // let updateArray = groupBy(props.questions);
    // props.onLoadIr35QuestionsComplete(props.questions);
    if (currentUser.role === 'agency') {
      let updateArray = groupBy(props.questions);
      props.onIr35Questions(props.questions);
      props.onLoadIr35QuestionsComplete(updateArray);
      goBack();
    } else {
      api
        .post('/api/v1/ir_answers', {
          ir_answer: JSON.stringify(props.questions)
        })
        .then((response) => {
          setDoSubmit(false);
          if (response.data.success) {
            setActiveTab('0');
            toast.success(response.data.message);
            console.log('success');
            goBack();
          } else {
            toast.error(response.data.message);
            console.log('not success');
          }
        })
        .catch(() => {
          setDoSubmit(false);
          toast.error('Something went wrong');
        });
    }
  };

  const handleClose = () => {
    setOpen(false);
    goBack();
  };

  return (
    <div className="ir35-background text-white">
      <div className="img-bg"></div>

      <div className="font-12 position-relative p-3">
        {/* //Question Section*/}
        {!finalSubmit && (
          <>
            {props.questions.map((question, index) => (
              <>
                {index + 1 === activeTab && (
                  <div key={index}>
                    {currentUser.role === 'candidate' && (
                      <div className="fh">
                        <FontAwesomeIcon
                          icon={['fas', 'angle-left']}
                          className="mr-2"
                        />
                        <a
                          href="javascript:void(0)"
                          onClick={() => {
                            if (currentUser.role === 'agency') {
                              question.agencySelect = false;
                              question.options.map(
                                (x) => (x.agencySelect = false)
                              );
                            } else {
                              question.candidateSelect = false;
                              question.options.map(
                                (x) => (x.candidateSelect = false)
                              );
                            }
                            toggle(question.previous);
                          }}>
                          Back
                        </a>
                      </div>
                    )}
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
                              <li key={i}>
                                {currentUser.role === 'candidate' && (
                                  <Radio
                                    checked={option.candidateSelect}
                                    onChange={() => {
                                      question.options.map(
                                        (x) => (x.candidateSelect = false)
                                      );
                                      option.candidateSelect = true;
                                      props.setNextQuestion(option.next);
                                    }}
                                    value={option.value}
                                    name="radio-button-demo"
                                    aria-label="A"
                                  />
                                )}

                                {currentUser.role === 'agency' && (
                                  <Radio
                                    checked={option.value == props.checked}
                                    onChange={(e) => {
                                      props.setChecked(e.target.value);
                                      let checkQuestion = props.questions.find(
                                        (q) =>
                                          q.index === option.next &&
                                          q.candidateSelect === true
                                      );
                                      debugger
                                      if (!checkQuestion) {
                                        // setOpen(true);
                                        props.setEditMode(true);
                                      }

                                      question.options.map(
                                        (x) => (x.agencySelect = false)
                                      );

                                      option.agencySelect = true;
                                      props.setNextQuestion(option.next);
                                    }}
                                    value={option.value}
                                    name="radio-button-demo"
                                    aria-label="A"
                                  />
                                )}

                                {currentUser.role === 'company' && (
                                  <Radio
                                    checked={option.value == props.checked}
                                    onChange={(e) => {
                                      props.setChecked(e.target.value);
                                      let checkQuestion = props.questions.find(
                                        (q) =>
                                          q.index === option.next &&
                                          q.candidateSelect === true
                                      );
                                      if (!checkQuestion) {
                                        // setOpen(true);
                                        // alert('Need to change questions');
                                        props.setEditMode(true);
                                      }

                                      question.options.map(
                                        (x) => (x.companySelect = false)
                                      );

                                      option.companySelect = true;
                                      props.setNextQuestion(option.next);
                                    }}
                                    value={option.value}
                                    name="radio-button-demo"
                                    aria-label="A"
                                  />
                                )}
                                <span className="mt-3 fhh">{option.name}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button
                          size="large"
                          variant="contained"
                          onClick={() => {
                            if (currentUser.role === 'candidate') {
                              question.candidateSelect = true;
                              if (
                                props.nextQuestion === 2 ||
                                props.nextQuestion === 6
                              ) {
                                goBack();
                              }
                              if (
                                props.nextQuestion === 60 ||
                                props.nextQuestion === 61 ||
                                props.nextQuestion === 63 ||
                                props.nextQuestion === 64 ||
                                props.nextQuestion === 67
                              ) {
                                setFinalSubmit(true);
                              }
                              toggle(props.nextQuestion);
                            } else if (props.editMode) {
                              if (currentUser.role === 'agency') {
                                question.agencySelect = true;
                              } else if (currentUser.role === 'company') {
                                question.companySelect = true;
                              }
                              if (
                                props.nextQuestion === 2 ||
                                props.nextQuestion === 6
                              ) {
                                history.push('/start-ir35');
                              }
                              toggle(props.nextQuestion);
                              props.setChecked('');
                              if (
                                props.nextQuestion === 60 ||
                                props.nextQuestion === 61 ||
                                props.nextQuestion === 63 ||
                                props.nextQuestion === 64 ||
                                props.nextQuestion === 67
                              ) {
                                goBackView();
                              }
                            } else {
                              goBack();
                            }
                          }}
                          className="font-weight-bold btn-slack px-4 my-3 bg-color">
                          Continue
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                )}
              </>
            ))}
          </>
        )}

        {/* Section 25 */}
        {finalSubmit && (
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
          </div>
        )}
      </div>
      <Dialog
        classes={{ paper: 'modal-content' }}
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title2">
        <DialogTitle id="form-dialog-title">Change questions</DialogTitle>

        <DialogContent className="p-0">
          <div>
            <div className="border-0">
              <div className="card-body">
                <div className="text-right">
                  <DialogActions className="border-0">
                    <Button
                      variant="contained"
                      onClick={handleClose}
                      className="font-weight-bold btn-second px-4 my-3">
                      Cancel
                    </Button>

                    <Button
                      variant="contained"
                      type="submit"
                      className="font-weight-bold btn-second px-4 my-3">
                      Ok
                    </Button>
                  </DialogActions>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ir35Questions: state.ThemeOptions.ir35Questions,
  questions: state.ThemeOptions.irQuestions,
  nextQuestion: state.ThemeOptions.nextQuestion,
  checked: state.ThemeOptions.checked,
  editMode: state.ThemeOptions.editMode
});

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadIr35QuestionsComplete: (question) => {
      dispatch(getIr35QuestionsSuccess(question));
    },
    onIr35Questions: (question) => {
      dispatch(onIr35Questions(question));
    },
    setNextQuestion: (next) => {
      dispatch(setNextQuestion(next));
    },
    setChecked: (next) => {
      dispatch(setChecked(next));
    },
    setEditMode: (mode) => {
      dispatch(setEditMode(mode));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IR35TaxComponent);
