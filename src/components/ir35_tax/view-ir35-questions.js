/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Card, Button, Table, Collapse } from '@material-ui/core';
import clsx from 'clsx';
import _ from 'lodash';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';
import api from '../../api';
import { getCurrentUser } from '../../helper';
import { useHistory } from 'react-router-dom';
import {
  getIr35QuestionsSuccess,
  onIr35Questions,
  setNextQuestion,
  setQuestionId,
  setChecked,
  setEditMode
} from '../../reducers/ThemeOptions';

const AgencyTable = (props) => {
  const [accordion, setAccordion] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false
  ]);
  const [currentUser] = useState(getCurrentUser());
  const history = useHistory();
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    getAnswer();
  }, []);

  function getAnswer() {
    api.get(`/api/v1/user_answers?id=${currentUser.id}`).then((response) => {
      if (response.data.success && !!response.data.ir_answers.length) {
        const data = response.data.ir_answers.sort((a, b) => a.id - b.id);
        console.log('data', data);
        setUserId(data[0].user_id);
        props.setEditMode(false);
        let updateArray = groupBy(data);
        // props.onIr35Questions(data);
        props.onLoadIr35QuestionsComplete(updateArray);
      }
    });
  }

  // Accepts the array and key
  const groupBy = (array) => {
    // Return the end result
    return (
      _.chain(array)
        // .filter((a) => a.options.length !== 0)
        // Group the elements of Array based on `heading` property
        .groupBy('heading')
        // `key` is group's name (heading), `value` is the array of objects
        .map((value, key) => ({ heading: key, questions: value }))
        .value()
    );
  };

  const toggleAccordion = (tab) => {
    const prevState = accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    setAccordion([...state]);
  };

  const editQuestion = (e, ques) => {
    e.preventDefault();
    console.log('editQuestion', ques);
    let updateQuestion = props.questions;
    let findObj = updateQuestion[ques.question_number - 1].options.find(
      (a) => a.name === ques.candidate_answer
    );
    props.setQuestionId(ques.id);
    props.setNextQuestion(findObj.next);
    props.setChecked(findObj.value);
    history.push('/ir35-verify');
    ques.user_id = userId;
    localStorage.setItem('editQuestion', JSON.stringify(ques));
  };

  return (
    <>
      <div className="page-title">
        <BallotTwoToneIcon />
        <div className="title pt-3">
          <b className="heading">Review IR35 Questionnaires</b>
        </div>
      </div>
      {props.answer.length === 0 ? (
        'Loading Answers...'
      ) : (
        <div className="accordion mb-2">
          {props.answer.map((ans, index) => (
            <Card
              className={clsx('card-box', {
                'panel-open': accordion[index]
              })}>
              <Card>
                <div className="card-header">
                  <div className="panel-title">
                    <div className="accordion-toggle">
                      <Button
                        variant="text"
                        size="large"
                        className="btn-link d-flex align-items-center justify-content-between btn-transition-none"
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={accordion[index]}>
                        <span className="font-weight-bold">{ans.heading}</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-up']}
                          className="font-size-xl accordion-icon"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <Collapse in={accordion[index]}>
                  <div className="table-responsive">
                    <Table className="table table-hover mb-0">
                      <thead>
                        <tr>
                          <th className="text-center">No</th>
                          <th className="w-43">Question</th>
                          <th className="tx-left">Candidate Answer</th>
                          {currentUser.role === 'agency' && (
                            <th className="tx-center">Agency Answer</th>
                          )}
                          {currentUser.role === 'company' && (
                            <>
                              <th className="tx-center">Agency Answer</th>
                              <th className="tx-right">Company Answer</th>
                            </>
                          )}
                          <th className="tx-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ans.questions.map((ques, i) => (
                          <>
                            <tr>
                              <td className="tx-nowrap">
                                <div className="float-right font-weight-bold">
                                  {i + 1}
                                </div>
                              </td>
                              <td className="">{ques.question}</td>
                              <td className="tx-center">
                                {ques.candidate_answer}
                              </td>
                              {currentUser.role === 'agency' && (
                                <td className="tx-center">
                                  {ques.agency_answer}
                                </td>
                              )}
                              {currentUser.role === 'company' && (
                                <td className="tx-center">
                                  {ques.company_answer}
                                </td>
                              )}
                              <td className="tx-right">
                                <a
                                  href="#/"
                                  onClick={(e) => editQuestion(e, ques)}
                                  className="a-blue"
                                  title="Edit Question">
                                  Edit
                                </a>
                              </td>
                            </tr>
                          </>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </Collapse>
              </Card>
            </Card>
          ))}
          <div className="m-5 text-center">
            <Button
              size="small"
              // onClick={updateAnswer}
              className="btn-primary ml-2">
              Continue
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  answer: state.ThemeOptions.ir35answers,
  questions: state.ThemeOptions.irQuestions,
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
    },
    setQuestionId: (id) => {
      dispatch(setQuestionId(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AgencyTable);
