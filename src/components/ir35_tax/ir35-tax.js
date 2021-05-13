/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Grid, Button, Radio } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { connect } from 'react-redux';
import logo from '../../assets/images/voxpro-images/logo_vp.png';
import $ from 'jquery';
import { toast } from 'react-toastify';
import api from '../../api';
import { useHistory } from 'react-router-dom';
import { getCurrentUser } from 'helper';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

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
  const [startAgain, setStartAgain] = useState(false);
  const [doSubmit, setDoSubmit] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      $('.app-content--inner').addClass('remove-p');
      $('.app-footer').css('display', 'none');
    }, 0);
  });

  useEffect(() => {
    const editQuestion = JSON.parse(localStorage.getItem('editQuestion'));
    if (editQuestion) {
      toggle(editQuestion.question_number);
    } else {
      // localStorage.removeItem('editQuestion');
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

  const submitQuestions = () => {
    toast.dismiss();
    setDoSubmit(true);

    let updateQuestion = [];
    props.questions.forEach((que) => {
      if (que.candidateSelect) {
        let findOptions = que.options.find((a) => a.candidateSelect === true);
        updateQuestion.push({
          user_id: currentUser.id,
          question_number: que.index,
          heading: que.heading,
          question: que.question,
          candidate_answer: findOptions.name
        });
      }
    });
    api
      .post('/api/v1/user_answers', {
        userId: currentUser.id,
        answers: updateQuestion
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
  };

  const updateNewQuestions = () => {
    toast.dismiss();
    const editQuestion = JSON.parse(localStorage.getItem('editQuestion'));

    setDoSubmit(true);
    let updateQuestion = [];
    props.questions.forEach((que) => {
      if (que.agencySelect) {
        let findOptions = que.options.find((a) => a.agencySelect === true);
        updateQuestion.push({
          user_id: editQuestion.user_id,
          question_number: que.index,
          heading: que.heading,
          question: que.question,
          agency_answer: findOptions.name
        });
      }
    });
    api
      .put(`/api/v1/user_answers/1`, {
        id: editQuestion.user_id,
        answers: updateQuestion
      })
      .then((response) => {
        setDoSubmit(false);
        if (response.data.success) {
          goBackView();
          // toast.success(response.data.message);
          console.log('agency answer create success');
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
  };

  const updateAnswer = (answer, que) => {
    console.log('answer', answer);
    const editQuestion = JSON.parse(localStorage.getItem('editQuestion'));
    let updateQuestion = [
      {
        user_id: editQuestion.user_id,
        question_number: que.index,
        heading: que.heading,
        question: que.question,
        agency_answer: answer
      }
    ];
    toast.dismiss();

    api
      .put(`/api/v1/user_answers/${editQuestion.id}`, {
        id: editQuestion.user_id,
        answers: updateQuestion
      })
      .then((response) => {
        if (response.data.success) {
          console.log('updateQuestion', response.data);
          // toast.success(response.data.message);
        } else {
          console.log('data');
        }
      })
      .catch(() => {
        toast.error('Something went wrong');
      });
  };

  const checkQuestion = (option) => {
    return props.questions.find(
      (q) => q.index === option.next && q.candidateSelect === true
    );
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
                            } else {
                              question.candidateSelect = false;
                            }

                            question.options.map((x) =>
                              currentUser.role === 'company'
                                ? (x.companySelect = false)
                                : currentUser.role === 'agency'
                                ? (x.agencySelect = false)
                                : (x.candidateSelect = false)
                            );

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
                                    onChange={(e) => {
                                      question.options.map((x) =>
                                        x.value === e.target.value
                                          ? (x.candidateSelect = true)
                                          : (x.candidateSelect = false)
                                      );
                                      props.setNextQuestion(option.next);
                                    }}
                                    value={option.value}
                                    name="radio-button-demo"
                                  />
                                )}

                                {(currentUser.role === 'agency' ||
                                  currentUser.role === 'company') && (
                                  <Radio
                                    checked={option.value == props.checked}
                                    onChange={async (e) => {
                                      let value = e.target.value;
                                      let checkQues = await checkQuestion(
                                        option
                                      );
                                      if (
                                        question.heading ===
                                          'Working arrangements' ||
                                        question.heading ===
                                          'Worker’s financial risk' ||
                                        question.heading ===
                                          'Worker’s involvement'
                                      ) {
                                        checkQues = true;
                                      }
                                      if (!checkQues && !startAgain) {
                                        confirmAlert({
                                          title: 'Confirm to change question',
                                          message:
                                            'To change an answer in this section. This will update your question',
                                          buttons: [
                                            {
                                              label: 'Start',
                                              onClick: () => {
                                                updateAnswer(
                                                  option.name,
                                                  question
                                                );
                                                setStartAgain(true);
                                                props.setChecked('');
                                                toggle(1);
                                                // props.setEditMode(true);
                                                // props.setChecked(value);
                                                // // question.agencySelect = false;
                                                // // question.options.map(
                                                // //   (x) =>
                                                // //     (x.candidateSelect = false)
                                                // // );
                                                // question.options.map((x) =>
                                                //   x.value === value
                                                //     ? (x.agencySelect = true)
                                                //     : (x.agencySelect = false)
                                                // );
                                                // props.setNextQuestion(
                                                //   option.next
                                                // );
                                              }
                                            },
                                            {
                                              label: 'Take me back',
                                              onClick: () => {
                                                console.log('not change');
                                                return;
                                              }
                                            }
                                          ],
                                          closeOnClickOutside: false,
                                          overlayClassName:
                                            'alert-overlay-custom'
                                        });
                                      } else {
                                        props.setChecked(value);

                                        if (currentUser.role === 'agency') {
                                          question.options.map((x) =>
                                            x.value === value
                                              ? (x.agencySelect = true)
                                              : (x.agencySelect = false)
                                          );
                                        } else if (
                                          currentUser.role === 'company'
                                        ) {
                                          question.options.map((x) =>
                                            x.value === value
                                              ? (x.companySelect = true)
                                              : (x.companySelect = false)
                                          );
                                        }
                                        question.selectAns = option.name;
                                        props.setNextQuestion(option.next);
                                      }
                                    }}
                                    value={option.value}
                                    name="radio-button-demo"
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
                          onClick={async () => {
                            if (currentUser.role === 'candidate') {
                              question.candidateSelect = true;
                              if (props.nextQuestion === 2) {
                                goBack();
                              }

                              if (
                                props.nextQuestion === 6 ||
                                props.nextQuestion === 60 ||
                                props.nextQuestion === 61 ||
                                props.nextQuestion === 63 ||
                                props.nextQuestion === 64 ||
                                props.nextQuestion === 67
                              ) {
                                setFinalSubmit(true);
                              }
                              let findBack = question.options.find(
                                (a) => a.candidateSelect === true
                              );
                              if (findBack) {
                                toggle(findBack.next);
                              } else {
                                toggle(props.nextQuestion);
                              }
                            } else if (startAgain) {
                              if (currentUser.role === 'agency') {
                                question.agencySelect = true;
                              } else if (currentUser.role === 'company') {
                                question.companySelect = true;
                              }
                              if (props.nextQuestion === 2) {
                                // history.push('/start-ir35');
                                toggle(1);
                              } else {
                                toggle(props.nextQuestion);
                              }

                              props.setChecked('');
                              if (
                                props.nextQuestion === 6 ||
                                props.nextQuestion === 60 ||
                                props.nextQuestion === 61 ||
                                props.nextQuestion === 63 ||
                                props.nextQuestion === 64 ||
                                props.nextQuestion === 67
                              ) {
                                // goBackView();
                                updateNewQuestions(question);
                              }
                            } else {
                              await updateAnswer(question.selectAns, question);
                              await goBack();
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  ir35Questions: state.ThemeOptions.ir35Questions,
  questions: state.ThemeOptions.irQuestions,
  nextQuestion: state.ThemeOptions.nextQuestion,
  checked: state.ThemeOptions.checked,
  editMode: state.ThemeOptions.editMode,
  editQuestionId: state.ThemeOptions.editQuestionId
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
